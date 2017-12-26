


<template>
<div class="bartabcontent">
    
    <div class="bartab-1">
        <p>常规</p>
        <BarTab>
            <BarTabItem licon="icon-camera" size="28">相机</BarTabItem>
            <BarTabItem licon="icon-addition" size="28">添加</BarTabItem>
            <BarTabItem licon="icon-interactive" size="28">会话</BarTabItem>
            <BarTabItem licon="icon-setup" size="28">设置</BarTabItem>
        </BarTab>
    </div>
    
    <div class="bartab-2">
        <p>不要图标</p>
        <BarTab>
        <BarTabItem>相机</BarTabItem>
        <BarTabItem>添加</BarTabItem>
        <BarTabItem>会话</BarTabItem>
        <BarTabItem>设置</BarTabItem>
    </BarTab>
    </div>

    
    


</div>
    
</template>



<script>
    export default {
    }
</script>


<style lang="less">
    .bartab-1 ,.bartab-2 {
        position: relative;
        margin-top: 60px;
        height: 80px;
        width: 100%;
    }
</style>
