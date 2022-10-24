import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from 'pinia'
import { loadModules } from './loadModules'
import './assets/css/tailwind.css'

import cartModule from './modules/cart'

/*
Load imported modules in this folder.
The name of the vue module is the key and the value is the imported module
*/
loadModules({
  cart: cartModule,
})

createApp(App).use(createPinia()).use(router).mount('#app')
