import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '../components/Index.vue'

import Button from '../components/button/button.vue';
import BarTab from '../components/BarTab/BarTab.vue';
import Tab from '../components/Tab/Tab.vue';


import Loading from '../components/Loading/Loading.vue';
import List from '../components/List/List.vue';

import Calendar from '../components/Calendar/Calendar.vue';

import Utils from '../components/Utils/Utils.vue';
import Switchs from '../components/Switchs/Switchs.vue';

import Silder from '../components/Silder/Silder.vue';

import Map from '../components/Map/index.vue';
import changeMap from '../components/Map/changeAdd.vue';
import mapIndex from '../components/Map/map.vue';

import Form from '../components/Form/Form.vue';

import SearchBar from '../components/SearchBar/SearchBar.vue';
import SearchHistory from '../components/SearchHistory/SearchHistory.vue';

import Upload from '../components/Upload/Upload.vue';
import Picker from '../components/Picker/Picker.vue';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/button',
        name: 'Button',
        component: Button
    }, {
        path: '/battab',
        name: 'BarTab',
        component: BarTab
    }, {
        path: '/tab',
        name: 'Tab',
        component: Tab
    }, {
        path: '/loading',
        name: 'Loading',
        component: Loading
    },{
        path: '/list',
        name: 'list',
        component: List
    },{
        path: '/calendar',
        name: 'calendar',
        component: Calendar
    },{
        path: '/utils',
        name: 'Utils',
        component: Utils,
        children:[
            {
                path: 'loading',
                component: Loading
            }
        ]
    },{
        path: '/switch',
        name:'switchs',
        component: Switchs
    },{
        path: '/silder',
        component: Silder
    },{
        path: '/map',
        component: Map,
        children:[
            {
                path: 'changeadd',
                component: changeMap
            },
            {
                path: '/',
                component: mapIndex
            },
        ]
    },{
        path: '/form',
        component: Form
    },{
        path: '/search',
        component: SearchBar
    },{
        path: '/searchhistory',
        component: SearchHistory
    },{
        path: '/upload',
        component: Upload
    },{
        path: '/picker',
        component: Picker
    }]
})