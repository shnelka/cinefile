import axios from "axios"
export default {
  namespaced: true,
  state: {
    path: 'https://api.themoviedb.org/3/movie/popular',
    movies: null
  },
  getters: {
    getMoviesArray(state){return state.movies}
  },
  mutations: {
    getMovies(state, payload){
      state.movies = payload
    }
  },
  actions: {
    async getMovies({commit, state, rootState}, page = 1){
      try{
        const res = await axios.get(`${state.path}?api_key=${rootState.apiKey}&language=ru-RU&page=${page}`)
        const result = res.data.results
        commit('getMovies', result)
      }catch(err){
        console.log(err);
      }
    }
  },
}