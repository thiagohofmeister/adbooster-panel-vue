import api from '@/api'

export default {
  namespaced: true,
  state: {
    fetching: false,
    orders: []
  },
  actions: {
    addOrder ({ state, commit }, order) {
      commit('fetching', true)

      commit('addOrder', order)

      commit('fetching', false)
    },
    fetchOrders ({ state, commit }) {
      if (!this.state.user.user) {
        return
      }

      commit('fetching', true)
      api.getOrders()
        .then(result => {
          const { total, items } = result
          commit('fetchOrders', { total, items })
        })
        .catch(() => {
          commit('fetchOrders', { total: 0, items: [] })
        })
        .finally(() => commit('fetching', false))
    },
    getOrder ({ state, commit }, code) {
      commit('fetching', true)

      // commit('addOrder', code)

      commit('fetching', false)
    }
  },
  getters: {
    getOrder: (state, commit) => code => {
      const order = state.orders.find(order => order._id.$oid === code)
      if (order) {
        return order
      }

      state.fetching = true
      api.getOrder(code)
        .then(order => {
          state.orders.push(order)
        })
        .catch(() => {})
        .finally(() => { state.fetching = false })
    }
  },
  mutations: {
    fetching (state, flag) {
      state.fetching = flag
    },
    addOrder (state, order) {
      console.log(order)
      state.orders.push(order)
    },
    fetchOrders (state, { total, items }) {
      state.total = total
      state.orders = items
    }
  }
}
