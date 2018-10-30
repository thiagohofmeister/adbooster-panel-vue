<template>
  <div>
    <CreateNewAnnouncement/>

    <div class="posts-section">

      <Announcement/>

      <TopSellers/>
    </div>
  </div>
</template>

<script>
import CreateNewAnnouncement from '@/components/Template/TimeLine/CreateNewAnnouncement'
import Announcement from '@/components/Template/TimeLine/Announcement'
import TopSellers from '@/components/Template/TimeLine/TopSellers'

export default {
  name: 'TimeLine',
  components: {
    CreateNewAnnouncement,
    Announcement,
    TopSellers
  }
}
</script>

<style scoped>

</style>
