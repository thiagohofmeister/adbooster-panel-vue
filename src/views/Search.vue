<template>
  <Panel>
    <Loader :loading="loading"/>
    <div slot="header">
      Buscando por "{{ search }}"
    </div>

    <UserCard v-for="user in users" :key="user" :user="user" @change="find"/>

    <div v-if="!users.length" class="text-center">
      Nenhum usuário encontrado.
    </div>
  </Panel>
</template>

<script>
  import api from '@/api'
  import Panel from '@/components/Template/Panel'
  import UserCard from '@/components/Search/UserCard'
  import Loader from '@/components/Template/Loader'

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

        api.findUsers(this.search)
          .then(result => {
            const { items } = result

            this.users = items
          })
          .catch(() => { this.users = [] })
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
      Loader
    }
  }
</script>

<style scoped>

</style>
