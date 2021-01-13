







import PickerCity from './PickerCity.vue';
import PickerDate from './Picker.vue';

import ClassPickerDate from './class.picker.date.js';
import ClassPickerCity from './class.picker.city.js';

import Vue from 'vue';


class Picker {
    
    constructor(viewType , opt ){
        this.vm = undefined;
        this.picker = null;
        let This = this;
        let _props = {};

        if (opt.headerCancelText ) _props.headerCancelText = opt.headerCancelText;
        if (opt.headerDoneText ) _props.headerDoneText = opt.headerDoneText;

        if( viewType === 'Date' ){
            this.vm = new Vue({
                render: function (createElement, context) {
                    return createElement(
                        PickerDate ,{
                            props: _props,
                        }
                    );
                },
                mounted () {
                    This.picker = new ClassPickerDate( this.$el , opt );
                }
            }).$mount();

            document.body.appendChild( this.vm.$el );
        }

        if( viewType === 'City'){
            this.vm = new Vue({
                render: function (createElement, context) {
                    return createElement(
                        PickerDate ,{
                            props: _props,
                        }
                    );
                },
                mounted () {
                    This.picker = new ClassPickerDate( this.$el , opt );
                }
            }).$mount();
            document.body.appendChild( this.vm.$el );
        }
    }

    show(){
        setTimeout( ()=> {
            this.vm.$el.classList.add('active');
        });
    }

    hide(){
        this.picker.picker.hide();
        return this.picker.picker;
    }
    destroy () {
        this.vm.$destroy();
        document.body.removeChild(this.vm.$el);
    }
}






export default Picker;

