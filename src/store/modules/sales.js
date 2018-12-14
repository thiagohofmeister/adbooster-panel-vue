import api from '@/api'

export default {
  namespaced: true,
  state: {
    fetching: false,
    sales: []
  },
  actions: {
    addSale ({ state, commit }, sale) {
      commit('fetching', true)

      commit('addSale', sale)

      commit('fetching', false)
    },
    fetchSales ({ state, commit }, sellerCode) {
      commit('fetching', true)

      const options = {
        sellerCode: sellerCode
      }

      api.getSales(options)
        .then(result => {
          const { total, items } = result
          commit('fetchSales', { total, items })
        })
        .catch(() => {
          commit('fetchSales', { total: 0, items: [] })
        })
        .finally(() => commit('fetching', false))
    }
  },
  getters: {
    getSale: state => code => {
      const sale = state.sales.find(sale => sale._id.$oid === code)
      if (sale) {
        return sale
      }

      state.fetching = true
      api.getOrder(code)
        .then(sale => {
          state.sales.push(sale)
        })
        .catch(() => {})
        .finally(() => { state.fetching = false })
    }
  },
  mutations: {
    fetching (state, flag) {
      state.fetching = flag
    },
    addSale (state, sale) {
      console.log(sale)
      state.sales.push(sale)
    },
    fetchSales (state, { total, items }) {
      state.total = total
      state.sales = items
    }
  }
}
