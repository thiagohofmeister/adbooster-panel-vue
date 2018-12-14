<template>
  <div class="actions">
    <div class="drop friend-invites">
      <span class="btn-action" v-bind:class="{ dropdownOpen: flags.showFriendInvites }" @click="toggleFriendInvites">
        <i class="fa fa-user-friends"></i>
        <span class="count" v-if="invites.length">{{ invites.length }}</span>
      </span>

      <div class="drop-inner" v-bind:class="{ show: flags.showFriendInvites }" aria-labelledby="dropdownMenuButton">
        <div class="row drop-title">
          <div class="col-12 text-center">
            Solicitações de amizade
          </div>
        </div>
        <div class="row">
          <div class="col-12" v-for="invite in invites" :key="invite">
            <Invite :invite="invite" @change="fetchInviteFriendship"/>
          </div>

          <div class="col-12 text-center no-invites" v-if="!invites.length">
            Nenhuma nova solicitação
          </div>
        </div>
      </div>
    </div>

    <div class="drop chats">
      <span class="btn-action" v-bind:class="{ dropdownOpen: flags.showChats }" @click="toggleChats">
        <i class="fa fa-comment"></i>
        <span class="count" v-if="conversations.length">{{ conversations.length }}</span>
      </span>

      <div class="drop-inner" v-bind:class="{ show: flags.showChats }" aria-labelledby="dropdownMenuButton">
        <div class="row drop-title">
          <div class="col-12 text-center">
            Conversas
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-center no-invites" v-if="!conversations.length">
            Nenhuma nova conversa
          </div>
        </div>
      </div>
    </div>

    <div class="drop notifications">
      <span class="btn-action" v-bind:class="{ dropdownOpen: flags.showNotifications }" @click="toggleNotifications">
        <i class="fa fa-bell"></i>
        <span class="count" v-if="notifications.length">{{ notifications.length }}</span>
      </span>

      <div class="drop-inner" v-bind:class="{ show: flags.showNotifications }" aria-labelledby="dropdownMenuButton">
        <div class="row drop-title">
          <div class="col-12 text-center">
            Notificações
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-center no-invites" v-if="!notifications.length">
            Nenhuma nova notificação
          </div>
        </div>
      </div>
    </div>

    <div class="drop options">
      <span class="btn-action" v-bind:class="{ dropdownOpen: flags.showOptions }" @click="toggleOptions">
        <i class="fa fa-caret-down"></i>
      </span>

      <div class="drop-inner" v-bind:class="{ show: flags.showOptions }" aria-labelledby="dropdownMenuButton">

        <ul class="options-container">

          <li class="options-item" @click="logout">
            <span>Sair</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import Invite from '@/components/Friendship/Invite'

  export default {
    data: () => ({
      flags: {
        showFriendInvites: false,
        showChats: false,
        showNotifications: false,
        showOptions: false
      }
    }),
    mounted () {
      this.fetch()
      setInterval(() => this.fetch(), 5000)
    },
    methods: {
      ...mapActions('user', [
        'logout',
        'fetchInviteFriendship'
      ]),
      toggleFriendInvites () {
        this.hideAll('showFriendInvites')
        this.flags.showFriendInvites = !this.flags.showFriendInvites
      },
      toggleChats () {
        this.hideAll('showChats')
        this.flags.showChats = !this.flags.showChats
      },
      toggleNotifications () {
        this.hideAll('showNotifications')
        this.flags.showNotifications = !this.flags.showNotifications
      },
      toggleOptions () {
        this.hideAll('showOptions')
        this.flags.showOptions = !this.flags.showOptions
      },
      hideAll (flag) {
        for (let i in Object.keys(this.flags)) {
          const flagName = Object.keys(this.flags)[i]

          if (flagName !== flag) {
            this.flags[flagName] = false
          }
        }
      },
      fetch () {
        this.fetchInviteFriendship()
      }
    },
    computed: {
      ...mapFields({
        invites: 'user.invites',
        conversations: 'user.conversations',
        notifications: 'user.notifications'
      })
    },
    components: {
      Invite
    }
  }
</script>

<style lang="sass" scoped>
  .drop-title
    font-size: 13px
    font-weight: bold
    border-bottom: 1px solid #dddfe2
    padding-bottom: 10px
    margin-bottom: 10px

  .actions
    margin: 14px 0
    float: right

  .drop
    position: relative
    width: 40px
    display: inline-block
    vertical-align: middle

    &:not(:first-child)
      margin-left: 15px

    &.chats
      width: 26px
      margin-left: 5px

      .drop-inner::after
        right: 5px

    &.notifications
      width: 24px
      margin-left: 13px

      .drop-inner::after
        right: 3px

    &.options
      width: 20px

      .drop-inner
        width: 150px

        &::after
          right: 2px

  .drop-inner
    width: 300px
    background: #FFF
    padding: 15px 0
    position: absolute
    z-index: 3
    top: 44px
    right: 0
    display: none
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.24)
    -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.24)
    -ms-box-shadow: 0 0 1px rgba(0, 0, 0, 0.24)
    -o-box-shadow: 0 0 1px rgba(0, 0, 0, 0.24)
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.24)

    &::after
      content: ''
      border-left: 10px solid transparent
      border-right: 10px solid transparent
      border-bottom: 15px solid #fff
      position: absolute
      top: -15px
      right: 13px

    &.show
      display: block

  .btn-action
    cursor: pointer
    color: #531f15
    position: relative

    &.dropdownOpen
      color: #fff

    i
      font-size: 25px

    .count
      display: flex
      position: absolute
      right: -5px
      top: -10px
      background-color: #4267b2
      border-radius: 2px
      color: #fff
      padding: 1px 3px
      background-clip: padding-box
      display: inline-block
      font-family: 'helvetica neue', Helvetica, Arial, sans-serif
      font-size: 10px
      -webkit-font-smoothing: subpixel-antialiased
      line-height: 1.3
      min-height: 13px

  .options-container
    padding: 0 20px

  .options-item
    cursor: pointer

    &:hover
      color: #e44d3a

  .no-invites
    padding: 20px 0
    font-size: 14px

</style>
