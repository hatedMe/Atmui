

<template>
    <div>
        <h2>当前地址</h2>
        <p>{{ $store.state.pos }}</p>
        <Button @click="clickHandle" type="success" long>success</Button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
            if (this.$store.state.pos == '') {
                console.log( 456 );
                window.geoLocation.getIpLocation( pos => {
                    this.sucCallback(pos);
                });
            }
        },
        methods: {
            clickHandle() {
                this.$router.push({
                    path: `/map/changeadd`
                })
            },
            sucCallback(pos) {
                this.$store.commit('changeLoc',pos);
            }
        }
    }
</script>

<style>

</style>
