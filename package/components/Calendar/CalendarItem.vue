

<template>
    <div class="calendar-day flex">
        <!-- <span v-for="(item,index) in datt" :key="index">{{ item.day }}</span> -->
        <span class="no-date" v-for="(item,index) in datt" :key="index" v-if="item.wk == undefined && item.today == undefined">{{ item.day }}</span>
        <span class="active_wk" v-else-if="(item.wk != undefined) && (item.wk == 0 || item.wk == 6)">{{ item.day }}</span>
        <span class="today active" v-else-if="item.today != undefined">{{ item.day }}</span>
        <span v-else>{{ item.day }}</span>
    </div>
</template>


<script>
    export default {
        name : 'CalendarItem',
        props:{
            datt:{
                type:Array
            }
        }
    }
</script>

