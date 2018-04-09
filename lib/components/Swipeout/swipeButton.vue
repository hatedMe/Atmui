





<template>
<button class="swipeout-button" :class="{ 'swipeout-button-primary': type === 'primary' ,  'swipeout-button-warn': type === 'warn', 'swipeout-button-default': type === 'default' }" type="button">
    <slot>{{text}}</slot>
  </button>
</template>


<script>
export default {
    name: 'SwipeButton',
    props: {
        text: {
            type: String,
            default: '按钮'
        },
        type: {
            type:String,
            default : 'primary'
        },
    }
}
</script>


