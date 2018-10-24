<template>
  <div class="col-lg-6 col-md-8 no-pd">
    <div class="main-ws-sec">

      <CreateNewAnnouncement/>

      <div class="posts-section">

        <Announcement/>

        <TopSellers/>
      </div>
    </div>
  </div>
</template>

<script>
import CreateNewAnnouncement from '@/components/Template/TimeLine/CreateNewAnnouncement'

export default {
  name: 'TimeLine',
  components: {
    CreateNewAnnouncement
  }
}
</script>

<style scoped>

</style>
