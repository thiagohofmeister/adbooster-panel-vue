<template>
  <div class="col-12">
    <div class="post-topbar">
      <div class="row">
        <div class="col-2">
          <div class="user-picy">
            <img src="http://via.placeholder.com/100x100" alt=""/>
          </div>
        </div>

        <div class="col-4 el-col-md-offset-12">
          <div class="post-st">
            <ul>
              <li><a class="post_project" href="#" title="">Post a Project</a></li>
              <li><a class="post-jb active" href="#" title="">Post a Job</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateNewAnnouncement'
}
</script>

<style lang="sass" scoped>
  .post-topbar
    padding: 23px 20px
    background-color: #fff
    border-top: 4px solid #e44d3a
    border-left: 1px solid #e4e4e4
    border-bottom: 1px solid #e4e4e4
    border-right: 1px solid #e4e4e4
    -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.24)
    -moz-box-shadow: 0 0 1px rgba(0,0,0,0.24)
    -ms-box-shadow: 0 0 1px rgba(0,0,0,0.24)
    -o-box-shadow: 0 0 1px rgba(0,0,0,0.24)
    box-shadow: 0 0 1px rgba(0,0,0,0.24)
    margin-bottom: 20px

  .post-st
    margin-top: 5px
    text-align: right

  .post-st ul li
    display: inline-block
    margin-right: 6px

  .post-st ul li:last-child
    margin-right: 0

  .post-st ul li a
    color: #b2b2b2
    font-size: 16px
    display: inline-block
    background-color: #e5e5e5
    height: 40px
    padding: 0 15px
    line-height: 40px
    font-weight: 500

  .post-st ul li a:hover,
  .post-st ul li a.active
    background-color: #e44d3a
    color: #fff

</style>
