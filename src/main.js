import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ComponentRegister from './plugins/ComponentRegister'
import '../src/assets/scss/main.scss'

Vue.use(ComponentRegister)

Vue.config.productionTip = false
export const bus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  beforeCreate() { this.$store.commit('initialiseStore');},
  render: h => h(App)
}).$mount('#app')