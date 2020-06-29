





import Loading from './Loading.vue';
import Vue from 'vue';




function VonicLoading (){
    
    let vm = undefined;

    function show(config){
        vm && vm.hide();
        vm = new Vue(Loading).$mount();
        vm.show(config)
    }

    function hide(){
        vm.hide()
    }

    return {
        show,
        hide
    }
}


export default new VonicLoading;

