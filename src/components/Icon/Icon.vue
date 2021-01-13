<template>
    <i @click="clickHandle" :class="'icon '+ 'size'+size + ' ' + type "></i>
</template>



<script>
    export default {
        name: 'Icon',
        props: {
            type: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: '16'
            }
        },
        methods: {
            clickHandle(e){
                this.$emit('click',e)
            }
        }
    }
</script>


 