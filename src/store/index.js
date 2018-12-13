import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import checkout from './modules/checkout'
import orders from './modules/orders'
import errors from './modules/errors'

import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    checkout,
    orders,
    errors
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  }
})
