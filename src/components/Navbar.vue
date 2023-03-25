<template>
  <nav class="navbar">
    <div class="navbar-nav container">
      <router-link class="navbar-nav__logo" to="/">
        <img src="@/assets/images/Logo.svg" alt="">
      </router-link>
      
      <ul class="navbar-nav__list">
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link.url">{{link.title}}</router-link>
        </li>
        <li>
          <router-link to="/search">
            <fa icon="fa-solid fa-magnifying-glass" />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: 'Главная', url: '/'},
        {title: 'Фильмы', url: '/films'},
        {title: 'Сериалы', url: '/series'},
      ]
    }
  },
}
</script>