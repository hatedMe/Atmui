









import Alert from './Alert.vue';
import Vue from 'vue';


const alert = function( config ){
    let _props = config || {};
    const Instance = new Vue({
        render: function (createElement, context) {
            return createElement(
                Alert,{
                    props: _props,
                    on:{
                        onCancelHandle : this.onCancelHandleclick,
                        onSubmitHandle : this.onSubmitHandleclick,
                    }
                }
            );
        },
        methods:{
            onSubmitHandleclick () {
                this.onSubmit();
                console.log( '触发submit' );
            },
            onCancelHandleclick(){
                this.destroy();
                this.onCancel();
                console.log( '触发cancel' );

            },
            destroy () {
                this.$destroy();
                document.body.removeChild(this.$el);
                //this.onRemove();
            },

            onCancel(){},
            onSubmit(){}
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const notification = Instance.$children[0];

    notification.$parent.onCancel = config.onCancel
    notification.$parent.onSubmit = config.onSubmit
    
    console.log( notification );

    return {
        component: notification,
    }

}




export default alert;