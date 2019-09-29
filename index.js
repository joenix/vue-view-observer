import vueViewObserver from "./index.vue";

export default {
  install(Vue) {
    Vue.component("vue-view-observer", vueViewObserver);
  }
};
