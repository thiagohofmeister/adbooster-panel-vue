<template>
  <div>
    <Panel>
      <div slot="header">
        Buscando por "{{ search }}"
      </div>

      <UserCard v-for="user in users" :key="user" :user="user" @change="find"/>
    </Panel>
  </div>
</template>

<script>
  import api from '@/api'
  import Panel from '@/components/Template/Panel'
  import UserCard from '@/components/Search/UserCard'

  export default {
    data: () => ({
      users: []
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
        api.findUsers(this.search)
          .then(result => {
            const { items } = result

            this.users = items
          })
      }
    },
    watch: {
      search () {
        this.find()
      }
    },
    components: {
      Panel,
      UserCard
    }
  }
</script>

<style scoped>

</style>
