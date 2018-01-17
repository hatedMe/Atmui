

<template>
    <Silder>
        <SilderItem v-for="(item,index) in list" :key="index">
            <img class="slide-banner" :src="item" alt="">
        </SilderItem>
    </Silder>
</template>




<script>
    export default {
        data() {
            return {
                list: [
                    '../../../static/img/1.jpg',
                    '../../../static/img/2.jpg',
                    '../../../static/img/3.jpg'
                ]
            }
        },
        mounted() {
            this.swiper = new this.$Swiper(this.$el,{
                //onSlideChange:this.onSlideChange,
                //onSlideChangeEnd:this.onSlideChangeEnd
            });
        },
        methods:{
            onSlideChange(e){
                console.log( '拖动的时候触发' , e );
            },
            onSlideChangeEnd(e){
                console.log( '拖动结束的时候触发' , e );
            }
        },
        destroyed () {
            console.log( '销毁组件了' );
            console.log(this.swiper);
            this.swiper.Event(true);
            this.swiper.autoplayer(false);
        }
    }
</script>



