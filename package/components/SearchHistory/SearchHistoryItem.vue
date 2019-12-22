

<template>
    <li class="search-history-item spacepadding-xl wingpadding-xl">
        <p>{{ title }}</p>
        <Icon @click="clickHandle" type="icon-empty" size="24" />
    </li>
</template>



<script>
    export default {
        name: 'SearchHistoryItem',
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        methods: {
            clickHandle(e){
                this.$emit( 'clickHandle',e)
            }
        }
    }
</script>