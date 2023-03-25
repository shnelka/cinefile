import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import router from './router'
import store from '@/store/index'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(fab,far,fas)
const app = createApp(App)
app.component('fa', FontAwesomeIcon)

// BtnMore
import BtnMore from "@/components/BtnMore.vue"
import Actors from "@/components/Actors.vue"
app.component('BtnMore', BtnMore)
app.component('Actors', Actors)

app.use(router).use(store).mount('#app')
