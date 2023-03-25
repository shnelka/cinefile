<template>
  <div class="main__info" :class="{active: movieId != null}">
    <fa icon="fa-solid fa-xmark" class="main__info-close" @click="$emit('close')"/>
    <div class="main__info-block" v-if="movieObj">
      <img :src="getFullImage+movieObj.backdrop_path" alt="" class="main__info-img">
      <div class="main__info-content">
        <div class="main__info-content-text">
          <h2>{{movieObj.title}}</h2>
          <p>{{movieObj.overview}}</p>
          <ul class="main__info-content-tag">
            <li>{{new Date(movieObj.release_date).getFullYear()}},</li>
            <li v-for="tag in movieObj.genres" :key="tag.id">{{tag.name}},</li>
          </ul>
          <div class="main__info-content-actors">
            <Actors :count="4" :id="movieId" :type="'movie'"/>
          </div>
          <BtnMore :page="'films'" :id="movieObj.id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: ['movieId', 'index', 'movieObj'],
  computed: {
    ...mapGetters(['getFullImage', 'getImage']),
  },
}
</script>

<style>

</style>