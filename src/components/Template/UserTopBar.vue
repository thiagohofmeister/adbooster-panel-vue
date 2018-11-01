<template>
  <div class="user-account">
    <div class="user-info">
      <img :src="user.image" alt=""/>
      <a href="#" title="">{{ user.name }}</a>
      <i class="la la-sort-down"/>
    </div>
    <div class="user-account-settingss">
      <h3>Online Status</h3>
      <ul class="on-off-status">
        <li>
          <div class="fgt-sec">
            <input type="radio" name="cc" id="c5"/>
            <label for="c5">
              <span></span>
            </label>
            <small>Online</small>
          </div>
        </li>
        <li>
          <div class="fgt-sec">
            <input type="radio" name="cc" id="c6"/>
            <label for="c6">
              <span></span>
            </label>
            <small>Offline</small>
          </div>
        </li>
      </ul>
      <h3>Custom Status</h3>
      <div class="search_form">
        <form>
          <input type="text" name="search"/>
          <button type="submit">Ok</button>
        </form>
      </div>
      <h3>Setting</h3>
      <ul class="us-links">
        <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
        <li><a href="#" title="">Privacy</a></li>
        <li><a href="#" title="">Faqs</a></li>
        <li><a href="#" title="">Terms & Conditions</a></li>
      </ul>
      <h3 class="tc"><a href="sign-in.html" title="">Logout</a></h3>
    </div>
  </div>
</template>

<script>
  import { mapFields } from 'vuex-map-fields'

  export default {
    computed: {
      ...mapFields({
        user: 'user.user'
      })
    }
  }
</script>

<style lang="sass" scoped>
  .user-info
    img
      max-width: 30px
</style>
