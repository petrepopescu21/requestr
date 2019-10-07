import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import RefParser from 'json-schema-ref-parser'
import AsyncComputed from 'vue-async-computed'
import Swatches from 'vue-swatches'
import { Sketch } from 'vue-color'
import 'vue-swatches/dist/vue-swatches.min.css'
import Draggable from 'vuedraggable'

Vue.config.productionTip = false
Vue.prototype.$RefParser = RefParser
Vue.use(AsyncComputed)

Vue.component('swatches', Swatches)
Vue.component('draggable', Draggable)
Vue.component('color-picker', Sketch)
  
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
