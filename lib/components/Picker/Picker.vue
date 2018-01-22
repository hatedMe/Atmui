




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
    
    import PickerCity from './Picker.city.js';
    import cityDate from './picker.city.data.js';
    // key ==> beijing // children ==> key ==> dongcheng //  children ==> key == 和平区

    export default {
        name: 'Picker',
        mounted () {
            this.picker = new PickerCity( this.$el , {
                data : cityDate
            } );
            // this.picker.addSolt(  cityDate,undefined )
        }
    }
</script>


<style lang="less">

</style>




