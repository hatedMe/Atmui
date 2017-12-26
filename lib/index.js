





// 全局 less
import './components/atomui.less';



// 全局 方法
import Alert from './components/Alert/index.js';

// 按钮
import Button from './components/Button/button.vue';

// 图标
import Icon from './components/Icon/Icon.vue';

// 表单
import Input from './components/Input/Input.vue';

// 底部barTab 
import BarTab from './components/BarTab/BarTab.vue';
import BarTabItem from './components/BarTab/barTabItem.vue';

// Tab 
import Tab from './components/Tab/Tab.vue'


const Atomui = {
    Button,
    Icon,
    Input,
    BarTab,
    BarTabItem,
    Tab
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
    Input,
    BarTab,
    BarTabItem,
    Tab
}

