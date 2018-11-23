<template>
  <div>
    <CreateNewAnnouncement/>

    <div class="row">
      <Loader v-if="fetching"/>
      <Announcement v-if="!fetching" v-for="announcement in announcements" :key="announcement" :announcement="announcement"/>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import Loader from '@/components/TimeLine/Loader'
  import CreateNewAnnouncement from '@/components/TimeLine/CreateNewAnnouncement'
  import Announcement from '@/components/TimeLine/Announcement'
  import TopSellers from '@/components/TimeLine/TopSellers'

  export default {
    name: 'TimeLine',
    mounted () {
      this.fetchTimeLine()
    },
    methods: {
      ...mapActions('user', [
        'fetchTimeLine'
      ])
    },
    computed: {
      ...mapFields({
        fetching: 'user.fetching',
        totalAnnouncements: 'user.totalAnnouncements',
        announcements: 'user.announcements'
      })
    },
    components: {
      CreateNewAnnouncement,
      Announcement,
      TopSellers,
      Loader
    }
  }
</script>

<style scoped>

</style>
