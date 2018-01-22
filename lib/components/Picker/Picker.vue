




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
    import Picker from './Picker.js';
    import cityDate from './picker.city.data.js';

    var date = [ { key:2008 ,value :2008 } , { key:2009 ,value :2009 } , { key:2010 ,value :2010 } ];

    // key ==> beijing // children ==> key ==> dongcheng //  children ==> key == 和平区

    export default {
        name: 'Picker',
        mounted () {
            console.log( cityDate );
            this.picker = new Picker(this.$el);

            this.picker.addSolt(  cityDate,undefined )
        }
    }
</script>


<style lang="less">

</style>




