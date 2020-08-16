import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

// Third party libraries TODO: improve links
import './../node_modules/bulma/css/bulma.css';

// Components
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

Vue.use(VueRouter);

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
  mode: 'history'
}).$mount('#app');
