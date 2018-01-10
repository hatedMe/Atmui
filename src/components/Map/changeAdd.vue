

<template>
    <div class="mapbox" @click="changeadd">
        <iframe id="mapPage" width="100%" height="100%" frameborder=0 src="http://apis.map.qq.com/tools/locpicker?search=1&type=1&key=FKLBZ-3H3AF-JDBJJ-JETM3-63SXT-QOBTM&referer=购懒">
        </iframe>
    </div>
</template>



<script>
    export default {
        mounted() {
            window.addEventListener('message', event => {
                // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
                var loc = event.data;
                if (loc && loc.module == 'locationPicker') { //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
                    console.log('location', loc);
                    this.changeadd( loc );
                }
            }, false);
        },
        methods: {
            changeadd(loc){

                this.$store.commit('changeLoc', loc );
                this.$router.push({
                    path: `/map`
                })
            }
        }
    }
</script>


<style lang="less">

    .mapbox{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

</style>
