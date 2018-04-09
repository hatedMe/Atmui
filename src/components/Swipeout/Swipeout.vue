

<template>
<div>
    <Swipeout>
        <SwipeoutItem class="boder">
            <div slot="content" class="demo-content">
                JavaScript 是最好的语言
            </div>
            <SwipeoutButton slot="right-menu"></SwipeoutButton>
            <SwipeoutButton type="warn" slot="right-menu"></SwipeoutButton>
            <SwipeoutButton type="default" slot="right-menu"></SwipeoutButton>
        </SwipeoutItem>
    </Swipeout>
</div>
</template>



<script>
export default {
    name: 'swipeout'
}
</script>

<style>
.vux-1px-t {
    position: relative;
}

.demo-content {
    padding: 10px;
}

.boder {
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
}
</style>


