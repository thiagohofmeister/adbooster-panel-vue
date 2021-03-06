import api from '@/api'
import Cookie from 'vue-cookie'
import notifier from '@/notifier'

export default {
  namespaced: true,
  state: {
    fetching: false,
    user: null,
    totalAnnouncements: 0,
    announcements: [],
    invites: [],
    conversations: [],
    notifications: [],
    flagNotifierNewInvite: false
  },
  actions: {
    fetchInviteFriendship ({ state, commit }) {
      if (!state.user) {
        return
      }

      const count = state.invites.length

      api.getInvitesFriendship(state.user._id.$oid)
        .then(invites => commit('fetchInvitesFriendship', invites))
        .catch(() => commit('fetchInvitesFriendship', []))
        .then(() => {
          if (count < state.invites.length && state.flagNotifierNewInvite) {
            notifier.success('Nova solicitação de amizade', 'Solicitações de amizade')
          }

          state.flagNotifierNewInvite = true
        })
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
    addAnnouncement ({ state, commit }, { code, sharedCode }) {
      if (!state.user) {
        return
      }

      commit('fetching', true)
      api.getAnnouncement(code, sharedCode)
        .then(announcement => {
          commit('addAnnouncement', announcement)
        })
        .catch(() => {})
    },
    addImpulseAnnouncement ({ state, commit }, impulse) {
      for (let i in state.announcements) {
        const announcementState = state.announcements[i]

        if (announcementState._id.$oid === impulse.announcementId) {
          commit('addImpulseAnnouncement', { index: i, impulse: impulse.impulse })
          break
        }
      }
    },
    refreshUser ({ state, commit }) {
      if (!state.user) {
        return
      }

      api.getUser()
        .then(user => commit('addUser', user))
        .catch(() => {})
    },
    addUser ({ state, commit }, user) {
      commit('fetching', true)
      Cookie.set('token', user.authentication.token)

      commit('addUser', user)
    },
    logout ({ state, commit }) {
      Cookie.delete('token')
      api.getUser()
    }
  },
  getters: {
    getAnnouncement: state => (code, sharedCode) => state.announcements.find(announcement => announcement._id.$oid === code && announcement.sharedBy._id.$oid === sharedCode)
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
      if (!userToAdd.image) {
        userToAdd.image = '/static/images/no-photo.jpg'
      }

      state.user = userToAdd
      state.fetching = false
    },
    addAnnouncement (state, announcement) {
      state.announcements.push(announcement)
      state.totalAnnouncements = state.announcements.length
      state.fetching = false
    },
    addImpulseAnnouncement (state, { index, impulse }) {
      state.announcements[index].impulse.push(impulse)
    },
    fetching (state, flag) {
      state.fetching = flag
    }
  }
}
