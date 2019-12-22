











**props：**

|属性|说明|类型|默认值|
|:----    |:---|:----- |-----   |
|on |打开的时候显示文字  |String |-   |
|off |关闭的时候显示文字  |String | -    |
|name |同表单的name属性  |String |-   |
|value | 同表单的value属性，可以控制switch初始为开还是关,可以使用v-model绑定  | [ String Number Boolean] 可以使用 (true false) , (0 1) | false  |
|reverse | 是否反转色 | Boolean 可以使用 true false | false  |


**事件：**

|事件属性|类型|说明|返回值|默认值|
|:---- |:----    |:---           |:----- |:---   |
|changeHandle  |   |swtich切换的时候触发  |    event, el(切换时候的元素)  | - |


**示例：**

```javascript

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





    
```

