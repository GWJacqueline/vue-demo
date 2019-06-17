function Vue(options = {}) {
    // 将所有属性挂载到$options
    this.$options = options;
    //this._data
    var data = this._data = this.$options.data;
    //观察对象，每个去劫持一下
    observer(data);
    // 挂载到this上，便于直接通过this.x访问,this代理了this._data

    for (let key in data) {

        Object.defineProperty(this, key, {
            enumerable: true,
            get() {
                return this._data[key];
            },
            set(newVal) {
                this._data[key] = newVal;
            }
        });
    }
    // 让这里的this都是当前的实例
    initComputed.call(this);
    new Compile(options.el, this);
}
//初始化computed
function initComputed() {
    //保存this
    let vm = this;
    //获取computed属性
    let computed = this.$options.computed;
    //通过Object.keys拿到computed上的key以数组的形式输出
    Object.keys(computed).forEach(key => {
        Object.defineProperty(vm, key, {
            // 判断computed后的是否为函数，如果为函数，就还回去，默认执行get方法，如果不是函数，就执行get方法
            get: typeof computed[key] === 'function' ? computed[key] : computed[key].get,
            set() { },
        });
    });
};

// 模板编译
function Compile(el, vm) {
    //开始替换
    // el表示替换的范围
    vm.$el = document.querySelector(el);
    // 创建文档碎片
    let fragment = document.createDocumentFragment();
    // 将el中的内容移到内存中
    //返回文档的首个子节点
    while (child = vm.$el.firstChild) {
        fragment.appendChild(child);
    };
    replace(fragment);
    function replace(fragment) {
        // 获取子节点集合并转化成数组,循环每一层
        //fragment.childNodes是类数组，需要用Array,from转成数组
        Array.from(fragment.childNodes).forEach(node => {
            // 获取每个子节点的文本内容
            let text = node.textContent;
            let reg = /\{\{(.*)\}\}/;
            // 判断节点类型是否为文本
            if (node.nodeType === 3 && reg.test(text)) {
                //与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
                console.log(RegExp.$1);   //mvvm,a ,a.a
                //将类似a.a的字符串变成字符串数组
                let arr = RegExp.$1.split('.');
                let val = vm;
                arr.forEach(key => {
                    key = key.trim();
                    val = val[key];
                    console.log(val);
                });
                // 替换的逻辑
                // 通过this上的值(比如mvvm)获取新值,把值传到给newVal
                new Watcher(vm, RegExp.$1, function (newVal) {    //函数里需要取到新值
                    node.textContent = text.replace(/\{\{(.*)\}\}/, newVal);
                });

                node.textContent = text.replace(/\{\{(.*)\}\}/, val);
            }
            // 判断元素是否为元素
            if (node.nodeType === 1) {
                // 获取当前dom节点上的属性
                let nodeAttrs = node.attributes;
                // console.log(nodeAttrs);
                // 将类数组转化为数组进行循环遍历
                Array.from(nodeAttrs).forEach(attr => {
                    let name = attr.name;
                    let exp = attr.value;
                    if (name.indexOf("v-") == 0) {
                        // 默认v-就为v-model
                        //把对应的值赋给输入框
                        node.value = vm[exp];
                    }
                    // 需要订阅一下，每次修改，就把对应的值赋给输入框
                    new Watcher(vm, exp, function (newVal) {
                        //当Watcher触发时，把最新的值赋给输入框
                        node.value = newVal;
                    });
                    //当输入框输入时，要有值映射到属性上
                    node.addEventListener('input', function (e) {
                        let newVal = e.target.value;
                        //值改变，则会触发set方法中的notify,则会更新watcher,将值渲染到输入框里
                        vm[exp] = newVal;
                    })
                });
            }
            // 如果有子节点，需要再执行replace
            if (node.hasChildNodes()) {
                replace(node);
            }
        });
    }

    vm.$el.appendChild(fragment);

}

// 主要逻辑
function Observer(data) {
    for (item in data) {
        let val = data[item];
        //递归，劫持对象中还有对象的问题
        observer(val);
        let dep = new Dep();
        // 把data属性通过Object.defineProperty的方式  定义属性
        Object.defineProperty(data, item, {
            //可枚举
            enumerable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);
                return val;
            },
            set(newVal) {
                // 设置的值和以前相同
                if (val === newVal) {
                    return
                } else {

                    //把最新的值赋给val,当取值的时候取到的就是新的newval
                    val = newVal;
                    //定义新值的时候，也需要把再去定义成属性
                    observer(newVal);
                    //让所有的watch.update方法执行
                    dep.notify();
                }
            },
        });
    }
};

// 观察对象给对象增加Object.defineProperty
function observer(data) {
    //防止溢出
    if (typeof data !== 'object') return;
    return new Observer(data);
}
//
function Dep() {
    //事件池
    this.subs = [];
}
//规定每个方法中都有一个updata属性 
//订阅
Dep.prototype.addSub = function (sub) {
    this.subs.push(sub);
}

//依次执行
Dep.prototype.notify = function () {
    this.subs.forEach(sub => {
        sub.updata();
    });
}
//创建Watcher类，通过Watcher创建的实例都有updata方法
function Watcher(vm, exp, fn) {
    this.fn = fn;
    this.vm = vm;
    this.exp = exp;
    Dep.target = this;
    let val = vm;
    let arr = exp.split('.');
    arr.forEach(key => {
        key = key.trim();
        val = val[key];
    });
    Dep.target = null;
}

Watcher.prototype.updata = function () {

    let val = this.vm;
    let arr = this.exp.split(".");
    arr.forEach(key => {
        key = key.trim();
        val = val[key];
    });
    this.fn(val);
};
// 监听函数
// let watcher = new Watcher(vm, exp, function () {
//     console.log("发布订阅模式");
// });



// Vue的特点是不能新增不存在的属性，不存在的属性没有get和set。没有的话，就不能监听数据的变化了
//深度响应 因为每次赋予一个新对象时，会给这个新对象增加数据劫持，就是defineProperty