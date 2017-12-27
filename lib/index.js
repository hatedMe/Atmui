





// 全局 less
import './components/atomui.less';



// 全局 方法
import Alert from './components/Alert/index.js';
import Loading from './components/Loading/index';

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
import Tab from './components/Tab/Tab.vue';
import TabItem from './components/Tab/TabItem.vue';

// List
import Lists from './components/List/List.vue';
import ListItem from './components/List/ListItem.vue';


const Atomui = {
    Button,
    Icon,
    Input,

    BarTab,
    BarTabItem,

    Tab,
    TabItem,

    Lists,
    ListItem
}


const install = function( Vue ){
    
    Object.keys(  Atomui ).forEach( key => {
        Vue.component( key , Atomui[key] )
    })

    Vue.prototype.$Alert = Alert; 
    Vue.prototype.$Loading = Loading;

}



export default Object.assign({},Atomui,{ install })



export {
    Button,
    Icon,
    Input,

    BarTab,
    BarTabItem,

    Tab,
    TabItem,

    Lists,
    ListItem
}

