import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import DrupalMessage from '@/components/DrupalMessage.vue'

Vue.component('DrupalMessage', DrupalMessage)

new Vue({
  render: h => h(App),
}).$mount('#app')
