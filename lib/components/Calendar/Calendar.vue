




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
            <div class="calendar-day flex" @click="changeDay" v-focusss="touchHandle">
                <span class="no-date" v-for="item in datt" v-if="item.wk == undefined && item.today == undefined">{{ item.day }}</span>
                <span class="active_wk" v-else-if="(item.wk != undefined) && (item.wk == 0 || item.wk == 6)">{{ item.day }}</span>
                <span class="today active" v-else-if="item.today != undefined">{{ item.day }}</span>
                <span v-else>{{ item.day }}</span>
            </div>
        </div>
    </div>
</template>



<script>
    import datt from './Calendar.js';
    import TouchEvent from '../../util/TouchEvent.js';
    export default {
        name: 'Calendar',
        data () {
            return {
                datt:datt()
            }
        },
        mounted () {
            //this.datt = datt();
        },
        methods: {
            changeDay(event){
                // TouchEvent(document , 'tap' , function(){
                //     console.log( 789  );
                // });
                let els = event.target.parentNode.children;

                for( let i =0; i<els.length; i++ ){
                    if( els[i].classList.contains( 'active' ) ){
                        els[i].classList.remove('active');
                        break ;
                    }
                }
                
                event.target.classList.add('active');
            },
            touchHandle(){
                console.log( 456 );
            }
        }
    }
</script>
