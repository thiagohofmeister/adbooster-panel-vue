<template>
  <div class="comment-section">
    <div class="plus-ic">
      <i class="la la-plus"></i>
    </div>

    <div class="comment-sec">
      <ul>
        <Comment/>

        <Comment/>
      </ul>
    </div>

    <New/>
  </div>
</template>

<script>
  export default {
    name: 'List'
  }
</script>

<style scoped>

</style>
