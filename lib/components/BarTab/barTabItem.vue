

<template>
    <a class="bar-tab-item">
        <Icon v-if="licon" :type="licon" :size="size" />
        <span class="tab-label"><slot>{{ text }}</slot></span>
    </a>
</template>



<script>
    export default {
        name: 'BarTabItem',
        props:{
            licon:{
                type:String,
                default:''
            },
            size:{
                type:String,
                default:'24'
            },
            text:{
                type:String,
                default:''
            },
            showIcon:{
                type:Boolean,
                default:true
            }
        }
    }
</script>
