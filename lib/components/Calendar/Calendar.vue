




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
            <div class="calendar-day flex">
                <!-- <span>26</span>
                <span>27</span>
                <span>28</span>
                <span class="active">29</span>
                <span>30</span>
                <span>31</span>
                <span>1</span>
                <span>2</span>
                <span>3</span> -->
                <span v-for="item in datt" v-if="item.wk == 0 || item.wk == 6"></span>
                <span v-for="item in datt" v-else="item.wk == 0 || item.wk == 6">{{ item.day }}</span>
            </div>

            <button @click="clickHandle">anniudianji</button>
        </div>
    </div>
</template>



<script>
    import datt from './Calendar.js';
    export default {
        name: 'Calendar',
        data () {
            return {
                datt:[]
            }
        },
        methods: {
            clickHandle(){
                this.datt = datt()
                //console.log( datt() );
            }
        }
    }
</script>
