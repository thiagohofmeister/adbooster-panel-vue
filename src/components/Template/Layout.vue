<template>
  <div class="App">
    <SiteHeader/>

    <main>
      <div class="main-section">
        <div class="container">
          <div class="main-section-data">
            <div class="row">

              <SidebarLeft/>

              <div class="col-lg-6 col-md-8 no-pd">
                <div class="main-ws-sec">
                  <router-view/>
                </div>
              </div>

              <SidebarRight/>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SiteHeader from '@/components/Template/Header'
import SidebarLeft from '@/components/Template/SidebarLeft'
import SidebarRight from '@/components/Template/SidebarRight'
import Cookie from 'vue-cookie'

export default {
  mounted () {
    this.validateAuth()
  },
  methods: {
    validateAuth () {
      const token = Cookie.get('token')

      if (token === null) {
        this.$router.push('/signin')
      }
    }
  },
  watch: {
    '$route' () {
      this.validateAuth()
    }
  },
  components: {
    SiteHeader,
    SidebarLeft,
    SidebarRight
  }
}
</script>
