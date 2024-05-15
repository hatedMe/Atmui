<template>
    <div class="aside">
        <div class="curtain"></div>
        <div class="nav">
            <div class="group">
                <section>
                    <div class="title">指引</div>
                    <div class="lists">
                        <div class="item">
                            <!-- <router-link to="/guide/install">安装</router-link> -->
                            <p class="active">安装</p>
                        </div>
                        <div class="item">
                            <!-- <router-link to="/guide/install">安装</router-link> -->
                            <p>安装</p>
                        </div>
                        <div class="item">
                            <!-- <router-link to="/guide/install">安装</router-link> -->
                            <p>安装</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
</script>
<style lang="scss">
.aside {
    padding-top: 64px;
    width: 272px;
    max-width: 100%;
    background-color: #f6f6f7;
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    transform: translate(0);
    padding: 32px 32px 96px;
    visibility: visible;
    box-shadow: none;
    transform: translate(0);

    position: fixed;
    top: var(--header-height);
    bottom: 0;
    left: 0;
    z-index: 25;

    transition:
        opacity 0.5s,
        transform 0.25s ease;
    overscroll-behavior: contain;
    overflow-x: hidden;
    overflow-y: auto;

    cursor: pointer;
    border-right: 1px solid #e2e2e3;
}

// .curtain {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 1;
// }
.nav {
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 200px;
    // height: 100%;
    // background: #fff;
    // z-index: 2;
}
.title {
    font-weight: 700;
    color: rgba(60, 60, 67);
    flex-grow: 1;
    padding: 4px 0;
    line-height: 24px;
    font-size: 14px;
    transition: color 0.25s;
}

.lists p {
    font-weight: 500;
    color: rgba(60, 60, 67);
    flex-grow: 1;
    padding: 4px 0;
    line-height: 24px;
    font-size: 14px;
    transition: color 0.25s;
    &.active,
    &:hover {
        color: #0070f3;
    }
}

.group {
    border-top: 1px solid #e2e2e3;
    padding-top: 10px;
    width: calc(272px - 64px);
}
</style>
