<template>
    <div class="swiper-container">
        <slot name="parallax-bg"></slot>
        <div :class="classes.wrapperClass">
            <slot></slot>
        </div>
        <slot name="pagination"></slot>
        <slot name="button-prev"></slot>
        <slot name="button-next"></slot>
        <slot name="scrollbar"></slot>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: 'swiper',
        props: {
            options: {
                type: Object
            }
        },
        data() {
            return {
                classes: {
                    wrapperClass: 'swiper-wrapper'
                }
            }
        },
        mounted () {
            //const swiperOptions = Object.assign({}, this.globalOptions, this.options)
            this.swiper = new Swiper(this.$el,this.options)
        }
    }
</script>