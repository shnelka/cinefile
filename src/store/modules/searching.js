import axios from "axios"
export default {
  namespaced: true,
  state: {
    path: 'https://api.themoviedb.org/3/search/multi',
    searchData: null
  },
  mutations: {
    getSearchData(state, payload){
      state.searchData = payload
    }
  },
  actions: {
    async getSearchData({commit, state, rootState}, search){
      try{
        const res = await axios.get(`${state.path}?api_key=${rootState.apiKey}&language=ru-RU&query=${search}&page=4&include_adult=false`)
        const result = res.data.results
        console.log(result);
        commit('getSearchData', result)
      }catch(err){
        console.log(err);
      }
    }
  },
}