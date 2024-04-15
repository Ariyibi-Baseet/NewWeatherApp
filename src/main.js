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
import ProgressSpinner from 'primevue/progressspinner'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
// eslint-disable-next-line vue/no-reserved-component-names
app.component('Button', Button)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('ProgressSpinner', ProgressSpinner)

app.mount('#app')
