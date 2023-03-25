<template>
  <router-link :to="`/${page}/`+id" class="btn-more">
    <fa icon="fa-solid fa-bars"/>
    <span>Подробнее</span>
  </router-link>
</template>

<script>
export default {
  props: ['page', 'id']
}
</script>