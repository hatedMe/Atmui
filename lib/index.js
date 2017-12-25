






import './components/atomui.less';


import Alert from './components/Alert/index.js';

import Button from './components/Button/button.vue';
import Icon from './components/Icon/Icon.vue';
import Input from './components/Input/Input.vue';


const Atomui = {
    Button,
    Icon,
    Input
}


const install = function( Vue ){
    Object.keys(  Atomui ).forEach( key => {
        Vue.component( key , Atomui[key] )
    })

    Vue.prototype.$Alert = Alert;

}



export default Object.assign({},Atomui,{ install })

// export {
//     Button,
//     Icon
// }

export {
    Button,
    Icon,
    Input
}

