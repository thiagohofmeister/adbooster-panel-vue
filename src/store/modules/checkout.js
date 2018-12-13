// import api from '@/api'
// import notifier from '@/notifier'

export default {
  namespaced: true,
  state: {
    items: [],
    totalPrice: 0,
    shippingAddress: null,
    billingAddress: null,
    paymentMethod: 'wallet'
  },
  actions: {
    addItemToCart ({ state, commit }, item) {
      commit('fetching', true)

      commit('setCartItems', [])

      commit('addItemToCart', {
        product: item,
        quantity: 1
      })

      commit('updateCartTotalPrice')

      commit('fetching', false)
    },
    setShippingAddress ({state, commit}, address) {
      commit('fetching', true)

      commit('setShippingAddress', address)

      commit('fetching', false)
    }
  },
  mutations: {
    fetching (state, flag) {
      state.fetching = flag
    },
    setCartItems (state, items) {
      state.items = items
    },
    addItemToCart (state, item) {
      state.items.push(item)
    },
    updateCartTotalPrice (state) {
      state.totalPrice = 0
      for (let i in state.items) {
        const item = state.items[i]

        state.totalPrice += item.product.currentPrice * item.quantity
      }
    },
    setShippingAddress (state, address) {
      state.shippingAddress = address
      state.billingAddress = address
    }
  }
}
