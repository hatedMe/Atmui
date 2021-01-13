




<template>
    <div class="picker active">
        <div class="picker-header">
            <a class="picker-cancel">取消</a>
            <a class="picker-done">完成</a>
        </div>
        <div class="picker-wrapper">
            <div class="picker-layer">
                <div class="picker-layer-frame">
                </div>
            </div>
            <div class="picker-slotbox text-center">
                <!-- <ul class="picker-slot text-center">
                    <li>2008</li>
                    <li>2008</li>
                    <li>2008</li>
                    <li>2008</li>
                </ul>
                <ul class="picker-slot text-center">
                    <li>2008</li>
                    <li>2008</li>
                    <li>2008</li>
                    <li>2008</li>
                </ul>
                <ul class="picker-slot text-center">
                    <li>2008</li>
                    <li>2008</li>
                    <li>2008</li>
                    <li>2008</li>
                </ul> -->
            </div>
        </div>
    </div>
</template>



<script>
    
    import PickerSlot from './PickerSlot.vue';

    import PickerCity from './class.picker.city.js';
    import cityDate from './data.picker.city.js';

    export default {
        name: 'PickerCity',
        components: {
            PickerSlot
        },
        mounted () {
            this.picker = new PickerCity( this.$el , {
                data : cityDate
            });
        },
        methods: {
            
        }
    }
</script>


<style lang="less">

</style>




