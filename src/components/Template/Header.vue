<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-1 text-center">
          <a href="/" title="" class="logo"><img src="/static/images/logo.png" alt=""></a>
        </div>

        <div class="col-4">
          <div class="search-bar">
            <form>
              <input type="text" name="search" placeholder="Encontrar amigos"/>
              <button type="submit"><i class="la la-search"></i></button>
            </form>
          </div>
        </div>

       <!-- <div class="col-3">
          <UserTopBar/>
        </div>-->

        <div class="col-4">
          <MenuTopBar/>
        </div>
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

<style lang="sass" scoped>
  .logo
    width: 40px
    margin-right: 14px
    margin-top: 10px
    display: inline-block

  .logo.pd-btm
    padding-bottom: 10px

  .search-bar.st2
    float: right

  .search-bar
    margin: 10px 0

  .search-bar form
    width: 100%
    position: relative

  .search-bar form input
    width: 100%
    background-color: #fff
    height: 38px
    color: #b2b2b2
    font-size: 12px
    border: 0
    padding: 0 10px

  .search-bar form button
    position: absolute
    top: 0
    right: 0
    background-color: #efefef
    width: 38px
    height: 100%
    border: 0

  .search-bar form button i
    color: #e44d3a
    font-size: 20px
    font-weight: bold


</style>
