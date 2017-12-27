


<template>
    <div class="loading-warp">
        <Button type="success" @click="clickHandle" long>Loading</Button>
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
                },4000)
            }
        }
    }
</script>


<style lang="less">
    .loading-warp {
        padding: 12px;
    }
</style>
