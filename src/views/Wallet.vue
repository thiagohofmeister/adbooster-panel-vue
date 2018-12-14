<template>
  <Panel>
    <Loader :loading="fetching"/>
    <span slot="header">Minha carteira</span>

    <div class="coins">
      <span class="t-success" v-if="hide">R$ ##,##</span>
      <span v-bind:class="style" v-else>{{ user.coins | currency }}</span>
      <button class="btn btn-none" @click="hide = !hide"><i class="fa" v-bind:class="icon"></i></button>
    </div>

  </Panel>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import Panel from '@/components/Template/Panel'
  import Loader from '@/components/Template/Loader'

  export default {
    data: () => ({
      hide: true
    }),
    mounted () {
      this.refreshUser()
    },
    methods: {
      ...mapActions('user', [
        'refreshUser'
      ])
    },
    computed: {
      ...mapFields({
        fetching: 'user.fetching',
        user: 'user.user'
      }),
      style () {
        return {
          't-error': this.user.coins < 0,
          't-sucess': this.user.coins >= 0
        }
      },
      icon () {
        return {
          'fa-eye-slash t-pending': !this.hide,
          'fa-eye t-delivered': this.hide
        }
      }
    },
    components: {
      Panel,
      Loader
    }
  }
</script>

<style lang="sass" scoped>
  .coins
    font-size: 25px
    text-align: center
</style>
