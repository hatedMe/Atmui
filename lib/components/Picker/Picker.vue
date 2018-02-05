




<template>
    <div class="picker">
        <div class="picker-header">
            <a class="picker-cancel">{{ headerCancelText }}</a>
            <a class="picker-done">{{ headerDoneText }}</a>
        </div>
        <div class="picker-wrapper">
            <div class="picker-layer">
                <div class="picker-layer-frame">
                </div>
            </div>
            <div class="picker-slotbox text-center">
            </div>
        </div>
    </div>
</template>



<script>
    // import PickerDate from './class.picker.date.js';
    export default {
        name: 'Picker',
        props: {
            headerCancelText: {
                type: String,
                default: '取消'
            },
            headerDoneText: {
                type: String,
                default: '确定'
            }
        },
        mounted() {
            // this.picker = new PickerDate(this.$el);
        }
    }
</script>


<style lang="less">

</style>




