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
  import Loader from '@/components/Template/TimeLine/Loader'
  import CreateNewAnnouncement from '@/components/Template/TimeLine/CreateNewAnnouncement'
  import Announcement from '@/components/Template/TimeLine/Announcement'
  import TopSellers from '@/components/Template/TimeLine/TopSellers'

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
