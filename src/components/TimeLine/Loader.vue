<template>
  <div class="col-12">
    <div class="loader" v-for="i in 5">
      <ContentLoader secondaryColor="#e44d3a" :speed="1">
        <rect x="55" y="5" rx="4" ry="4" width="117" height="6.4" />
        <rect x="56" y="20" rx="3" ry="3" width="85" height="6.4" />
        <rect x="1" y="54" rx="3" ry="3" width="350" height="6.4" />
        <rect x="1" y="74" rx="3" ry="3" width="380" height="6.4" />
        <rect x="1" y="94" rx="3" ry="3" width="201" height="6.4" />
        <circle cx="21.9" cy="21.9" r="21.9" />
      </ContentLoader>
    </div>
  </div>
</template>

<script>
  import { ContentLoader } from 'vue-content-loader'

  export default {
    components: {
      ContentLoader
    }
  }
</script>

<style lang="sass" scoped>
  .loader
    background: #fff
    padding: 15px
    margin: 20px 0
    display: block
</style>
