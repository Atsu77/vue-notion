import Vue from 'vue'
import App from './App.vue'

/* BootStrapの導入 */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
/* Font Awesomeの導入 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

library.add(faUserGraduate);
library.add(faFileLines);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
