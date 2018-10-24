<template>
  <div class="App">
    <Header/>

    <main>
      <div class="main-section">
        <div class="container">
          <div class="main-section-data">
            <div class="row">

              <SidebarLeft/>

              <TimeLine/>

              <router-view/>

              <SideBarRight/>

            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SidebarLeft from '@/components/Template/SidebarLeft'

export default {
  components: {
    SidebarLeft
  }
}
</script>
