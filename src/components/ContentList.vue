<template>
  <div class="container main-content">
    <h1 class="main-content__title">
      {{ content == 'movie' ? 'Все фильмы' : 'Все сериалы' }}
    </h1>
    <div class="main-content__list">
      <div class="main-content__card" v-for="(item, ind) in allList" :key="ind">
        <img :src="getFullImage + item.backdrop_path" alt="" class="main-content__card--img">
        <a href="#!" class="main-content__card--link">{{item.title}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  props:['content'],
  data() {
    return {
      page: 1,
      loading: false,
      allList: []
    }
  },
  computed: {
    ...mapGetters(['getFullImage', 'getImage'])
  },
  methods: {
    async getContent(){
      if(!this.loading){
        this.loading = true
        let action = this.content == 'movie' ? 'movies/getMovies' : 'tvs/getTv';
        await this.$store.dispatch(`${action}`, this.page)
        let getter = this.content == 'movie' ? 'movies/getMoviesArray' : 'tvs/getTvArray';
        const allInfo = await this.$store.getters[getter]
        this.allList.push(...allInfo)
        this.loading = false
        this.page++
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
        this.getContent();
      }
    })
    this.getContent()
  },
}
</script>