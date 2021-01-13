













**配置参数：**

|属性|说明|默认值|
|:---- |:----    |:---           |
|el |    当前轮播组件的父级  |  |
|autoplay |    自动轮播, flase为不自动轮播  | 2500 |
|threshold |    滑动多少距离切换到下一张  | 50 |
|duration |    动画时间  | 300 |
|loop |    是否循环轮播（建议默认，实现无缝轮播）  | true |
|onSlideChange |  拖动轮播图的事件处理函数，this指向为当前new实例  |  |
|onSlideChangeEnd |    拖动轮播图的结束之后事件处理函数，this指向为当前new实例 |  |



**示例：**

```javascript

<template>
    <Silder>
        <SilderItem v-for="(item,index) in list" :key="index">
            <img class="slide-banner" :src="item" alt="">
        </SilderItem>
    </Silder>
</template>

<script>
    import { Silder , SilderItem } from 'atmui';
    export default {
        components:{
            Silder,
            SilderItem
        },
        data() {
            return {
                list: [
                    '../../../static/img/1.jpg',
                    '../../../static/img/2.jpg',
                    '../../../static/img/3.jpg'
                ]
            }
        },
        mounted() {
            this.swiper = new this.$Swiper(this.$el,{
                onSlideChange:this.onSlideChange,
                onSlideChangeEnd:this.onSlideChangeEnd
            });
        },
        methods:{
            onSlideChange(e){
                console.log( '拖动的时候触发' , e );
            },
            onSlideChangeEnd(e){
                console.log( '拖动结束的时候触发' , e );
            }
        }
    }
</script>

    
```

