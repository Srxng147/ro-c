import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/global.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// font awesome

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

// import the icons you need
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

library.add(faFacebook, faInstagram, faTwitter, faYoutube)

app.component("font-awesome-icon", FontAwesomeIcon)

