import Vue from 'vue'
import App from './App.vue'
import List from './MachinesList.vue'
import Map from "./MachinesMap.vue"

Vue.component('Map',Map)
Vue.component('List',List)

new Vue({
  el: '#app',
  render: h => h(App)

})
