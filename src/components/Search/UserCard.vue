<template>
  <div class="row">
    <div class="col-2">
      <img :src="user.image" alt="" class="user-image">
    </div>
    <div class="col-7">
      <span>{{ user.name }}</span>
    </div>
    <div class="col-3 text-right">
      <span class="btn btn-primary user-action" @click="add()" v-if="!user.statusAdd">
        Adicionar
      </span>

      <span class="btn btn-primary user-action" @click="remove()" v-else>
        Desfazer
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
  .user-image
    width: 48px
    height: 48px
    -webkit-border-radius: 100%
    -moz-border-radius: 100%
    border-radius: 100%

  .user-action
    margin: 6px 0
</style>
