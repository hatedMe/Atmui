




<template>
    <div>
        <Button type="success" licon="icon-like" @click="clickHandle">点击</Button>
        <form ref="mrform">
            <input type="text" name="age" />
            <input type="text" name="num" />
            <button type="submit">tijiao</button>
        </form>
    </div>
</template>



<script>
    //import params from '../../../lib/util/params.js'
    export default {
        name: 'calendar',
        methods: {
            clickHandle() {
                let obj = {
                    a: '1',
                    b: {
                        name: '456',
                        age: '24'
                    },
                    c: 'xiaomin',
                    d: 24,
                    e: [1, 2, '3']
                }

                console.log(this.$Atmui.params(this.$refs.mrform));
            }
        }
    }
</script>
