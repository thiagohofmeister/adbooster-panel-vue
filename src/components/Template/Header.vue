<template>
  <header>
    <div class="container">
      <div class="header-data">
        <div class="logo">
          <a href="index.html" title=""><img src="/static/images/logo.png" alt=""></a>
        </div>

        <div class="search-bar">
          <form>
            <input type="text" name="search" placeholder="Search..."/>
            <button type="submit"><i class="la la-search"></i></button>
          </form>
        </div>

        <MenuTopBar/>

        <UserTopBar/>
      </div>
    </div>
  </header>
</template>

<script>
import MenuTopBar from '@/components/Template/MenuTopBar'
import UserTopBar from '@/components/Template/UserTopBar'

export default {
  components: {
    MenuTopBar,
    UserTopBar
  }
}
</script>

<style scoped>

</style>
