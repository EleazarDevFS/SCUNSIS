import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Imports para vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// importacion para vue-toastification
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
// Store to global message
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(Toast, {
  position: 'bottom-right',
  timeout: 3000,
  transition: 'Vue-Toastification__bounce',
  maxToasts: 5,
  newestOnTop: true
}).use(router).use(vuetify)
app.mount('#app')
