import Vue from 'vue'
import App from './App'

import title from './components/title.vue';
import panel from './components/panel.vue';

Vue.component('title', title);
Vue.component('panel', panel);


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
