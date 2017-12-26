<template>
    <div>
        <Tab :tabTitle="tabTitle" @handleClick="handleClick">
            <TabItem>全部</TabItem>
            <TabItem>待付款</TabItem>
            <TabItem>已经发货</TabItem>
        </Tab>
    </div>
</template>




<script>
    export default {
        naem: 'Tab',
        data(){
            return {
                tabTitle : ['全部','待付款','已发货']
            }
        },
        methods:{
            handleClick( event,index ){
                console.log(index,event);
            }
        }
    }
</script>


