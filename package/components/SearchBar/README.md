











**props：**

|属性|说明|类型|默认值|
|:----    |:---|:----- |-----   |
|placeholder |placeholder同原生input属性  |String |请输入搜索内容   |
|sure |按钮文字  |String | 确定    |
|name |同表单的name属性  |String |-   |
|value | 同表单的value属性，可以使用v-model绑定 |  String  |-  |
|focus | 是否自动聚焦 | Boolean | false  |


**事件：**

|事件属性|类型|说明|返回值|默认值|
|:---- |:----    |:---           |:----- |:---   |
|focusHandle  |   |  聚焦的时候触发 |    event  | - |
|blurHandle  |   |失去焦点的时候触发  |    event | - |
|inputHandle  |   |表单改变的时候触发  |    event | - |
|clearClickHandle  |   |清楚搜索文字的时候触发  |    event | - |
|sureClikHandle  |   |点击按钮的时候触发  |    event | - |
|changeHandle  |   |表单改变的时候触发   |    event | - |
|keyup  |   |同input原生事件keyup  |    event | - |
|keydown  |   |同input原生事件keydown  |    event | - |





**示例：**

```javascript

import { SearchBar } from 'atmui';

<SearchBar></SearchBar>

    
```

