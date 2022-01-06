import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/icon/iconfont.css' //引入icon图标
import './assets/icon/iconfont.js'

import ElementUI from 'element-ui'; //引入element-ui
import 'element-ui/lib/theme-chalk/index.css';

import Contextmenu from "vue-contextmenujs" //引入右键菜单

Vue.use(Contextmenu);
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')