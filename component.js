Vue.component('date', {
    data: function () {
        return {
          today: ''   
        }
    },
    mounted: function () {
        const now = new Date();
        this.today = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
    },
    template:'<div>{{ today }}</div>'
})

let app = new Vue({
    el: '#app',
    data: {
        
    }
})