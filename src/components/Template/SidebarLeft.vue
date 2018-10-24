<template>
  <div class="col-lg-3 col-md-4 pd-left-none no-pd">
    <div class="main-left-sidebar no-margin">

      <UserProfileResume/>

      <FriendshipSuggestionsList/>

      <Footer/>
    </div>
  </div>
</template>

<script>
import UserProfileResume from '@/components/User/ProfileResume'
import FriendshipSuggestionsList from '@/components/Friendship/SuggestionList'
import Footer from '@/components/Template/Footer'

export default {
  components: {
    UserProfileResume,
    FriendshipSuggestionsList,
    Footer
  }
}
</script>

<style scoped>

</style>
