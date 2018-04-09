<template>
    <div class="page">
        <header>
            header
        </header>
        <main>
            <Lists>
                <ListItem to="/button" licon="icon-remind">Button按钮组件</ListItem>
                <ListItem to="/tab" licon="icon-integral">Tab组件</ListItem>
                <ListItem licon="icon-manage">Icon图标组件</ListItem>
                <ListItem to="/list" licon="icon-other">List列表组件</ListItem>
                <ListItem licon="icon-send">Input表单组件</ListItem>
                <ListItem to="/switch" licon="icon-send">Switch组件</ListItem>
            </Lists>

            <Lists>
                <ListItem licon="icon-like">Loading加载</ListItem>
                <ListItem licon="icon-interactive">Tost遮罩</ListItem>
                <ListItem licon="icon-label">Time时间选择</ListItem>
                <ListItem to="/calendar" licon="icon-clock">Calendar日历</ListItem>
                <ListItem to="/silder" licon="icon-interactive">Silder轮播组件</ListItem>
                <ListItem @click="alertHandle" licon="icon-systemprompt">Alert弹框</ListItem>
            </Lists>

            <Lists>
                <ListItem to="/swipeout" licon="icon-flip">滑动删除</ListItem>
                <ListItem to="/map" licon="icon-coordinates">腾讯地图</ListItem>
                <ListItem to="/form" licon="icon-message">Form组件系列</ListItem>
                <ListItem to="/search" licon="icon-search">SearchBar搜索栏</ListItem>
                <ListItem to="/searchhistory" licon="icon-search">Search搜索历史列表</ListItem>
                <ListItem to="/upload" licon="icon-picture">Upload文件上传</ListItem>
                <ListItem to="/picker" licon="icon-flip">Picker选择</ListItem>
                <ListItem to="/uprefresh" licon="icon-flip">上拉刷新</ListItem>
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
        mounted(){
            console.log( this.$Atmui.device() );
        },
        methods: {
            alertHandle(){
                let This = this;
                this.$Alert.show({
                    text : '请输入你的模态框信息',
                    onCancel: function(){
                        console.log( '关闭' );
                    },
                    onSubmit : function () {
                        console.log( '确定' );
                        
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




