<template>
  <div class="actions">
    <div class="drop friend-invites">
      <span class="btn-action" v-bind:class="{ active: flags.showFriendInvites }" @click="toggleFriendInvites">
        <i class="fa fa-user-friends"></i>
      </span>

      <div class="drop-inner" v-bind:class="{ show: flags.showFriendInvites }" aria-labelledby="dropdownMenuButton">
        Solicitações
      </div>
    </div>

    <div class="drop chats">
      <span class="btn-action" v-bind:class="{ active: flags.showChats }" @click="toggleChats">
        <i class="fa fa-comment"></i>
      </span>

      <div class="drop-inner" v-bind:class="{ show: flags.showChats }" aria-labelledby="dropdownMenuButton">
        Conversas
      </div>
    </div>

    <div class="drop notifications">
      <span class="btn-action" v-bind:class="{ active: flags.showNotifications }" @click="toggleNotifications">
        <i class="fa fa-bell"></i>
      </span>

      <div class="drop-inner" v-bind:class="{ show: flags.showNotifications }" aria-labelledby="dropdownMenuButton">
        Notificações
      </div>
    </div>

    <div class="drop options">
      <span class="btn-action" v-bind:class="{ active: flags.showOptions }" @click="toggleOptions">
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

  export default {
    data: () => ({
      flags: {
        showFriendInvites: false,
        showChats: false,
        showNotifications: false,
        showOptions: false
      }
    }),
    methods: {
      ...mapActions('user', [
        'logout'
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
      }
    }
  }
</script>

<style lang="sass" scoped>
  .actions
    margin: 14px 0

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

  .drop-inner
    width: 120px
    background: #FFF
    padding: 15px
    position: absolute
    top: 44px
    right: 0
    display: none

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

    &.active
      color: #fff

    i
      font-size: 25px

  .options-container

    .options-item
      cursor: pointer

      &:hover
        color: #e44d3a

</style>
