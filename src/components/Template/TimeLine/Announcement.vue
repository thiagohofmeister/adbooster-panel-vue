<template>
  <div class="col-12">
    <div class="posty">
      <div class="post-bar">

        <div class="post_topbar">
          <div class="row">

            <div class="col-md-8">
              <div class="usy-dt">
                <img :src="announcement.creator.image" alt=""/>
                <div class="usy-name">
                  <h3>{{ announcement.creator.name }}</h3>
                  <span><img src="/static/images/clock.png" alt=""/> {{ announcement.updated | moment('from', 'now') }}</span>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="ed-opts">
                <a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
                <ul class="ed-options">
                  <li><a href="#" title="">Edit Post</a></li>
                  <li><a href="#" title="">Unsaved</a></li>
                  <li><a href="#" title="">Unbid</a></li>
                  <li><a href="#" title="">Close</a></li>
                  <li><a href="#" title="">Hide</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div class="job_descp">
          <h3>{{ announcement.title }}</h3>
          <ul class="job-dt">
            <li><a href="#" title="">Preço</a></li>
            <li><span class="previous-price">{{ announcement.previousPrice | currency }}</span></li>
            <li><span>{{ announcement.currentPrice | currency }}</span></li>
          </ul>
          <p>
            {{ announcement.description }}
          </p>
        </div>
        <div class="job-status-bar">
          <ul class="like-com">
            <li>
              <a href="#"><i class="la la-heart"></i> Impulsionar</a>
              <img src="/static/images/liked-img.png" alt=""/>
              <span>{{ announcement.impulses.length }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentsList from '@/components/Template/TimeLine/Comments/List'

export default {
  props: {
    announcement: {
      type: Object,
      required: true
    }
  },
  components: {
    CommentsList
  }
}
</script>

<style lang="sass" scoped>
  .posty
    width: 100%
    border-left: 1px solid #e4e4e4
    border-right: 1px solid #e4e4e4

  .posty .job-status-bar
    border-bottom: 1px solid #e4e4e4

  .post-bar
    width: 100%
    background-color: #fff
    border-left: 1px solid #e4e4e4
    border-right: 1px solid #e4e4e4
    border-bottom: 1px solid #e4e4e4
    margin-bottom: 20px

  .post_topbar
    width: 100%
    position: relative
    padding: 20px 20px 15px 20px

  .usy-dt

  .usy-dt > img
    width: 50px
    -webkit-border-radius: 100px
    -moz-border-radius: 100px
    -ms-border-radius: 100px
    -o-border-radius: 100px
    border-radius: 100px
    margin-right: 10px

  .ed-opts
    position: relative
    top: 7px

  .ed-opts > a
    color: #b2b2b2
    font-size: 30px
    float: right
    position: relative
    left: 13px

  .ed-options
    position: absolute
    top: 100%
    right: 0
    width: 130px
    background-color: #fff
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.28)
    -moz-box-shadow: 0 0 10px rgba(0,0,0,0.28)
    -ms-box-shadow: 0 0 10px rgba(0,0,0,0.28)
    -o-box-shadow: 0 0 10px rgba(0,0,0,0.28)
    box-shadow: 0 0 10px rgba(0,0,0,0.28)
    padding: 20px
    opacity: 0
    visibility: hidden
    z-index: 0

  .ed-options.active
    opacity: 1
    visibility: visible
    z-index: 999

  .ed-options li
    width: 100%
    margin-bottom: 15px

  .ed-options li:last-child
    margin-bottom: 0

  .ed-options li a
    color: #686868
    font-size: 14px
    font-weight: 600

  .ed-opts > a:hover
    color: #e44d3a

  .usy-name
    margin-left: 10px

  .usy-name h3
    color: #000000
    font-size: 16px
    text-transform: capitalize
    font-weight: 600
    margin-bottom: 6px
    margin-top: 2px

  .usy-name span
    color: #b2b2b2
    font-size: 14px

  .usy-name img
    margin-top: 2px
    margin-right: 6px

  .descp
    margin-top: 3px

  .descp li
    display: inline-block
    margin-right: 15px

  .descp li span
    color: #b2b2b2
    font-size: 14px

  .descp li img
    margin-right: 5px

  .bid_now
    color: #fff
    background-color: #51a5fb
    text-transform: capitalize
    display: inline-block
    height: 30px
    padding: 0 10px
    line-height: 30px
    position: relative
    top: -3px

  .bid_now:hover
    color: #fff

  .job_descp
    width: 100%
    padding: 0 20px 20px 20px
    border-bottom: 1px solid #e5e5e5

  .job_descp h3
    color: #000000
    font-size: 18px
    font-weight: 600
    margin-bottom: 20px

  .job-dt
    width: 100%
    margin-bottom: 22px

  .job-dt li
    display: inline-block
    margin-right: 15px

  .job-dt li a
    color: #fff
    background-color: #53d690
    text-transform: capitalize
    padding: 5px 13px
    -webkit-border-radius: 30px
    -moz-border-radius: 30px
    -ms-border-radius: 30px
    -o-border-radius: 30px
    border-radius: 30px
    display: inline-block
    font-size: 14px
    font-weight: 500

  .job-dt li span
    color: #000000
    font-size: 16px
    font-weight: 600

  .job_descp > p
    color: #686868
    font-size: 16px
    line-height: 24px
    margin-bottom: 20px
    
  .previous-price
    text-decoration: line-through

  .job_descp > p a
    color: #e44d3a
    font-weight: 600

  .job-status-bar
    width: 100%
    padding: 15px 20px

  .like-com li
    display: inline-block
    margin-right: 15px

  .like-com li a
    float: left
    color: #b2b2b2
    font-size: 14px
    margin-top: 6px
    margin-right: 5px

  .like-com li a:hover
    color: #e44d3a

  .like-com li a.active
    color: #e44d3a

  .like-com li a i
    margin-right: 2px
    font-size: 17px
    position: relative
    top: 2px

  .like-com li span
    float: left
    color: #ffffff
    font-size: 13px
    width: 30px
    height: 30px
    background-color: #e44d3a
    line-height: 30px
    -webkit-border-radius: 30px
    -moz-border-radius: 30px
    -ms-border-radius: 30px
    -o-border-radius: 30px
    border-radius: 30px
    text-align: center
    font-weight: 600
    margin-left: -25px

  .like-com li .com
    position: relative
    top: -5px

  .like-com li .com img
    margin-right: 10px


  .job-status-bar > a
    float: right
    color: #b2b2b2
    font-size: 14px
    margin-top: 5px

  .job-status-bar > a i
    font-size: 20px
    margin-right: 7px
    position: relative
    top: 3px

  .no-margin
    margin: 0
    border: 0
    -webkit-border-radius: inherit
    -moz-border-radius: inherit
    -ms-border-radius: inherit
    -o-border-radius: inherit
    border-radius: inherit
</style>
