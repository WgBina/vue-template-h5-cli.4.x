import Vue from 'vue';

if (process.env.NODE_ENV === 'development') {
    const VConsole = require('vconsole');
    new VConsole();
}

import App from './App.vue';
import router from './router';

import { store, mutations } from './store'; //自定义store

import HTTP from '@/api';
import mai from './utils/dictionary.js';
import utils from './utils/index.js';
import 'normalize.css/normalize.css'; // a modern alternative to CSS resets
import './styles/index.scss'; // global css

Vue.prototype.$HTTP = HTTP; //赋值使用
//全局埋点方法
Vue.prototype.$mai = mai.mai;
Vue.prototype.$maiVisit = mai.maiVisit;
//全局utils方法
Vue.prototype.$utils = utils;
//自定义store
Vue.prototype.$store = {
    store,
    mutations
};


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
