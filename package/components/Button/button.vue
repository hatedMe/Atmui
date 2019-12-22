<template>
    <a :class=" 'button ' + type + ( long ? ' block' : '') + ( outline ? ' outline' : '' ) " @click="handleClick" >
        <Icon v-if="licon" :class="licon" />
        <!-- <span v-if="isShowSpan">{{text}}</span> -->
        <span><slot></slot></span>
    </a>
</template>

<script>
    export default {
        name: 'Button',
        props:{
            type:{
                type: String,
                default:''
            },
            size:{
                type:String,
                default:''
            },
            long:{
                type:Boolean,
                default:false
            },
            licon:{
                type:String,
                default:''
            },
            outline:{
                type:Boolean,
                default:false
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
    

</style>


