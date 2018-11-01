<template>
  <div class="user-data full-width">
    <div class="user-profile">
      <div class="username-dt">
        <div class="usr-pic">
          <img :src="user.image" alt=""/>
        </div>
      </div>
      <div class="user-specs">
        <h3>{{ user.name }}</h3>
        <span v-if="user.message">{{ user.message }}</span>
      </div>
    </div>

    <ul class="user-fw-status">
      <li>
        <h4>Amigos</h4>
        <span>34</span>
      </li>

      <li>
        <a href="#" title="">Ver perfil</a>
      </li>
    </ul>
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

<style scoped>

</style>
