import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import './../node_modules/bulma/css/bulma.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import { store } from './store/index';
import VueTyperPlugin from 'vue-typer';
import VueEllipseProgress from 'vue-ellipse-progress';
import VueScrollactive from 'vue-scrollactive';

Vue.use(VueScrollactive);
Vue.use(VueEllipseProgress);
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueTyperPlugin);

// Components
import About from './components/pages/about/about.component';
import Home from './components/pages/home/home.component';
import Experience from './components/pages/experience/experience.component';
import Skills from './components/pages/skills/skills.component';

// App routes
const routes = [
  { path: '/', component: Home, meta: { transitionName: 'slide' } },
  { path: '/about', component: About, meta: { transitionName: 'slide' } },
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
