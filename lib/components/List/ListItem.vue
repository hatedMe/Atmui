

<template>
    <li class="list-item">
        <div class="list-item-inner">
            <p class="list-main-title">
            <Icon v-if="licon" :type="licon" size="24" />
            <slot>{{ mainTitle }}</slot>
        </p>
        <p class="list-item-after">
            <span v-if="subtitle">{{ subtitle }}</span>
            <Icon type="icon-enter" size="20" />
        </p>
        </div>
    </li>
</template>


<script>
    export default {
        name: 'ListItem',
        props: {
            mainTitle: {
                type: String,
                default: ''
            },
            subtitle: {
                type: String,
                default: ''
            },
            licon:{
                type:String,
                default:''
            }
        }
    }
</script>

