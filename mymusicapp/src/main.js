import Vue from 'vue'
import App from './App.vue'

// Import Bootstrap CSS 
import 'bootstrap/dist/css/bootstrap.min.css'
// importing components
import Navbar from "./Components/Navbar.vue"
import Home from "./Components/Home.vue"
import Result from "./Components/Result.vue"


Vue.component("app-navbar",Navbar)
Vue.component("app-home",Home)
Vue.component("app-result",Result)
new Vue({
  el: '#app',
  render: h => h(App)
})
