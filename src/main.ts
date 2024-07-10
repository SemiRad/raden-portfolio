import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Fieldset from 'primevue/fieldset'
import Carousel from 'primevue/carousel'
import Divider from 'primevue/divider'
import Nora from '@primevue/themes/nora'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Nora
  },
  pt: {
    global: {
      css: `
      .p-carousel-indicator-active .p-carousel-indicator-button{
      background: white !important;
      }
      `
    }
  }
})
app.component('Button', Button)
app.component('Fieldset', Fieldset)
app.component('Carousel', Carousel)
app.component('Divider', Divider)
app.use(createPinia())
app.use(router)

app.mount('#app')
