import Vue from 'vue'
import App from './App.vue'
import List from './MachinesList.vue'
import Map from "./MachinesMap.vue"
import VueRouter from 'vue-router'
import OneMachine from "./Machine.vue"


Vue.component('Map',Map)
Vue.component('List',List)
Vue.component('MachineAlone', OneMachine)
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
   key: require('../api.json').key
  }
})

Vue.use(VueRouter)

const routes = [
  { path: '/ListMachines', component: List },
  { path: '/Map', component: Map },
  { path: '/Machine', component: OneMachine },
];
const router = new VueRouter({
  routes // raccourci pour `routes: routes`
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
