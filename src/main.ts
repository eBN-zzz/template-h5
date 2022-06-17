import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/es/toast/style/index'
import { setupVant } from './plugins/vant'
import 'normalize.css'

const app = createApp(App)
app.use(router)
app.use(store)
setupVant(app)

app.mount('#app')
