<template>
  <li>
    <div class="comment-list">
      <div class="bg-img">
        <img src="http://via.placeholder.com/40x40" alt=""/>
      </div>
      <div class="comment">
        <h3>John Doe</h3>
        <span><img src="/static/images/clock.png" alt=""/> 3 min ago</span>
        <p>Lorem ipsum dolor sit amet, </p>
        <a href="#" title="" class="active"><i class="fa fa-reply-all"></i>Reply</a>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Comment'
}
</script>

<style scoped>

</style>
