

<template>
    <div class="wingpadding-xl spacepadding-xl">
        <h2 class="spacepadding-xl">当前地址</h2>
        <p class="spacepadding-xl">{{ $store.state.pos }}</p>
        <p class="spacepadding-xl">
            <Button @click="clickHandle" type="success" long>success</Button>
        </p>
        
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
