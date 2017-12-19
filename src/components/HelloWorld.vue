<template>
    <div class="hello">
        <Icon type="icon-setup" />
    </div>
</template>

<script>
import Icon from '../../lib/components/Icon/Icon.vue'
    export default {
        name: 'HelloWorld',
        components:{
            Icon,
        },
        data() {
            return {
                msg: ''
            }
        }
    }
</script>

<style lang="less">
@import '../../lib/components/atomui.less';
</style>



