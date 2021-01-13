

<template>
    <div class="switch" :class=" reverse ? 'reverse' : ''" :data-on="on" :data-off="off" @click="changeHandle($event)">
        <div class="switch-handle"></div>
        <input type="hidden" :name="name" :value="currentValue">
    </div>
</template>



<script>
    export default {
        name: 'Switchs',
        data() {
            return {
                currentValue: this.value
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
                type: [String, Boolean ,Number],
                default: 'false'
            },
            name: {
                type: String,
                default: ''
            },
            reverse:{
                type: Boolean,
                default: false
            }
        },
        mounted () {
            let elClassList = this.$el.classList
            this.currentValue ? 
            elClassList.add( 'active' ) :
            elClassList.remove( 'active' );
        },
        methods: {
            changeHandle(event) {
                this.$el.classList.toggle('active');
                this.currentValue = !this.currentValue;
                this.$emit('input', this.currentValue);
                this.$emit('changeHandle', event, this.$el);
            },
        },
        watch: {
            value(val) {
                this.currentValue = val;
            }
        }
    }
</script>



<style lang="less">

</style>




