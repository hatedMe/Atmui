<template>
    <div class="hello">
        <Icon type="icon-setup"  />
        <p>
            wo sh ziti font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        </p>

        <Input placeholder="输入框" v-model="msg" @changeHandle="getInput" />
        <!-- <input v-model="msg" @change="getInput" /> -->
        <p>  </p>
    </div>
</template>

<script>
    import { Icon } from '../../lib/index.js';
    export default {
        name: 'HelloWorld',
        components:{
            Icon,
        },
        data() {
            return {
                msg: 'sds'
            }
        },
        methods: {
            getInput(){
                console.log( this.msg );
            }
        }
    }
</script>

<style lang="less">

</style>



