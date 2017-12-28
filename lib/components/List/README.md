

**props：**


|属性|说明|类型|默认值|
|:----    |:---|:----- |-----   |
|licon |图标  |String |-   |
|subtitle |后面的小说明  |String | -    |
|to |跳转，引用```router-link```，最终渲染成 ```a```标签  |String |-   |

```javascript
    import { Lists , ListItem } from 'Atmui';
	<div>
    <h3>基础</h3>
    <Lists>
        <ListItem>消费记录</ListItem>
        <ListItem>提现</ListItem>
    </Lists>

    <h3>前面带图标</h3>
    <Lists>
        <ListItem licon="icon-like">消费记录</ListItem>
        <ListItem licon="icon-interactive">提现</ListItem>
    </Lists>

    <h3>后面带小说明</h3>
    <Lists>
        <ListItem licon="icon-like" subtitle="200">消费记录</ListItem>
        <ListItem licon="icon-interactive" subtitle="146">提现</ListItem>
    </Lists>

    <h3>可以跳转</h3>
    <Lists>
        <ListItem to="/" licon="icon-like" subtitle="200">消费记录</ListItem>
        <ListItem to="/list" licon="icon-interactive" subtitle="146">提现</ListItem>
    </Lists>
</div>
```





