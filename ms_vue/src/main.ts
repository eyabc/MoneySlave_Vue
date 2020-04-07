import Vue from 'vue'
import App from './App.vue'
import { router, store } from './middleware';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ko';
import moment from 'vue-moment';

Vue.config.productionTip = false;
Vue.use(moment);

Vue.use(ElementUI, { locale });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
