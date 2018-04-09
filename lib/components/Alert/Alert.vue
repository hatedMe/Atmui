


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
                default:'我是带有提示框的模态框。'
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
                this.$emit('onSubmitHandle')
            },
            onCancelHandle(){
                this.mask = false;
                this.active = false;
                this.$emit('onCancelHandle')
            }
        }
    }
</script>


<style lang="less">

</style>

