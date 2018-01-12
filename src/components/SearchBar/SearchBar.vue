


<template>
    <div class="spacepadding-xl">
        <div class="spacepadding-xl">
            <h4>基础演示</h4>
            <SearchBar></SearchBar>
        </div>
        <div class="spacepadding-xl">
            <h4>自动聚焦</h4>
            <SearchBar :focus="focus"></SearchBar>
        </div>
        <div class="spacepadding-xl">
            <h4>使用v-model绑定</h4>
            <SearchBar v-model="val"></SearchBar>
        </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                val: '搜索你喜欢的商品',
                focus: true
            }
        },
        methods: {
            // clickHandle(e){
            //     console.log( this.val );
            // }
        }
    }
</script>



