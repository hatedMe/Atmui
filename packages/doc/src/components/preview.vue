<template>
    <div class="preview">aside</div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
</script>
<style lang="scss">
.preview {
    width: 360px;
    height: 640px;
    max-width: 100%;
    background-color: #999;
    overflow: hidden;
    border-radius: 20px;
    visibility: visible;
    transform: translate(0);
    position: fixed;
    top: calc(var(--header-height) + 20px);
    right: 30px;
}
</style>
