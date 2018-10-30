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

    <NewComment/>
  </div>
</template>

<script>
import Comment from '@/components/Template/TimeLine/Comments/Comment'
import NewComment from '@/components/Template/TimeLine/Comments/NewComment'

export default {
  components: {
    Comment,
    NewComment
  }
}
</script>

<style scoped>

</style>
