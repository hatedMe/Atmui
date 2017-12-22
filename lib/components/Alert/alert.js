









import Alert from './Alert.vue';
import Vue from 'vue';


const alert = function(){
    const Instance = new Vue({
        render: function (createElement, context) {
            return createElement(
                Alert,{
                    props: {

                    }
                }
            );
        }
    });
    
    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const notification = Instance.$children[0];
    console.log(  notification );
}




export default alert;