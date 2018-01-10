

import Vuex from 'vuex';
import Vue from 'vue';


Vue.use( Vuex );
import state from './state.js';
import mutations from './mutations.js';


export default new Vuex.Store({
    state ,
    mutations
})