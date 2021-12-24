const today = new Date();
let hour = today.getHours();

let app = new Vue({
    el: "#app",
    data: {
        out_service: (hour > 20),
    }
})