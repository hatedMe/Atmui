import Vue from 'vue';
import Loading from './Loading.vue';



const loading = (config) => {
    let props = config || {}
    const Instance = new Vue({
        render: function (createElement, context) {
            return createElement(
                Loading,{
                    props,
                }
            )
        }
    })

    const component = Instance.$mount();
    const notification = Instance.$children[0];


    function createElement (){
        document.body.appendChild(component.$el);
    }
    function removeElement (){
        document.body.removeChild(component.$el)
    }


    return {
        component: notification,
        show:createElement,
        hide:removeElement
    }
}

export default loading;