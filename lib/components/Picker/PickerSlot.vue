

<template>
    <ul class="picker-slot text-center">
        <li v-for="(item,index) in values" :key="index">{{ item }}</li>
    </ul>
</template>


<script>
export default {
    name:'PickerSlot',
    props:{
        values : {
            type:Array
        }
    }
}
</script>
