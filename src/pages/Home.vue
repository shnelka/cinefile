<template>
  <div class="main">
    <Upcoming/>
    <Movies/>
    <TvS/>
    <TopRate/>
  </div>
</template>

<script>
import Upcoming from '@/components/Upcoming.vue'
import Movies from '@/components/Movies.vue'
import TvS from '@/components/TvSer.vue'
import TopRate from '@/components/TopRate.vue'
export default {
  components: {Upcoming, Movies, TvS, TopRate}
}
</script>

<style>

</style>