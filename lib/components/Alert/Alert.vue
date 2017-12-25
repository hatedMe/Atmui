


<template>
    <div @click.native="clickHandler" class="alert-mask" :class="mask">
        <div class="alert" :class="active">
            <h1>提示</h1>
            <div class="alert-content">
                {{ text }}
            </div>
            <div class="alert-handler">
                <a @click="onCancelHandle">{{ cancelText }}</a>
                <a @click="onSubmitHandle">{{ submitText }}</a>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'Alert',
        data() {
            return {
                mask:'mask',
                active:'active'
            }
        },
        props:{
            text:{
                type:String,
                default:'最简单的方法就是先备份编辑前的文档？'
            },
            cancelText : {
                type:String,
                default:'取消'
            },
            submitText:{
                type:String,
                default:'确定'
            }
        },
        methods: {
            onSubmitHandle(){
                console.log('事件触发了。');
                this.$emit('onSubmitHandle')
            },
            onCancelHandle(){
                this.mask = false;
                this.active = false;
                //console.log( this.$el );
                this.$emit('onCancelHandle')
                console.log( this );
                //document.body.removeChild(this.$el);
                
            }
        }
    }
</script>


<style lang="less">

</style>

