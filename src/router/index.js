import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '../components/Index.vue'

import Button from '../components/button/button.vue';
import BarTab from '../components/BarTab/BarTab.vue';
import Tab from '../components/Tab/Tab.vue';


import Loading from '../components/Loading/Loading.vue';
import List from '../components/List/List.vue';

import Utils from '../components/Utils/Utils.vue';

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
        path: '/utils',
        name: 'Utils',
        component: Utils,
        children:[
            {
                path: 'loading',
                component: Loading
            }
        ]
    }]
})