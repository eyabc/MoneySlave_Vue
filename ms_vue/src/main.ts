import Vue from 'vue'
import App from './App.vue'
import router from './middleware/router'
import store from './middleware/store'
import './middleware/icon'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
