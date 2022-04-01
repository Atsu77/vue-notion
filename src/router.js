import Vue from 'vue';
import Router from 'vue-router'
import MainPage from '@/components/MainPage.vue';
import BindingPage from '@/components/study/BindingPage.vue';
import DirectivePage from '@/components/study/DirectivePage.vue';
import EventPage from '@/components/study/EventPage.vue';

/* VueRouterを使用 */
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/main',
      component: MainPage,
    },
    {
      path: '/study/binding',
      component: BindingPage,
    },
    {
      path: '/study/directive',
      component: DirectivePage,
    },
    {
      path: '/study/event',
      component: EventPage
    },
    {
      path: '/*',
      redirect: '/main',
    }
  ],
});
