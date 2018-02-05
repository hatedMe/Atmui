

<template>
    <div>
        <p>基础演示</p>
        <Switchs></Switchs>
        <p>默认关闭</p>
        <Switchs v-model="isTrue"></Switchs>
        <p>反转背景</p>
        <Switchs :reverse="reverse"></Switchs>

        <p>打开or关闭有字</p>
        <Switchs on="开" off="关"></Switchs>
        <Switchs on="开" off="关" :reverse="reverse"></Switchs>
    </div>

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




