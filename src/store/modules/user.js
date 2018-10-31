import Cookie from 'vue-cookie'

export default {
  namespaced: true,
  state: {
    user: null
  },
  actions: {
    addUser ({ state, commit }, user) {
      Cookie.set('token', user.authentication.token)
      commit('addUser', user)
    },
    logout ({ state, commit }) {
      Cookie.delete('token')
    }
  },
  mutations: {
    addUser (state, userToAdd) {
      state.user = userToAdd
      state.fetching = false
    }
  }
}
