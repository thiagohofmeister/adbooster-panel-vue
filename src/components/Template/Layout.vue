<template>
  <div class="App">
    <Loader :loading="loading"/>
    <div v-if="!loading">
      <SiteHeader/>

      <main>
        <div class="container-fluid">
          <div class="row">

            <SidebarLeft/>

            <div class="col-lg-6 col-md-8 no-pd">
              <router-view/>
            </div>

            <SidebarRight/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import { mapFields } from 'vuex-map-fields'
import { mapActions } from 'vuex'
import SiteHeader from '@/components/Template/Header'
import SidebarLeft from '@/components/Template/SidebarLeft'
import SidebarRight from '@/components/Template/SidebarRight'
import Cookie from 'vue-cookie'
import Loader from '@/components/Template/Loader'

export default {
  data: () => ({
    loading: true
  }),
  mounted () {
    this.validateAuth()
  },
  methods: {
    ...mapActions('user', [
      'addUser'
    ]),
    validateAuth () {
      const token = Cookie.get('token')

      if (token === null) {
        this.$router.push('/signin')
      }

      if (!this.user) {
        this.loading = true

        api.getUser(token)
          .then(result => this.addUser(result))
          .catch(() => this.$router.push('/signin'))
          .then(() => { this.loading = false })
      } else {
        this.loading = false
      }
    }
  },
  computed: {
    ...mapFields({
      user: 'user.user'
    })
  },
  watch: {
    '$route' () {
      this.validateAuth()
    }
  },
  components: {
    SiteHeader,
    SidebarLeft,
    SidebarRight,
    Loader
  }
}
</script>
