import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('drupal-message', require('@/components/DrupalMessage').default)

new Vue({
  render: h => h(App),
}).$mount('#app')
