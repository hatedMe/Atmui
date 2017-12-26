<template>
    <i :class="'icon '+ 'size'+size + ' ' + type "></i>
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
        }
    }
</script>


 