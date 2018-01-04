

<template>
    
    <Switchs v-model="isTrue" :reverse="reverse"></Switchs>

</template>



<script>
    export default {
        name: 'switchs',
        data(){
            return {
                isTrue : 0,
                reverse : true
            }
        }
    }
</script>



<style lang="less">

</style>




