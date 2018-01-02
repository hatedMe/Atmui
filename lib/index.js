// 全局 less
import './components/atomui.less';





import Atmui from './util/index.js'; // util

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

import Calendar from './components/Calendar/Calendar.vue';


const atomui = {
    Button,
    Icon,
    Input,

    BarTab,
    BarTabItem,

    Tab,
    TabItem,

    Lists,
    ListItem,

    Calendar
}


const install = function(Vue) {

    Object.keys(atomui).forEach(key => {
        Vue.component(key, atomui[key])
    })

    Vue.prototype.$Atmui = Atmui;

    Vue.prototype.$Alert = Alert;
    Vue.prototype.$Loading = Loading;
    //Vue.prototype.$Calendar = Calendar;

    Vue.directive('focusss', {
        // 当被绑定的元素插入到 DOM 中时……
        inserted: function(el) {
            // 聚焦元素
            console.log( 123 );
        }
    })
}



export default Object.assign({}, atomui, { install })



export {
    Button,
    Icon,
    Input,

    BarTab,
    BarTabItem,

    Tab,
    TabItem,

    Lists,
    ListItem,

    Calendar
}



// 指令