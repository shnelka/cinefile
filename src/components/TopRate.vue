<template>
  <div class="main__rate">
    <h2  class="main__rate-title">
      Топ<span>10</span>
    </h2>
    
    <Swiper
      :modules="modules"
      :space-between="24"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
    >
      <Swiper-slide class="main__rate-item"
        v-for="(slide, index) in topList"
        :key="index"
        :slide="slide"
      >
        <img :src="getFullImage + slide.backdrop_path" alt="">
        <div class="main__rate-item--text">
          <p>{{index+1}}</p>
        </div>
      </Swiper-slide>
    </Swiper>
    
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {
      modules: [Navigation],
      topList: null,
      swiperOptions: {
        breakpoints: {
          768: {slidesPerView: 1,},
          992: {slidesPerView: 2,},
          1200: {slidesPerView: 3,},
        }
      }
    }
  },
  methods: {
    ...mapActions('toprate', ['getTopRate'])
  },
  computed: {
    ...mapState('toprate', ['topRate', 'path']),
    ...mapGetters(['getFullImage']),
  },
  async mounted() {
    await this.getTopRate()
    this.topList = this.topRate
  },
}
</script>

<style>

</style>