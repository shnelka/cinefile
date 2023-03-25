<template>
  <div class="main__upcoming">
    <UpcomingItem
      v-for="(slide, index) in upcoming"
      :key="slide.id"
      :index="index"
      :slide="slide"
      :slideView="slideView"
      :next="upcoming[index + 1 == upcoming.length ? 0 : index + 1]"
      @nextSlide="nextSlide"
    />
  </div>
</template>

<script>
import UpcomingItem from '@/components/Upcomingitem.vue'
import { mapGetters, mapActions } from "vuex"
export default {
  components: {UpcomingItem},
  data() {
    return {
      upcoming: null,
      slideView: 0,
      timeOut: null
    }
  },
  async mounted() {
    await this.getUpcoming()
    this.upcoming = this.getUpcomingArray
    this.timeOut = setTimeout(this.slide, 10000)
  },
  methods: {
    ...mapActions('upcoming', ['getUpcoming']),
    slide(){
      if(this.upcoming.length - 1 == this.slideView){
        this.slideView = 0
      }else{
        this.slideView++
      }
      this.timeOut = setTimeout(this.slide, 10000)
    },
    nextSlide(){
      clearTimeout(this.timeOut)
      this.slide()
    }
  },
  computed: {
    ...mapGetters('upcoming', ['getUpcomingArray'])
  },
}
</script>