










**props：**

|属性|说明|类型|默认值|
|:----    |:---|:----- |-----   |
|headerCancelText |选择器左边的按钮文字  |String |-   |
|headerDoneText   |选择器右边的按钮文字  |String | -    |



**配置参数：** 
```javascript

new this.$Picker(viewType ,[option])

```

```javascript
 viewType参数 
```
|属性|说明|类型|默认值|
|:----    |:---|:----- |-----   |
|viewType |只接受两个值，'City'地区选择，'Date'时间选择  |String |-   |


```javascript 
[option] 时间选择参数 

```

|属性|说明|类型|默认值|
|:----    |:---|:----- |-----   |
|viewType | 接受一个数组 例如 ['years','months','days','hours','minutes','seconds']  | Array | ['years','months','days']   |
|yyUnit | 时间年份单位描述 |String | 年  |
|MMUnit | 时间月份单位描述 |String | 月  |
|ddUnit | 时间天数单位描述 |String | 日  |
|hhUnit | 时间小时单位描述 |String | 时  |
|mmUnit | 时间分钟单位描述 |String | 分  |
|ssUnit | 时间秒数单位描述 |String | 秒  |
|minYear | 最小年 |Number | 1950  |
|maxYear | 最大年 |Number | 2050  |
|defaultYear | 默认选择的年份 | Number | 当前年份  |
|defaultMonth | 默认选择的月份 | Number | 当前月份  |
|defaultDay | 默认选择的天数 | Number | 当前几号  |
|defaultHour | 默认选择的小时 | Number | 当前小时  |
|defaultMinute | 默认选择的分钟 | Number | 当前分钟  |
|defaultSecond | 默认选择的秒数 | Number | 当前秒数  |
|onDateClickDone | 点击右侧确定按钮触发 | Function | e为Picker构造函数实例 |
|onDateScrollEnd | 拖动每列触发 | Function | e为Picker构造函数实例  |


**示例：**

```javascript
<template>
    <div class="">
        <Button @click="showHandle" long type="wait">显示</Button>
        <Button @click="hidekHandle" long type="wait">隐藏</Button>
    </div>
</template>



<script>
    export default {
        mounted () {
            this.picker = new this.$Picker('Date',{
                onDateClickDone : this.onDateClickDone,
            });
        },
        methods: {
            showHandle(e){
                console.log( e );
                this.picker.show();
            },
            hidekHandle(e){
                this.picker.hide();
            },
            onDateClickDone(e){
                console.log( '日期时间' ,e.activeText);
            }
        }
    }
</script>
```



```javascript [option] 地区选择参数 ```

|属性|说明|类型|默认值|
|:----    |:---|:----- |-----   |
|viewType | 接受字符串 'area', 'city'  | String | area |
|defaultProvinceKey | 默认选择的省key值 | String | -  |
|defaultCityKey | 默认选择的市key值 | String | -  |
|defaultAreaKey | 默认选择的区key值 | String | -  |
|onCityClickDone | 点击右侧确定按钮触发 | Function | e为Picker构造函数实例 |
|onCityScrollEnd | 拖动每列触发 | Function | e为Picker构造函数实例  |


**示例：**

```javascript
<template>
    <div class="">
        <Button @click="showHandle" long type="wait">显示</Button>
        <Button @click="hidekHandle" long type="wait">隐藏</Button>
    </div>
</template>



<script>
    export default {
        mounted () {
            this.picker = new this.$Picker('Date',{
                onDateClickDone : this.onDateClickDone,
            });
        },
        methods: {
            showHandle(e){
                console.log( e );
                this.picker.show();
            },
            hidekHandle(e){
                this.picker.hide();
            },
            onDateClickDone(e){
                console.log( '地区选择' ,e.activeText);
            }
        }
    }
</script>
```
