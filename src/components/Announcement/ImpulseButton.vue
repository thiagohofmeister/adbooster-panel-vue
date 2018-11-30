<template>
  <span @click="impulse()" v-if="!isOwner" class="btn" v-bind:class="{ 'is-loading': loading }"><i v-bind:class="{ far: !isImpulsed, fa: isImpulsed }" class="fa-heart"></i> {{ isImpulsed ? 'Impulsionado' : 'Impulsionar' }}</span>
</template>

<script>
  import api from '@/api'
  import { mapFields } from 'vuex-map-fields'
  import { mapActions } from 'vuex'

  export default {
    data: () => ({
      isImpulsed: false,
      loading: false
    }),
    props: {
      announcement: {
        type: Object,
        required: true
      }
    },
    mounted () {
      this.checkImpulsed()
    },
    methods: {
      ...mapActions('user', [
        'addImpulseAnnouncement'
      ]),
      impulse () {
        this.loading = true

        const owner = this.user._id.$oid
        const origin = this.announcement.sharedBy._id.$oid

        const impulse = {
          announcementId: this.announcement._id.$oid,
          impulse: {
            owner: this.user._id.$oid,
            origin: owner === origin ? null : origin
          }
        }

        let result = null
        if (this.isImpulsed) {
          result = api.removeImpulseAnnouncement(impulse)
        } else {
          result = api.addImpulseAnnouncement(impulse)
        }

        result
          .then(announcement => {
            this.announcement.impulses = announcement.impulses
            this.addImpulseAnnouncement(impulse)
          })
          .catch(() => {})
          .then(() => {
            this.checkImpulsed()
            this.loading = false
          })
      },
      checkImpulsed () {
        for (let i in this.announcement.impulses) {
          const impulse = this.announcement.impulses[i]

          if (impulse.owner === this.user._id.$oid && impulse.origin === this.announcement.sharedBy._id.$oid) {
            this.isImpulsed = true
            return
          }
        }

        this.isImpulsed = false
      }
    },
    computed: {
      ...mapFields({
        user: 'user.user'
      }),
      isOwner () {
        return this.user._id.$oid === this.announcement.sharedBy._id.$oid
      }
    }
  }
</script>

<style scoped>

</style>
