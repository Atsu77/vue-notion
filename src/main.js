import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

/*  BootStrapの設定 */
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/* Font Awesomeの設定 */
library.add(faUserGraduate);
library.add(faFileLines);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
