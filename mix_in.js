const Util = {
    methods: {
        addZero: function (value) {
          if (value < 10) {
            return '0' + value
          } else {
              return value
          }
        }
    },
}

let app = new Vue({
    el: '#app',
    data: {
        number: 5
    },
    mounted: function () {
        this.number = this.addZero(this.number)
    },
    mixins: [Util]
})