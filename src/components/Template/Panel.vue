<template>
  <div class="panel">
    <slot/>
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
</style>
