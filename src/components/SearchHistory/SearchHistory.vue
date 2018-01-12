

<template>
  <SearchHistory>
      <SearchHistoryItem v-for="(item,index) in list" :key="index" @clickHandle="clickHandle($event,index)" :title="item"></SearchHistoryItem>
  </SearchHistory>
</template>





<script>
export default {
    data () {
        return {
            list : [
                '历史结果1',
                '历史结果2',
                '历史结果3',
                '历史结果4',
                '历史结果5',
                '历史结果6',
                '历史结果7',
                '历史结果8',
            ]
        }
    },
    methods: {
        clickHandle(e,index){
            console.log( index );
            this.list.splice(index,1);
        }
    }
}
</script>



