<template>
  <div class="col-12">
    <div class="posty">
      <div class="post-bar">

        <div class="post_topbar">
          <div class="row">

            <div class="col-md-12">
              <div class="usy-dt">
                <img :src="announcement.sharedBy.image" alt=""/>
                <div class="usy-name">
                  <h3>{{ announcement.sharedBy.name }}</h3>
                  <span><img src="/static/images/clock.png" alt=""/> {{ announcement.impulseDate | moment('from', 'now') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="job_descp">
          <div class="img-container">
            <img :src="announcement.images[0]" alt="">
          </div>

          <h3>{{ announcement.title }}</h3>

          <ul class="job-dt">
            <li><span class="previous-price">{{ announcement.previousPrice | currency }}</span></li>
            <li><span>{{ announcement.currentPrice | currency }}</span></li>
          </ul>
        </div>

        <div class="job-status-bar">
          <span @click="buy()"><i class="la la-shopping-cart"></i> Comprar</span>
          <span @click="impulse()" v-if="!isOwner" class="btn" v-bind:class="{ 'is-loading': loading }"><i v-bind:class="{ far: !isImpulsed, fa: isImpulsed }" class="fa-heart"></i> {{ isImpulsed ? 'Impulsionado' : 'Impulsionar' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api'
  import { mapFields } from 'vuex-map-fields'
  import { mapActions } from 'vuex'
  import CommentsList from '@/components/TimeLine/Comments/List'

  export default {
    data: () => ({
      isImpulsed: false,
      loading: false
    }),
    props: {
      announcement: {
        type: Object,
        required: true
      }
    },
    mounted () {
      this.checkImpulsed()
    },
    methods: {
      ...mapActions('user', [
        'addImpulseAnnouncement'
      ]),
      buy () {

      },
      impulse () {
        this.loading = true

        const owner = this.user._id.$oid
        const origin = this.announcement.sharedBy._id.$oid

        const impulse = {
          announcementId: this.announcement._id.$oid,
          impulse: {
            owner: this.user._id.$oid,
            origin: owner === origin ? null : origin
          }
        }

        let result = null
        if (this.isImpulsed) {
          result = api.removeImpulseAnnouncement(impulse)
        } else {
          result = api.addImpulseAnnouncement(impulse)
        }

        result
          .then(announcement => {
            this.announcement.impulses = announcement.impulses
            this.addImpulseAnnouncement(impulse)
          })
          .catch(() => {})
          .then(() => {
            this.checkImpulsed()
            this.loading = false
          })
      },
      checkImpulsed () {
        for (let i in this.announcement.impulses) {
          const impulse = this.announcement.impulses[i]

          if (impulse.owner === this.user._id.$oid && impulse.origin === this.announcement.sharedBy._id.$oid) {
            this.isImpulsed = true
            return
          }
        }

        this.isImpulsed = false
      }
    },
    computed: {
      ...mapFields({
        user: 'user.user'
      }),
      isOwner () {
        return this.user._id.$oid === this.announcement.sharedBy._id.$oid
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

  .img-container
    margin-bottom: 15px
    text-align: center

    img
      max-width: 100%
      max-height: 270px

  .usy-dt

  .usy-dt > img
    width: 50px
    -webkit-border-radius: 100px
    -moz-border-radius: 100px
    -ms-border-radius: 100px
    -o-border-radius: 100px
    border-radius: 100px
    margin-right: 10px
    display: inline-block
    vertical-align: middle

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
    display: inline-block
    vertical-align: middle

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

    h3
      color: #000000
      font-size: 22px
      font-weight: 600
      margin-bottom: 20px

  .job-dt
    width: 100%

  .job-dt li
    margin-right: 15px

    &:first-child
      margin-bottom: 10px

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
    font-size: 20px
    font-weight: 600

    &.previous-price
      text-decoration: line-through
      color: #e1e1e1
      font-size: 16px

  .job_descp > p
    color: #686868
    font-size: 16px
    line-height: 24px
    margin-bottom: 20px

  .job_descp > p a
    color: #e44d3a
    font-weight: 600

  .job-status-bar
    width: 100%
    padding: 15px 20px

  .like-com li
    display: inline-block
    margin-right: 15px
    vertical-align: top

  .like-com li a
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


  .job-status-bar > span
    color: #b2b2b2
    font-size: 14px
    cursor: pointer

    &:not(:first-child)
      margin-left: 20px

    &:hover
      color: #e44d3a

  .job-status-bar > span i
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
