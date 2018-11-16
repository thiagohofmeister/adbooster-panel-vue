import api from '@/api'
import Cookie from 'vue-cookie'

export default {
  namespaced: true,
  state: {
    fetching: false,
    user: null,
    totalAnnouncements: 0,
    announcements: [],
    invites: []
  },
  actions: {
    fetchInviteFriendship ({ state, commit }) {
      if (!state.user) {
        return
      }

      api.getInvitesFriendship(state.user._id.$oid)
        .then(invites => commit('fetchInvitesFriendship', invites))
        .catch(() => commit('fetchInvitesFriendship', []))
    },
    fetchTimeLine ({ state, commit }) {
      if (!state.user) {
        return
      }

      let options = {
        userCode: state.user._id.$oid
      }

      commit('fetching', true)
      api.getTimeLineUser(options)
        .then(result => {
          const { total, items } = result
          commit('fetchTimeLine', { total, items })
        })
        .catch(() => {
          commit('fetchTimeLine', { total: 0, items: [] })
        })
    },
    addUser ({ state, commit }, user) {
      commit('fetching', true)
      Cookie.set('token', user.authentication.token)

      if (!user.image) {
        user.image = '/static/images/no-photo.jpg'
      }

      commit('addUser', user)
    },
    logout ({ state, commit }) {
      Cookie.delete('token')
      api.getUser()
    }
  },
  mutations: {
    fetchInvitesFriendship (state, invites) {
      state.invites = invites
    },
    fetchTimeLine (state, { total, items }) {
      state.totalAnnouncements = total
      state.announcements = items
      state.fetching = false
    },
    addUser (state, userToAdd) {
      state.user = userToAdd
      state.fetching = false
    },
    fetching (state, flag) {
      state.fetching = flag
    }
  }
}
