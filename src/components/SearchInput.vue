<template>
  <div class="container main-search">
    <div class="main-search__input">
      <input type="text" :placeholder="placeholder" v-model="value">
    </div>
    <div class="main-search__content">
      <SearchContent
        v-for="(item, ind) in multiData"
        :key="ind"
        :item="item"
      />
    </div>
  </div>
</template>
<script>
import SearchContent from "@/components/SearchContent.vue"
export default {
  components: {SearchContent},
  props: ['placeholder'],
  data() {
    return {
      value:'',
    }
  },
  computed: {
    multiData(){
      return this.$store.state.searching.searchData
    }
  },
  watch: {
    value(searchValue){
      this.$store.dispatch('searching/getSearchData', this.value)
    }
  },
}
</script>