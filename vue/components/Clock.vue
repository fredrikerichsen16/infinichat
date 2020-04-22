<script>
    export default {
        name: 'Clock',

        data() {
            return {
                HOURS: '',
                MINUTES: '',
                AM_PM: ''
            }
        },

        computed: {
            clockFormat() {
                return '24hr';
            }
        },

        methods: {
            addPrecedingZero(n) {
                return n < 10 ? '0' + n : n;
            },

            clock() {
                let date = new Date(),
                    hours = date.getHours(),
                    minutes = this.addPrecedingZero(date.getMinutes());

                this.MINUTES = minutes;

                if(this.clockFormat === '12hr')
                {
                    this.AM_PM  = hours >= 12 ? 'PM' : 'AM';
                    this.HOURS = hours > 12 ? hours -= 12 : hours;
                }
                else
                {
                    this.AM_PM = '';
                    this.HOURS = this.addPrecedingZero(hours);
                }

                setTimeout(this.clock, 5000);
            }
        },

        mounted() {
            this.clock();
        }
    }
</script>

<template>
    <div id="clock">
        <span>{{ HOURS }}:{{ MINUTES }}</span> <span>{{ AM_PM }}</span>
    </div>
</template>

<style lang="scss" scoped>

div#clock {
    font-family: Arial;
    font-size: 52px;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    color: white;
    text-transform: uppercase;
}

</style>