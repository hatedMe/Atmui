











**props：**

|属性|说明|类型|默认值|
|:----    |:---|:----- |-----   |
|title |搜索历史单条文字  |String |-   |


**事件：**

|事件属性|类型|说明|返回值|默认值|
|:---- |:----    |:---           |:----- |:---   |
|clickHandle  |   |  点击图标的时候触发 |    event  | - |





**示例：**

```javascript

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
            this.list.splice(index,1);
        }
    }
}
</script>

    
```

