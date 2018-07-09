<template>
<div class="dialog" :class="value ? 'dialog-open' : 'dialog-close'" v-if="value">
    <div class="dialog-overlay"></div>
    <div class="dialog-content">
        <div class="dialog-content-hd" v-if="titleShow">
            <h3 class="dialog-content-title">{{ title }}</h3>
        </div>
        <div class="dialog-content-bd content-scroll">
            {{ text }}
        </div>
        <div class="dialog-content-ft side">
            <button v-if="showCancelButton" @click="handleAction('cancel',$event)" class="dialog-btn dialog-btn-cancel">{{ cancelText }}</button>
            <button v-if="showConfirmButton" @click="handleAction('submit',$event)" class="dialog-btn dialog-btn-confirm">{{ submitText }}</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Dialog',
    data () {
        return {
            inited : this.value
        }
    },
    props: {
        value : Boolean,
        titleShow : Boolean,
        showConfirmButton :Boolean,
        showCancelButton : Boolean,
        closeOnClickOverlay : Boolean,
        callback : Function,
        title: {
            type: String,
            default: '提示'
        },
        text :{
            type : String,
            default : ''
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        submitText: {
            type: String,
            default: '确定'
        },
        // callback: Function,
    },
    methods: {
        handleAction(action , e){
            console.log( action , e );
            this.onClose(action);
        },
        onClose (action){
            this.$emit('input', false);
            this.$emit(action);
            this.callback && this.callback(action);
        }
    },
    watch: {
        value(val) {
            this.inited = this.inited || this.value;
        },
    }
}
</script>

<style lang="less">
// @import url('./index.less');
</style>