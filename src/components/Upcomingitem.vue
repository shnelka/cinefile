<template>
  <Transition name="upcoming-item">
    <div class="main__upcoming-item" v-if="slideView == index">
      <img :src="getFullImage + slide.backdrop_path" alt="" class="main__upcoming-item-img">
      <div class="main__upcoming-content container">
        <h2 class="main__upcoming-content-title">{{slide.title}}</h2>
        <p class="main__upcoming-content-text">{{slide.overview}}</p>
        <BtnMore :page="'films'" :id="slide.id"/>
      </div>
      <div class="main__upcoming-next" @click="$emit('nextSlide')">
        <img :src="getImage + next.backdrop_path" alt="" class="main__upcoming-next-img">
        <div class="main__upcoming-next-text">
          <span>Следующий</span>
          <h4>{{next.title}}</h4>
        </div>
        <div class="main__upcoming-next-line"></div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: ['index','slide', 'slideView', 'next'],
  computed: {
    ...mapGetters(['getFullImage', 'getImage'])
  },
}
</script>

<style>

</style>