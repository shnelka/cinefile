import axios from "axios"
export default {
  namespaced: true,
  state: {
    path: 'https://api.themoviedb.org/3/movie/',
    movie: null
  },
  getters: {
    getMovieObj(state){return state.movie}
  },
  mutations: {
    getMovieId(state, payload){
      state.movie = payload
    }
  },
  actions: {
    async getMovieId({commit, state, rootState}, movieId){
      try{
        const res = await axios.get(`${state.path}${movieId}?api_key=${rootState.apiKey}&language=ru-RU`)
        const result = res.data
        commit('getMovieId', result)
      }catch(err){
        console.log(err);
      }
    }
  },
}