var app1 = new Vue({
    el: '#vue-app',
    data: {
        mvvm: 100,
        a: { a: 1 }
    },
    computed: {
        hero() {
            return this.mvvm * 3;
        },
    },
    // methods: {
    //     carzy() {
    //         this.progress -= 10;
    //         if (this.progress <= 0) {
    //             this.changeColor = true;
    //         }
    //     },
    //     reset() {
    //         this.progress = 100;
    //         this.changeColor = false;
    //     }
    // },
});