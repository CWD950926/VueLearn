// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { createApp } from 'vue'
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
// import App from './App.vue';
// const app = createApp(App)
// app.use(ElementPlus)
// app.mount('#app')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
