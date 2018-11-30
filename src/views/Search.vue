<template>
  <div>
    <Loader :loading="loading"/>

    <div class="col-12" v-if="users.length">
      <Panel>
        <div slot="header">
          <i class="fa fa-user"></i> Pessoas
        </div>

        <UserCard v-for="user in users" :key="user" :user="user" @change="find"/>
      </Panel>
    </div>

    <div v-if="announcements.length">
      <div class="col-12">
        <h3>Anúncios de amigos</h3>
      </div>

      <Announcement v-if="!fetching" v-for="announcement in announcements" :key="announcement" :announcement="announcement"/>
    </div>

    <Panel v-if="!users.length && !announcements.length">
      <i class="fa fa-sad-tear notfound"></i>

      <div class="notfound-msg">
        <span class="notfound-title">
          Não foi possível encontrar nenhum resultado para <strong>{{ search }}</strong>
        </span>

        <span class="notfound-tip">
          Procurando pessoas ou anúncios? Experimente digitar um nome, título ou palavras diferentes.
        </span>
      </div>
    </Panel>
  </div>
</template>

<script>
  import api from '@/api'
  import Panel from '@/components/Template/Panel'
  import UserCard from '@/components/Search/UserCard'
  import Loader from '@/components/Template/Loader'
  import Announcement from '@/components/TimeLine/Announcement'

  export default {
    data: () => ({
      users: [],
      loading: false
    }),
    props: {
      search: {
        type: String,
        required: true
      }
    },
    mounted () {
      this.find()
    },
    methods: {
      find () {
        this.loading = true

        api.search(this.search)
          .then(result => {
            const { items } = result

            this.users = items.users
            this.announcements = items.announcements
          })
          .catch(() => {
            this.users = []
            this.announcements = []
          })
          .then(() => { this.loading = false })
      }
    },
    watch: {
      search () {
        this.find()
      }
    },
    components: {
      Panel,
      UserCard,
      Loader,
      Announcement
    }
  }
</script>

<style lang="sass" scoped>
  h3
    font-size: 16px
    margin: 30px 20px 20px

  i.notfound
    font-size: 90px
    margin-right: 20px
    color: #531f15

  .notfound-msg
    display: inline-block
    vertical-align: top

  .notfound-title
    font-size: 14px
    color: #333
    line-height: 16px
    margin-bottom: 20px
    display: block

    strong
      font-weight: bold
      display: block

  .notfound-tip
    color: #90949c

</style>
