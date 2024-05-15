<template>
    <div>
        <Header />
        <Nav />
        <Content />
        <!-- <router-view /> -->
        <Preview />
    </div>
</template>
<script lang="ts" setup>
import Nav from "./components/nav.vue";
import Content from "./components/content.vue";
import Preview from "./components/preview.vue";
import Header from "./components/header.vue";
</script>

<style lang="scss">
@import "./style/app.scss";
* {
    margin: 0;
    padding: 0;
}
*,
:before,
:after {
    box-sizing: border-box;
}

html {
    line-height: 1.4;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    line-height: 1.6;
}
body {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(60, 60, 67);
    font-synthesis: style;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-color: white;
}
</style>
