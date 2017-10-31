import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import mainHeader from './components/header.vue'
new Vue({
  el: '#app',
  components: { 
    mainHeader
   }
})