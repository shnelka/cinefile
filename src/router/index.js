import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "@/pages/Home.vue"
import Films from "@/pages/Films.vue"
import Search from "@/pages/Search.vue"
import Series from "@/pages/Series.vue"
import pageMovieId from "@/pages/pageMovieId.vue"
import pageSerialId from "@/pages/pageSerialId.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/films', name: 'Films', component: Films},
    {path: '/search', name: 'Search', component: Search},
    {path: '/series', name: 'Series', component: Series},
    {path: '/films/:id', name: 'pageMovieId', component: pageMovieId},
    {path: '/series/:id', name: 'pageSerialId', component: pageSerialId},
  ]
})

export default router
