<template>
  <div class="col-lg-3 col-md-4 pd-left-none no-pdd">
    <div class="row">
      <UserProfileResume/>

      <div class="col-12">
        <Wallet/>
      </div>

      <SiteFooter v-if="false"/>
    </div>
  </div>
</template>

<script>
  import UserProfileResume from '@/components/User/ProfileResume'
  import FriendshipSuggestionsList from '@/components/Friendship/SuggestionList'
  import SiteFooter from '@/components/Template/Footer'
  import Wallet from '@/views/Wallet'

  export default {
    components: {
      UserProfileResume,
      FriendshipSuggestionsList,
      SiteFooter,
      Wallet
    }
  }
</script>

<style scoped>

</style>
