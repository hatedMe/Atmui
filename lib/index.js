




import _Swiper from 'swiper'

import SwiperComponent from './swiper.vue';
import SlideComponent from './slide.vue';


const Swiper = window.Swiper || _Swiper
const swiper = SwiperComponent
const swiperSlide = SlideComponent


const install = function( Vue, opt ){
    Vue.component(SwiperComponent.name, SwiperComponent)
    Vue.component(SlideComponent.name, SlideComponent)
}

if (typeof window !== 'undefined' && window.Vue) {
    install( Vue )
}


export {
    Swiper, swiper, swiperSlide, install
}
