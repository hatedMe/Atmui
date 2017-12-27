


<template>
<div>
    <h3>基础</h3>
    <Lists>
        <ListItem>消费记录</ListItem>
        <ListItem>提现</ListItem>
    </Lists>

    <h3>前面带图标</h3>
    <Lists>
        <ListItem licon="icon-like">消费记录</ListItem>
        <ListItem licon="icon-interactive">提现</ListItem>
    </Lists>

    <h3>后面带小说明</h3>
    <Lists>
        <ListItem licon="icon-like" subtitle="200">消费记录</ListItem>
        <ListItem licon="icon-interactive" subtitle="146">提现</ListItem>
    </Lists>
</div>
    
</template>




<script>
    export default {
        name: 'List'
    }
</script>
