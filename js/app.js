new Vue({
    el: "#app",
    data: {
        health: 100,
        endGame: false
    },
    methods: {
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.endGame = true
            }
        },
        restart: function () {
            this.health = 100;
            this.endGame = false;
        }
    },
    computed: {

    }
})