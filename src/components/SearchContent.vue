<template>
  <div class="main-content__card">
    <img src="@/assets/images/no-img.jpg" alt="" class="main-content__card--img" v-if="item.backdrop_path == null">
    <img :src="getFullImage + item.backdrop_path" alt="" class="main-content__card--img" v-else>
    <a href="#!" class="main-content__card--link">{{item.title}}</a>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  props: ['item'],
  computed: {
    ...mapGetters(['getFullImage'])
  },
}
</script>