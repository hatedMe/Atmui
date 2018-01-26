

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
                    1, 2, 3, 4, 5, 6, 7, 8, 9,
                    1, 2, 3, 4, 5, 6, 7, 8, 9
                ]
            }
        },
        mounted() {
            new Iscroll(this.$el)
        }
    }
</script>


<style lang="less">
    .iscroll-box {
        border: 1px solid red;
    }
</style>
