<template>
    <button :class=" 'button ' + type " @click="handleClick">
        <!-- <Icon v-if="licon" :class="licon"/> -->
        <!-- <span v-if="isShowSpan">{{text}}</span> -->
        <span><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props:{
            type:{
                type: String,
                default:'button'
            },
            size:{
                type:String,
                default:''
            },
            text:{
                type:String,
                default:'asas'
            }
        },
        methods:{
            handleClick (event){
                this.$emit('click', event);
            }
        }
    }
</script>


<style lang="less">
    
    @import '../atomui.less';

</style>


