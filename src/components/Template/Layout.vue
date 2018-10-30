<template>
  <div class="App">
    <Header/>

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
import Header from '@/components/Template/Header'
import SidebarLeft from '@/components/Template/SidebarLeft'
import SidebarRight from '@/components/Template/SidebarRight'

export default {
  components: {
    Header,
    SidebarLeft,
    SidebarRight
  }
}
</script>
