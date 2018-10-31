import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  }
})
