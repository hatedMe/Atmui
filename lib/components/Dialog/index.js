


import Vue from "vue";
import dialog from './index.vue';


let instance = undefined;
const initInstance = () => {
    instance = new (Vue.extend(dialog))({
        el: document.createElement('div')
    });
    
    instance.$on('input', value => {
        console.log( value  );
        instance.value = value;
    });
    
    document.body.appendChild(instance.$el);
}


const Dialog = options => {
    return new Promise((resolve, reject) => {
        if (!instance) {
          initInstance();
        }
    
        Object.assign(instance, {
          resolve,
          reject,
        } , options);
      });
}

let defaultOptions = {
    value: true,
    // title: '',   // 标题
    // text : '',   // 内容文字 
    titleShow : true,  // 是否显示标题
    // submitText: '',  // 确认按钮文字
    // cancelText: '',   // 取消按钮文字
    showConfirmButton: true,  // 确认按钮是否显示
    showCancelButton: false,  // 取消按钮是否显示
    closeOnClickOverlay: false,  // 点击遮罩层是否关闭
    callback: action => {
        console.log( instance );
        !!action && instance['resolve'](action);
    }
}

Dialog.alert = options => Dialog( 
    Object.assign({},
        defaultOptions ,{
            //showCancelButton: false,
        },options)
);

Dialog.confirm = options => Dialog(
    Object.assign({},defaultOptions , {
        showCancelButton: true,
    },options)
);


export default Dialog;