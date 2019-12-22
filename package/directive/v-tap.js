import TouchEvent from '../util/TouchEvent.js';


let tap = {
    bind: function (el, binding) {
        el.handler = function (e) {
            let value = binding.value;
            value.event = e;
            console.log(binding.arg);
            value.methods.call(this, value);
        }

        let _eventName = binding.arg ? binding.arg : 'tap';

        TouchEvent(el, _eventName , function (e) {
            el.handler(e, true)
        });
    }

}



export default tap;
