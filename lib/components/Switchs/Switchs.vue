

<template>
    <div class="switch" :data-on="on" :data-off="off" @click="changeHandle($event)">
        <div class="switch-handle"></div>
        <input type="text" name="" :value="currentValue">
    </div>
</template>



<script>
    export default {
        name: 'Switchs',
        data(){
            return {
                currentValue : this.value
            }
        },
        props: {
            on: {
                type: String,
                default: ''
            },
            off: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: 'false'
            }
        },
        methods: {
            changeHandle(event) {
                this.$el.classList.toggle('active');
                // this.value = !this.value;
                // const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;
                console.log( this.currentValue );
                this.$emit('input', this.currentValue );
                this.$emit('changeHandle', event, this.$el);
            },
        },
        watch:{
            value(val){
                this.currentValue = val;
            }
        }
    }
</script>



<style lang="less">

</style>




