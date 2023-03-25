import { createStore } from 'vuex'

import movies from "@/store/modules/movies"
import upcoming from "@/store/modules/upcoming"
import tvs from "@/store/modules/tvs"
import toprate from "@/store/modules/toprate"
import movie from "@/store/modules/movie"
import actors from "@/store/modules/actors"
import pageMovieId from "@/store/modules/pageMovieId"
import searching from "@/store/modules/searching"
// import pageSerailId from "@/store/modules/pageSerailId"


export default createStore({
  state: {
    apiKey: 'ff73598636b772c5fca88d178c32f1a4',
    imageFullUrl: 'https://image.tmdb.org/t/p/original',
    imageUrl: 'https://image.tmdb.org/t/p/w500'
  },
  modules: {
    movies,
    upcoming,
    tvs,
    toprate,
    movie,
    actors,
    searching,
  },
  getters: {
    getFullImage: (state) => state.imageFullUrl,
    getImage: (state) => state.imageUrl
  }
})
