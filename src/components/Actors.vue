<template>
  <div class="actors" v-for="item in actors" :key="item">
    <img :src="getImage + item.profile_path" alt="" class="actors-img">
    <span class="actors-name">{{item.name}}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  props: ['count', 'id', 'type'],
  data() {
    return {
      actors: null
    }
  },
  methods: {
    ...mapActions('actors', ['getActors'])
  },
  computed: {
    ...mapGetters(['getImage']),
    getCountActors(){
      const type = this.type == 'movie' ? 'getActorsMovieCount' : 'getActorsSerialsCount';
      return this.$store.getters[`actors/${type}`](this.count)
    }
  },
  async created() {
    await this.getActors({movieId: this.id, type: this.type})
    this.actors = this.getCountActors
  },
}
</script>