<template>
    <div class="page">
        <header>
            header
        </header>
        <main>
            <ul>
                <li>
                    <router-link to="/">按钮</router-link>
                </li>
                <li>
                    <router-link to="/button">图标</router-link>
                </li>
                <li>
                    <router-link to="/battab">battab</router-link>
                </li>
                <li>
                    <router-link to="/tab">tab</router-link>
                </li>
                <li>
                    <router-link to="/loading">loading</router-link>
                </li>
                <li>
                    <router-link to="/list">list</router-link>
                </li>
                <li>
                    <router-link to="/utils">utils</router-link>
                </li>
            </ul>
        </main>
        <footer>
            <ul>
                <li>
                    <router-link to="/">基础</router-link>
                </li>
                <li>
                    <router-link to="/">组件</router-link>
                </li>
                <li>
                    <router-link to="/">示例</router-link>
                </li>
                <li @click="clickHandle">
                    <router-link to="/">关于</router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        methods: {
            clickHandle() {
                this.$Alert.show({
                    onSubmit: function() {
                        console.log(123);
                    },
                    onCancel: function() {
                        console.log(456);
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    body,
    html {
        height: 100%;
    }
    #app {
        height: 100%;
        width: 100%;
        position: absolute;
    }
    .page {
        position: absolute;
        width: 100vw;
        height: 100%;
        left: 0;
        bottom: 0;
    }
    header {
        padding: 12px 0;
        text-align: center;
        border-bottom: 1px solid #e3e3ee;
        box-sizing: border-box;
    }
    main {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        position: absolute;
        bottom: 40px;
        width: 100vw;
        top: 40px;
        ul {
            height: 2000px;
        }
        li {
            padding: 12px 8px;
        }
        a {
            color: #333;
        }
    }
    footer {
        position: absolute;
        width: 100vw;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e3e3ee;
        box-sizing: border-box;
        ul {
            display: flex;
            li {
                justify-content: space-between;
                width: 25vw;
                text-align: center;
                padding: 12px 0;
            }
        }
    }
</style>




