

<template>
    <div class="input-item">
        <div class="input-item-inner">
            <label class="input-left">{{ title }}</label>
            <div class="input-right">
                <input class="input-text" type="text" :placeholder="placeholder" />
                <Icon v-if="!!type" :type="type" size="20" />
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'inputItem',
        computed: {
            type() {
                return this.licon === '' && typeof this.licon !== 'undefined' ? 'icon-enter' : this.licon
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            licon: {
                type: String,
            }
        }
    }
</script>

