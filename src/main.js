import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'

// import './assets/main.css'
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

