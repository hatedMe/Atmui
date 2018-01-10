// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import store from './store/store.js'

Vue.config.productionTip = false

import Atomui from '../lib/index.js';

Vue.use( Atomui )




window.geoLocation = new qq.maps.Geolocation('FKLBZ-3H3AF-JDBJJ-JETM3-63SXT-QOBTM', '购懒');




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
