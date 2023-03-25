import axios from "axios"
export default {
  namespaced: true,
  state: {
    path: 'https://api.themoviedb.org/3/tv/popular',
    tv: null
  },
  getters: {
    getTvArray(state){return state.tv}
  },
  mutations: {
    getTv(state, payload){
      state.tv = payload
    }
  },
  actions: {
    async getTv({commit, state, rootState}, page = 1){
      try{
        const res = await axios.get(`${state.path}?api_key=${rootState.apiKey}&language=ru-RU&page=${page}`)
        const result = res.data.results
        commit('getTv', result)
      }catch(err){
        console.log(err);
      }
    }
  },
}