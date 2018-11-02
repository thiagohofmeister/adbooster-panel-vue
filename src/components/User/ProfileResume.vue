<template>
  <div class="col-12">
    <div class="user-data">
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
  .user-data
    text-align: center
    background-color: #fff
    margin-bottom: 20px
    border-left: 1px solid #e5e5e5
    border-right: 1px solid #e5e5e5
    border-bottom: 1px solid #e5e5e5

  .username-dt
    float: left
    width: 100%
    background-color: #e44d3a
    padding-top: 40px

  .usr-pic
    width: 110px
    height: 110px
    margin: 0 auto
    margin-bottom: -48px

  .usr-pic > img
    float: none
    border: 5px solid #fff
    -webkit-border-radius: 100px
    -moz-border-radius: 100px
    -ms-border-radius: 100px
    -o-border-radius: 100px
    border-radius: 100px
    width: 100%

  .user-specs
    width: 100%
    padding: 165px 0 27px 0

  .user-specs h3
    color: #000000
    font-size: 24px
    text-transform: capitalize
    font-weight: 600
    margin-bottom: 8px

  .user-specs span
    color: #686868
    font-size: 14px


  .user-fw-status
    width: 100%

  .user-fw-status li
    width: 100%
    border-bottom: 1px solid #e5e5e5
    border-top: 1px solid #e5e5e5
    padding: 15px 0

  .user-fw-status li:last-child
    border-bottom: 0

  .user-fw-status li:nth-child(1),
  .user-fw-status li:nth-child(2)
    border-bottom: 0

  .user-fw-status li h4
    color: #686868
    font-size: 20px
    margin-bottom: 10px

  .user-fw-status span
    color: #000000
    font-size: 20px

  .user-fw-status li a
    color: #e44d3a
    font-size: 14px
    font-weight: 600
</style>
