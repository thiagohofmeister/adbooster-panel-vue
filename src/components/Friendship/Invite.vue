<template>
  <div class="row">
    <div class="col-3">
      <img :src="invite.image" alt="" class="invite-image">
    </div>
    <div class="col-6">
      <span>{{ invite.name }}</span>
    </div>
    <div class="col-3 text-right">
      <span class="btn invite-action" @click="accept()">
        <i class="far fa-check-circle"></i>
      </span>

      <span class="btn invite-action" @click="decline()">
        <i class="far fa-times-circle"></i>
      </span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import api from '@/api'

  export default {
    props: {
      invite: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions('user', [
        'refreshUser',
        'fetchTimeLine'
      ]),
      accept () {
        api.acceptInviteFriendship(this.user._id.$oid, this.invite._id.$oid)
          .then(() => {
            this.refreshUser()
            if (this.totalAnnouncements <= 0) {
              this.fetchTimeLine()
            }
          })
          .catch(() => {})
          .then(() => this.$emit('change'))
      },
      decline () {
        api.declineInviteFriendship(this.user._id.$oid, this.invite._id.$oid)
          .then(result => console.log(result))
          .catch(() => {})
          .then(() => this.$emit('change'))
      }
    },
    computed: {
      ...mapFields({
        user: 'user.user',
        totalAnnouncements: 'user.totalAnnouncements'
      })
    }
  }
</script>

<style lang="sass" scoped>
  .invite-image
    width: 48px
    height: 48px
    -webkit-border-radius: 100%
    -moz-border-radius: 100%
    border-radius: 100%

  .invite-action
    margin: 14px 0

  *
    padding: 0
</style>
