<template>
  <div>
    <VueGallery :images="images" :index="index" @close="index = null"></VueGallery>
    <div class="image-container" v-for="(image, imageIndex) in images" :key="imageIndex" @click="index = imageIndex">
      <div class="image" :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"></div>
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery'

  export default {
    data: () => ({
      index: null
    }),
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    components: {
      VueGallery
    }
  }
</script>

<style lang="sass" scoped>
  .image-container
    display: inline-block
    vertical-align: top
    cursor: zoom-in
    padding: 10px
    border: 1px solid #ebebeb
    margin: 5px

  .image
    background-size: cover
    background-repeat: no-repeat
    background-position: center center

</style>
