

<template>
    <div class="iscroll-box">
        <Lists>
            <ListItem v-for="(item,index) in list" :key="index">{{ item }}</ListItem>
        </Lists>
    </div>
</template>


<script>
    import Iscroll from './Iscroll.js';
    export default {
        name: 'Uprefresh',
        data() {
            return {
                list: [
                    
                ]
            }
        },
        mounted() {
            for( let i = 0; i< 206 ;i++ ){
                this.list.push(i);
            }
            new Iscroll(this.$el)
        }
    }
</script>


<style lang="less">
    .iscroll-box {
        border: 1px solid red;
    }
</style>
