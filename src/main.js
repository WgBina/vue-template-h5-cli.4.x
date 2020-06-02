import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// import ViewUI from 'view-design';
import { Message } from 'view-design';
import 'view-design/dist/styles/iview.css';

import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/index.scss'  // global css

// Vue.use(ElementUI);
// Vue.use(ViewUI);
// Vue.component('Message', Message);
Vue.prototype.$Message = Message;//赋值使用

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
