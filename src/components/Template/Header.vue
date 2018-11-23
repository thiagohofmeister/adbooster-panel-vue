<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-1 text-center">
          <a href="/" title="" class="logo"><img src="/static/images/logo/logo-white-icn.png" alt=""></a>
        </div>

        <div class="col-4">
          <div class="search-bar">
            <form>
              <FormGroup :columns="0">
                <input type="text" v-model="search" name="search" placeholder="Encontrar amigos"/>
                <button @click="findUsers"><i class="la la-search"></i></button>
              </FormGroup>
            </form>
          </div>
        </div>

       <div class="col-3" v-if="false">
          <UserTopBar/>
        </div>

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
  import FormGroup from '@/components/Template/FormGroup'

  export default {
    data: () => ({
      search: null
    }),
    methods: {
      findUsers (e) {
        if (!this.search) {
          return
        }

        this.$router.push({ name: 'search', params: { search: this.search } })

        e.preventDefault()
      }
    },
    components: {
      MenuTopBar,
      UserTopBar,
      FormGroup
    }
  }
</script>

<style lang="sass" scoped>
  .logo
    width: 40px
    margin-right: 14px
    margin-top: 10px
    display: inline-block

    img
      width: 40px

  .logo.pd-btm
    padding-bottom: 10px

  .search-bar.st2
    float: right

  .search-bar
    margin: 10px 0

  .search-bar
    width: 100%
    position: relative

  .search-bar input
    width: 100%
    background-color: #fff
    height: 38px
    color: #b2b2b2
    font-size: 12px
    border: 0
    padding: 0 10px

  .search-bar button
    position: absolute
    top: 0
    right: 0
    background-color: #efefef
    width: 38px
    height: 100%
    border: 0

  .search-bar button i
    color: #e44d3a
    font-size: 20px
    font-weight: bold

  .form-group
    margin-bottom: 0

</style>
