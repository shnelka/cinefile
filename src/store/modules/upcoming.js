import axios from "axios"
export default {
  namespaced: true,
  state: {
    upcoming: null,
    upcomingPath: 'https://api.themoviedb.org/3/movie/upcoming'
  },
  getters: {
    getUpcomingArray: (state) => state.upcoming
  },
  mutations: {
    getUpcoming(state, payload){
      state.upcoming = payload
    }
  },
  actions: {
    async getUpcoming({commit, state, rootState}){
      try{
        const res = await axios.get(`${state.upcomingPath}?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
        const result = res.data.results
        commit('getUpcoming', result)
      }catch(err){
        console.log(err);
      }
    }
  },
}