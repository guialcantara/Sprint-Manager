import Vue from 'vue'
import { io } from "socket.io-client";
import VueSocketIO from 'vue-socket.io';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Notifications from 'vue-notification'

const vueSocketInstance = new VueSocketIO({
  connection: io('http://localhost:3000'),
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
})
Vue.config.productionTip = false
Vue.use(vueSocketInstance)
Vue.use(Notifications)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
