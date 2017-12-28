

<template>
    <div class="utils-content">
        <router-view>
            <Lists>
                <ListItem to="/loading" licon="icon-like">本地存储系列</ListItem>
                <ListItem licon="icon-like">本地存储系列</ListItem>
            </Lists>
        </router-view>
    </div>
</template>




<script>
    export default {
        name: 'Utils'
    }
</script>







