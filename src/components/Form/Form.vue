

<template>
<div>
    <!-- <InputBox>
        <inputItem title="名字" placeholder="请输出名字"></inputItem>
        <inputItem title="年龄" placeholder="请输出年龄"></inputItem>
        <inputItem title="邮箱" placeholder="请输出邮箱"></inputItem>
        <inputItem title="所在地" placeholder="填写所在地"></inputItem>
        <inputItem title="学校" placeholder="发现校友"></inputItem>
    </InputBox>
    <p class="spacemargin-xl wingmargin-xl">
        <Button long type="success">提交</Button>
    </p> -->

    <!-- <Dialog /> -->

    <Button @click="clickHandle">点击</Button>
    <Button @click="clickHandle2">点击</Button>
</div>
</template>




<script>
// import Dialog from '../../../lib/components/Dialog/index.vue';
import Dialog from '../../../lib/components/Dialog/index.js';
import Vue from 'vue';
export default {
    components: {
        // Dialog,
    },
    methods: {
        clickHandle(){
            // console.log( Dialog );

            console.log( Object.assign( { a :3} , { a : 5 } ) );
            
            Dialog.alert({
                title : '我是提示',
                text : '目前只支持重庆移动的号码进行充值哦~！',
                submitText : '缺点'
            });
        },
        clickHandle2(){
            Dialog.confirm({
                title : '提示',
                text : '目前只支持重庆移动的号码！',
                submitText : 'quedn'
            });
        }
    }
}
</script>


