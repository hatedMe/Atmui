


<template>
    <div class="slider-container">
        <div class="slider-wrapper">
            <slot></slot>
        </div>
        <div class="slide-pagination">
            
        </div>
    </div>
</template>




<script>
    import Slider from './index.js';
    export default {
        name: 'Silder',
        props:{
            options: {
                type: Object
            }
        },
        mounted () {
            
            this.slider = new Slider(this.$el);

            console.log( this.slider );
        }
    }
</script>






