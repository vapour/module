import Vue from 'vue'
import Demo from './demo.vue'
import './plugins/element'
import './plugins/axios'

new Vue({
  render: h => h(Demo),
}).$mount('#app')
