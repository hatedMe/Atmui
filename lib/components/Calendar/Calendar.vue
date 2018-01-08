




<template>
    <div class="mask active">
        <div class="calendar">
            <div class="flex flex-between flex-middle">
                <div class="prev-month">上</div>
                <div class="calendar-title">
                    2017年12月15日
                </div>
                <div class="next-month">
                    下
                </div>
            </div>
            <div class="calendar-week">
                <span>日</span>
                <span>一</span>
                <span>二</span>
                <span>三</span>
                <span>四</span>
                <span>五</span>
                <span>六</span>
            </div>
            <div class="calendar-content">
                <div class="calendar-warp">
                    <CalendarItem :datt="datt"></CalendarItem>
                    <CalendarItem :datt="datt"></CalendarItem>
                    <CalendarItem :datt="datt"></CalendarItem>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    import Calendar from './index.js';
    import CalendarItem from './CalendarItem.vue';
    export default {
        name: 'Calendar',
        components: {
            CalendarItem,
        },
        data() {
            return {
                datt: []
            }
        },
        mounted() {
            this.calendar = new Calendar(this.$el);
            console.log(this.calendar);
            this.datt = this.calendar.initUpdateWarp();
        },
        methods: {
            // changeDay(event){
            //     let els = event.target.parentNode.children;
            //     for( let i =0; i<els.length; i++ ){
            //         if( els[i].classList.contains( 'active' ) ){
            //             els[i].classList.remove('active');
            //             break ;
            //         }
            //     }
            //     event.target.classList.add('active');
            // },
            // touchHandle(){
            //     console.log( 456 );
            // }
        }
    }
</script>
