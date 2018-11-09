export default {
  namespaced: true,
  state: {
    fetching: false,
    errors: []
  },
  actions: {
    addError ({ state, commit }, errors) {
      commit('fetching', true)

      for (let i in errors) {
        const error = errors[i]

        commit('addError', {
          input: error.property,
          error: {
            message: error.constraint,
            value: error[error.constraint]
          }
        })
      }

      commit('fetching', false)
    },
    clearErrors ({ commit }) {
      commit('clear')
    }
  },
  getters: {
    getError: state => input => {
      const error = state.errors.find(error => error.input === input)

      if (error !== undefined) {
        return error.error
      }

      return
    }
  },
  mutations: {
    clear (state) {
      state.errors = []
    },
    addError (state, error) {
      state.errors.push(error)
    },
    fetching (state, flag) {
      state.fetching = flag
    }
  }
}
