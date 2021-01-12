import Vue from 'vue'
import App from './App.vue'
import bem from './utils/create/bem';
const b = bem('atmui');
Vue.config.productionTip = false
Vue.prototype.b = b;
new Vue({
  render: h => h(App),
}).$mount('#app')
