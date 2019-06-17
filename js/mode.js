// 发布订阅模式：有一些方法可以帮我们订阅一些事件，放在数组中，比如
// ：[f1,f2,f3]。当我们要发布的时候，把数组依次循环执行。



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
function Watcher(fn) {
    this.fn = fn;
}

Watcher.prototype.updata = function () {
    this.fn();
};
// 监听函数
let watcher = new Watcher(function () {
    console.log("发布订阅模式");
});

let dep = new Dep();
dep.addSub(watcher);
dep.notify();