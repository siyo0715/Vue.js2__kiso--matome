Vue.component('clock', {
    data: function(){
        
      return {
          time: '',
        //   title:'時計↓'
      }
    },
    mounted: function () {
        let timerID = setInterval(this.refresh, 500);
        this.refresh();
    },
    methods: {
        refresh: function () {
          let now = new Date();
          this.time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        }
    },
    template: '<div :style=""><h2><slot>時計↓</slot></h2>{{time}}</div>'
})

let app = new Vue({
    el: '#app'
})