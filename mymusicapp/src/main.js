import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import components
import Navbar from "./Components/Navbar.vue"
import Home from "./Components/Home.vue"
import Result from "./Components/Result.vue"

// Create the Vue app instance
const app = createApp(App)

// Register components globally
app.component("app-navbar", Navbar)
app.component("app-home", Home)
app.component("app-result", Result)

// Mount the app
app.mount('#app')
