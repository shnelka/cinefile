<template>
  <div class="wrapper">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {Navbar},
  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>