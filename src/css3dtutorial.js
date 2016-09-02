import Vue from 'vue'
import App from './css3d'
import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
