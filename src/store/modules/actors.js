import axios from "axios"
export default {
  namespaced: true,
  state: {
    path: 'https://api.themoviedb.org/3',
    actorsMovie: [],
    actorsSerials: [],
  },
  getters: {
    getActorsMovieCount: (state) => (count) => {
      return state.actorsMovie.slice(0, count)
    },
    getActorsSerialsCount: (state) => (count) => {
      return state.actorsSerials.slice(0, count)
    },
  },
  mutations: {
    getActorsMovie(state, payload){
      state.actorsMovie = payload
    },
    getActorsSerials(state, payload){
      state.actorsSerials = payload
    }
  },
  actions: {
    async getActors({commit, state, rootState}, {movieId, type}){
      try{
        const res = await axios.get(`${state.path}/${type}/${movieId}/credits?api_key=${rootState.apiKey}&language=ru-RU`)
        const result = res.data.cast
        console.log(result);
        if(type == 'movie'){
          commit('getActorsMovie', result)
        }else{
          commit('getActorsSerials', result)
        }
      }catch(err){
        console.log(err);
      }
    }
  },
}