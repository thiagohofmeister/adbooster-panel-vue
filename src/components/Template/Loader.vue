<template>
  <div v-if="loading" class="loader" v-bind:class="overlayClass">
    <div class="content" v-bind:class="classContent">
      <ScaleLoader :loading="loading" :color="color" :size="size" v-bind:style="loaderStyle"/>
      <span v-if="label" class="label">{{ label }}</span>
    </div>
  </div>
</template>

<script>
  import { ScaleLoader } from 'vue-spinner/dist/vue-spinner.min.js'

  export default {
    props: {
      loading: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: '20px'
      },
      color: {
        type: String,
        default: '#e44d3a'
      },
      label: {
        type: String,
        required: false
      },
      overlay: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        loaderStyle: {
          height: this.size
        }
      }
    },
    computed: {
      classContent () {
        return {
          'withLabel': this.label,
          'withoutLabel': !this.label,
          'loader-overlay': this.overlay
        }
      },
      overlayClass () {
        return {
          'loader-overlay': this.overlay
        }
      }
    },
    components: {
      ScaleLoader
    }
  }
</script>

<style lang="sass" scoped>
  .content
    width: 100%
    margin: auto
    height: 40px
    text-align: center
    position: absolute
    bottom: 0

    &:not(.loader-overlay)
      left: 0
      right: 0
      margin-bottom: 20px

    &.loader-overlay
      top: 0
      bottom: 0

  .withoutLabel
    height: 37px

  .v-spinner
    width: 90px
    margin: auto
    display: block
    vertical-align: middle

  .label
    display: block
    vertical-align: middle
    font-size: 13px
    font-weight: bold
    opacity: 0.5
    line-height: 50px

  div.loader
    display: block
    width: 100%

    &.loader-overlay
      top: 0
      left: 0
      height: 100%
      position: absolute
      background: #FFF
      z-index: 2147483646
</style>

