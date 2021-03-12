import Vue from 'vue'
import Vuex from 'vuex'
import {API, API_KEY} from '../config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popular: [],
    upcoming: [],
    topRated: [],
    genres: [],
    genre: {}
  },

  mutations: {
    MUTATE_POPULAR (state, payload) {
      Vue.set(state, 'popular', [...payload])
    },
    MUTATE_UPCOMING (state, payload) {
      Vue.set(state, 'upcoming', [...payload])
    },
    MUTATE_TOP_RATED (state, payload) {
      Vue.set(state, 'topRated', [...payload])
    },
    MUTATE_GENRES (state, payload) {
      Vue.set(state, 'genres', [...payload])
    },
    MUTATE_SINGLE_GENRE (state, payload){
      Vue.set(state, 'genre', payload)
    }
  },

  getters: {
    GET_POPULAR (state){
      return state.popular;
    },
    GET_UPCOMING (state){
      return state.upcoming;
    },
    GET_TOP_RATED (state){
      return state.topRated;
    },
    GET_GENRES (state){
      return state.genres;
    },
  },

  actions: {
    LOAD_POPULAR ({commit}){
      return new Promise((resolve, reject) => {
        API.get(`/movie/popular${API_KEY}`)
          .then((res) => {
            commit('MUTATE_POPULAR', res.data.results)
            resolve(res)
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      });
    },


    LOAD_TOP_RATED ({commit}){
      return new Promise((resolve, reject) => {
        API.get(`/movie/top_rated${API_KEY}`)
          .then((res) => {
            commit('MUTATE_TOP_RATED', res.data.results)
            resolve(res)
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      });
    },


    LOAD_UPCOMING ({commit}){
      return new Promise((resolve, reject) => {
        API.get(`/movie/upcoming${API_KEY}`)
          .then((res) => {
            commit('MUTATE_UPCOMING', res.data.results)
            resolve(res)
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      });
    },


    LOAD_GENRES ({commit}){
      return new Promise((resolve, reject) => {
        API.get(`/genre/movie/list${API_KEY}`)
          .then((res) => {
            commit('MUTATE_GENRES', res.data.genres)
            resolve(res)
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      });
      
    }
  }

})
