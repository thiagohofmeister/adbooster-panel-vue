<template>
  <div class="row">
    <div class="col-8">
      <div class="usy-dt">
        <img :src="user.image" alt=""/>
        <div class="usy-name">
          <h3>{{ user.name }}</h3>
        </div>
      </div>
    </div>

    <div class="col-4 text-right">
      <span class="btn btn-primary user-action" @click="add()" v-if="!user.statusAdd">
        Adicionar
      </span>

      <span class="btn btn-primary user-action" @click="remove()" v-else>
        Desfazer amizade
      </span>
    </div>
  </div>
</template>

<script>
  import { mapFields } from 'vuex-map-fields'
  import api from '@/api'

  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    methods: {
      add () {
        if (this.user.statusAdd) {
          return false
        }

        api.addInviteFriendship({
          userAdd: this.userLogged._id.$oid,
          userAdded: this.user._id.$oid
        })
          .then(() => {})
          .catch(() => {})
          .then(() => this.$emit('change'))
      },
      remove () {
        api.unfriendshipInviteFriendship(this.userLogged._id.$oid, this.user._id.$oid)
          .then(() => {})
          .catch(() => {})
          .then(() => this.$emit('change'))
      }
    },
    computed: {
      ...mapFields({
        userLogged: 'user.user'
      })
    }
  }
</script>

<style lang="sass" scoped>
  .usy-dt > img
    width: 50px
    -webkit-border-radius: 100px
    -moz-border-radius: 100px
    -ms-border-radius: 100px
    -o-border-radius: 100px
    border-radius: 100px
    margin-right: 10px
    display: inline-block
    vertical-align: middle

  .usy-name
    margin-left: 10px
    display: inline-block
    vertical-align: top

  .usy-name h3
    color: #000000
    font-size: 16px
    text-transform: capitalize
    font-weight: 600
    margin-bottom: 6px
    margin-top: 2px

  .usy-name span
    color: #b2b2b2
    font-size: 14px

  .usy-name img
    margin-top: 2px
    margin-right: 6px
</style>
