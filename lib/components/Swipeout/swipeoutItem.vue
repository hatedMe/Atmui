






<template>
<div class="swipeout-item">
    <div class="swipeout-button-box swipeout-button-box-left">
        <slot name="left-menu"></slot>
    </div>
    <div class="swipeout-button-box">
        <slot name="right-menu"></slot>
    </div>
    <div class="swipeout-content">
        <slot name="content"></slot>
    </div>
</div>
</template>

<script>
import Swipeout from './index.js';
export default {
    name: 'SwipeoutItem',
    mounted () {
        let swipeout = new Swipeout(this);
    }
}
</script>

