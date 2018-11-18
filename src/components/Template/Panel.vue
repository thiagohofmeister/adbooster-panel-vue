<template>
  <div class="panel">
    <div class="panel-header" v-if="$slots['header']">
      <slot name="header"/>
    </div>

    <div class="panel-body">
      <slot/>
    </div>

    <div class="panel-footer" v-if="$slots['footer']">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Panel'
  }
</script>

<style lang="sass" scoped>
  .panel
    background-color: #fff
    border-left: 1px solid #e4e4e4
    border-right: 1px solid #e4e4e4
    border-bottom: 1px solid #e4e4e4
    margin-bottom: 20px

  .panel-header
    width: 100%
    position: relative
    padding: 20px 20px 15px 20px
    border-bottom: 1px solid #dddfe2
    margin-bottom: 20px

  .panel-body
    width: 100%
    padding: 0 20px 20px 20px
    border-bottom: 1px solid #e5e5e5

  .panel-footer
    width: 100%
    padding: 15px 20px
    border-bottom: 1px solid #e4e4e4
</style>
