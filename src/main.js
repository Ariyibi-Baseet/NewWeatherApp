import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'

// prime vue styled mode
import 'primevue/resources/themes/aura-light-green/theme.css'

// prime vue components
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Chip from 'primevue/chip'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('Chip', Chip)

app.mount('#app')
