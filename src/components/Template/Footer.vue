<template>
  <div class="col-12">
    <div class="tags-sec">
      <ul>
        <li><a href="#" title="">Help Center</a></li>
        <li><a href="#" title="">About</a></li>
        <li><a href="#" title="">Privacy Policy</a></li>
        <li><a href="#" title="">Community Guidelines</a></li>
        <li><a href="#" title="">Cookies Policy</a></li>
        <li><a href="#" title="">Career</a></li>
        <li><a href="#" title="">Language</a></li>
        <li><a href="#" title="">Copyright Policy</a></li>
      </ul>
      <div class="cp-sec">
        <img src="/static/images/logo2.png" alt=""/>
        <p><img src="/static/images/cp.png" alt=""/>Copyright 2018</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass" scoped>
  .tags-sec
    background-color: #fff
    padding: 25px 5px
    margin-bottom: 20px
    border-left: 1px solid #e5e5e5
    border-right: 1px solid #e5e5e5
    border-bottom: 1px solid #e5e5e5

  .tags-sec ul
    width: 100%
    text-align: center

  .tags-sec ul li
    display: inline-block
    border-right: 1px solid #b2b2b2
    padding: 0 7px
    margin-bottom: 15px

  .tags-sec ul li:nth-child(3),
  .tags-sec ul li:nth-child(5),
  .tags-sec ul li:nth-child(8)
    border-right: 0

  .tags-sec ul li a
    display: inline-block
    color: #b2b2b2
    font-size: 13px
    font-weight: 500

  .tags-sec ul li a:hover
    color: #e44d3a

  .cp-sec
    width: 100%
    margin-top: 5px
    padding: 0 13px

  .cp-sec > img
    margin-top: 3px

  .cp-sec p
    float: right
    color: #b2b2b2
    font-size: 14px
    font-weight: 500

  .cp-sec p img
    display: inline-block
    position: relative
    top: 3px
    padding-right: 5px

</style>
