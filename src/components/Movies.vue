<template>
  <div class="main__movies">
    <router-link to="/films" class="main__movies-title">
      Фильмы 
      <fa icon="fa-solid fa-chevron-right" />
    </router-link>
    
    <Swiper
      :modules="modules"
      :space-between="24"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
    >
      <Swiper-slide class="main__movies-item"
        v-for="(slide, index) in moviesList"
        :key="index"
        :slide="slide"
        @click="getMovie(slide, index)"
      >
        <img :src="getImage + slide.backdrop_path" alt="">
      </Swiper-slide>
      <Swiper-slide class="main__movies-item">
        <router-link to="/films">
          <fa icon="fa-solid fa-chevron-right" />
          <span>Все Фильмы</span>
        </router-link>
      </Swiper-slide>
    </Swiper>
    
    <InfoBlock
      :movieId="movieId"
      :index="index"
      :movieObj="movieObj"
      @close="movieObj = movieId = null" 
    />
  </div>
</template>

<script>
import InfoBlock from "@/components/InfoBlock.vue"
import { mapActions, mapGetters } from "vuex"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
  components: {
    Swiper, SwiperSlide,InfoBlock
  },
  data() {
    return {
      modules: [Navigation],
      moviesList: null,
      swiperOptions: {
        breakpoints: {
          320: {slidesPerView: 1,},
          576: {slidesPerView: 2,},
          768: {slidesPerView: 3,},
          992: {slidesPerView: 4,},
          1200: {slidesPerView: 5,},
        }
      },
      movieId: null,
      movieObj: null,
      index: null,
    }
  },
  methods: {
    ...mapActions('movies', ['getMovies']),
    ...mapActions('movie', ['getMovieId']),
    async getMovie(movie, ind){
      this.movieId = movie.id
      this.movieObj = null
      this.index = ind
      await this.getMovieId(this.movieId)
      this.movieObj = this.getMovieObj
      // console.log(this.movieObj);
    }
  },
  computed: {
    ...mapGetters(['getFullImage', 'getImage']),
    ...mapGetters('movies', ['getMoviesArray']),
    ...mapGetters('movie', ['getMovieObj']),
  },
  async mounted() {
    await this.getMovies()
    this.moviesList = this.getMoviesArray
  },
}
</script>

<style>

</style>