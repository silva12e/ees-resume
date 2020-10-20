import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import './../node_modules/bulma/css/bulma.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import { store } from './store/index';

Vue.use(VueRouter);
Vue.use(VueMaterial);

// Components
import About from './components/pages/about/about.component';
import Experience from './components/pages/experience/experience.component';
import Skills from './components/pages/skills/skills.component';

// App routes
const routes = [
  { path: '/', component: About, meta: { transitionName: 'slide' } },
  { path: '/experience', component: Experience,  meta: { transitionName: 'slide' } },
  { path: '/skills', component: Skills, meta: { transitionName: 'slide' } },
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  mode: 'history',
  store
}).$mount('#app');
