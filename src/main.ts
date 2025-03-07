import './assets/main.css'

import { createApp } from 'vue'
import FontAwesomePlugin from './plugins/fontawesome';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(FontAwesomePlugin)

app.mount('#app')
