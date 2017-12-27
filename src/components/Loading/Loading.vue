


<template>
    <div class="loading-warp">
        <Button type="success" @click="clickHandle">基础</Button>
        <Button type="success" @click="clickHandle2">改变文字</Button>
    </div>
</template>




<script>
    export default {
        name: 'Loading',
        methods: {
            clickHandle(){
                console.log( 123 );
                this.$Loading.show();
                setTimeout( () =>{
                    this.$Loading.hide()
                },1000)
            },

            clickHandle2(){
                this.$Loading.show({
                    text:"数据处理中"
                });
                setTimeout( () =>{
                    this.$Loading.hide()
                },1000)
            }
        }
    }
</script>


<style lang="less">
    .loading-warp {
        padding: 12px;
    }
</style>
