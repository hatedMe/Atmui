<template>
    <div class="page">
        <header>
            header
        </header>
        <main>
            <!-- <ul>
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
                </ul> -->
            <Lists>
                <ListItem to="/button" licon="icon-remind">Button按钮组件</ListItem>
                <ListItem to="/tab" licon="icon-integral">Tab组件</ListItem>
                <ListItem licon="icon-manage">Icon图标组件</ListItem>
                <ListItem to="/list" licon="icon-other">List列表组件</ListItem>
                <ListItem licon="icon-send">Input表单组件</ListItem>
            </Lists>

            <Lists>
                <ListItem licon="icon-like">Loading加载</ListItem>
                <ListItem licon="icon-interactive">Tost遮罩</ListItem>
                <ListItem licon="icon-like">时间选择</ListItem>
                <ListItem licon="icon-interactive">Alert弹框</ListItem>
            </Lists>
        </main>
        <footer>
            <BarTab>
                <BarTabItem licon="icon-remind" size="28">基础</BarTabItem>
                <BarTabItem licon="icon-integral" size="28">组件</BarTabItem>
                <BarTabItem licon="icon-document" size="28">示例</BarTabItem>
                <BarTabItem licon="icon-accessory" size="28">关于</BarTabItem>
            </BarTab>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        methods: {
            // clickHandle() {
            //     this.$Alert.show({
            //         onSubmit: function() {
            //             console.log(123);
            //         },
            //         onCancel: function() {
            //             console.log(456);
            //         }
            //     })
            // }
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
        bottom:52px;
        width: 100vw;
        top: 40px;
        background-color: #f3f3f3;
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




