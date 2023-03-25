import axios from "axios"
export default {
  namespaced: true,
  state: {
    path: 'https://api.themoviedb.org/3/movie/top_rated',
    topRate: null
  },
  getters: {
    getTopRateArray(state){return state.topRate}
  },
  mutations: {
    getTopRate(state, payload){
      state.topRate = payload
    }
  },
  actions: {
    async getTopRate({commit, state, rootState}, page = 1){
      try{
        const res = await axios.get(`${state.path}?api_key=${rootState.apiKey}&language=ru-RU&page=${page}`)
        const result = res.data.results
        const top10 = []
        result.forEach(item => {
          if(top10.length < 10) {top10.push(item)}
        })
        commit('getTopRate', top10)
      }catch(err){
        console.log(err);
      }
    }
  },
}
