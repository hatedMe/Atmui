

<template>
    <li class="list-item" @click="clickHandle">
        <div v-if="!to" class="list-item-inner">
            <p class="list-main-title">
                <Icon v-if="licon" :type="licon" size="24" />
                <slot>{{ mainTitle }}</slot>
            </p>
            <p class="list-item-after">
                <span v-if="subtitle">{{ subtitle }}</span>
                <Icon type="icon-enter" size="20" />
            </p>
        </div>
        <router-link v-else :to="to" class="list-item-inner">
            <p class="list-main-title">
                <Icon v-if="licon" :type="licon" size="24" />
                <slot>{{ mainTitle }}</slot>
            </p>
            <p class="list-item-after">
                <span v-if="subtitle">{{ subtitle }}</span>
                <Icon type="icon-enter" size="20" />
            </p>
        </router-link>
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
            licon: {
                type: String,
                default: ''
            },
            to:{
                type: String,
                default: ''
            }
        },
        methods: {
            clickHandle(ev){
                this.$emit('click' ,ev)
            }
        }
    }
</script>

