let app = new Vue({
    el: "#app",
        data:{
        clicked: false
    },
    methods: {
        checkClick: function () {
            this.clicked = true;
        }
    },
})