<template>
    <div :class="slideClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'swiper-slide',
        data() {
            return {
                slideClass: 'swiper-slide'
            }
        }
    }
</script>