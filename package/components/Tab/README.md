

**props：**


|属性|说明|类型|默认值|
|:----    |:---|:----- |-----   |
|tabTitle |tab标题  |Array |-   |


```javascript

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
```


**事件：**

|事件名|说明|返回值|
|:----    |:---|:----- |
|handleClick |tab切换的时候触发  | event对象 、index索引   |



