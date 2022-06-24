import Vue from 'vue'
import App from './App.vue'
import router from './router'
//agregar la libreria, su css y registrarla en Vue
import DaiMaps from "dai-maps"
import "dai-maps/dist/dai-maps.css"
Vue.use(DaiMaps)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
