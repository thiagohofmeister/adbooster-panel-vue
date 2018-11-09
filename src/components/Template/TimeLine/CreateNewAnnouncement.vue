<template>
  <div class="col-12">
    <div class="post-topbar">
      <div class="row">
        <div class="col-2">
          <div class="user-picy">
            <img :src="user.image" alt=""/>
          </div>
        </div>

        <div class="col-2 el-col-md-offset-16">
          <div class="text-right align-middle">
            <button class="btn btn-primary btnAnnouncement" @click="showModal()">Anunciar</button>
          </div>
        </div>
      </div>
    </div>

    <ModalNewAnnouncement/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import ModalNewAnnouncement from '@/components/Announcement/ModalNew'

  export default {
    methods: {
      ...mapActions('errors', [
        'clearErrors'
      ]),
      showModal () {
        this.clearErrors()
        this.$modal.show('createAnnouncement')
      }
    },
    computed: {
      ...mapFields({
        user: 'user.user'
      })
    },
    components: {
      ModalNewAnnouncement
    }
  }
</script>

<style lang="sass" scoped>
  .post-topbar
    padding: 23px 20px
    background-color: #fff
    border-top: 4px solid #e44d3a
    border-left: 1px solid #e4e4e4
    border-bottom: 1px solid #e4e4e4
    border-right: 1px solid #e4e4e4
    -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.24)
    -moz-box-shadow: 0 0 1px rgba(0,0,0,0.24)
    -ms-box-shadow: 0 0 1px rgba(0,0,0,0.24)
    -o-box-shadow: 0 0 1px rgba(0,0,0,0.24)
    box-shadow: 0 0 1px rgba(0,0,0,0.24)
    margin-bottom: 20px

  .user-picy
    img
      border-radius: 100%

  .btnAnnouncement
    margin: 7px 0
</style>
