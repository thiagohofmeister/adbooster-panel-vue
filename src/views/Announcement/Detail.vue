<template>
  <Panel v-if="announcement">
    <div slot="header" class="usy-dt">
      <img :src="announcement.sharedBy.image" alt=""/>
      <div class="usy-name">
        <h3>{{ announcement.sharedBy.name }}</h3>
        <span><img src="/static/images/clock.png" alt=""/> {{ announcement.impulseDate | moment('from', 'now') }}</span>
      </div>
    </div>

    <h1 class="title">{{ announcement.title }}</h1>

    <Gallery :images="announcement.images" class="images"/>

    <p class="description">{{ announcement.description }}</p>

    <div class="prices">
      <span class="previous-price">
        {{ announcement.previousPrice | currency }}
      </span>

      <span>
        {{ announcement.previousPrice | currency }}
      </span>
    </div>

    <div slot="footer" class="actions" v-if="!isOwner">
      <span @click="buy()" class="btn"><i class="fa fa-shopping-cart"></i> Comprar</span>
      <ImpulseButton :announcement="announcement"/>
    </div>
  </Panel>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import Panel from '@/components/Template/Panel'
  import Gallery from '@/components/Template/Gallery'
  import ImpulseButton from '@/components/Announcement/ImpulseButton'

  export default {
    props: {
      code: {
        type: String,
        required: true
      },
      sharedCode: {
        type: String,
        required: true
      }
    },
    methods: {
      ...mapActions('checkout', [
        'addItemToCart'
      ]),
      ...mapActions('user', [
        'addAnnouncement'
      ]),
      buy () {
        this.addItemToCart(this.announcement)
        this.$router.push('/checkout/cart')
      }
    },
    computed: {
      ...mapFields({
        user: 'user.user'
      }),
      ...mapGetters('user', [
        'getAnnouncement'
      ]),
      isOwner () {
        return this.user._id.$oid === this.announcement.sharedBy._id.$oid
      },
      announcement () {
        let announcement = this.getAnnouncement(this.code, this.sharedCode)

        if (announcement === undefined) {
          this.addAnnouncement({
            code: this.code,
            sharedCode: this.sharedCode
          })
            .then(() => {
              announcement = this.getAnnouncement(this.code, this.sharedCode)
            })
            .catch(() => {})
        }

        return announcement
      }
    },
    components: {
      Panel,
      Gallery,
      ImpulseButton
    }
  }
</script>

<style lang="sass" scoped>
  .title
    font-size: 25px
    font-weight: bold
    margin: 20px 0
    display: block

  .images
    margin-bottom: 20px

  .description
    font-size: 15px

  .prices
    margin: 10px 0

    .previous-price
      text-decoration: line-through
      color: #e1e1e1
      margin-bottom: 10px
      font-size: 16px

    span
      display: block
      color: #000000
      font-size: 20px
      font-weight: 600

  .actions

    & > span
      color: #b2b2b2
      font-size: 14px
      cursor: pointer
      vertical-align: middle

      &:not(:first-child)
        margin-left: 20px

      &:hover
        color: #e44d3a

  .actions > span i
    font-size: 20px
    margin-right: 7px
    position: relative
    top: 3px

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
</style>
