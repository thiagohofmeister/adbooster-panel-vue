<template>
  <div>
    <Loader :loading="fetching"/>
    <Panel v-if="!fetching">
      <span slot="header">Meus pedidos</span>

      <Item v-for="order in orders" :key="order" class="orders" :order="order"/>

      <div v-if="!orders.length">
        <i class="fa fa-sad-tear notfound"></i>

        <div class="notfound-msg">
        <span class="notfound-title">
          Você ainda não realizou nenhuma compra.
        </span>

        <span class="notfound-tip">
          Que tal fazer tua primeira compra agora?
        </span>
        </div>
      </div>
    </Panel>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import Panel from '@/components/Template/Panel'
  import Loader from '@/components/Template/Loader'
  import Item from '@/components/Order/List/Item'

  export default {
    mounted () {
      if (!this.orders.length) {
        this.fetchOrders()
      }
    },
    methods: {
      ...mapActions('orders', [
        'fetchOrders'
      ])
    },
    computed: {
      ...mapFields({
        fetching: 'orders.fetching',
        orders: 'orders.orders'
      })
    },
    components: {
      Panel,
      Loader,
      Item
    }
  }
</script>

<style lang="sass" scoped>
  .orders
    border-bottom: 1px solid #dddfe2

    &:last-child
      border: none

  i.notfound
    font-size: 90px
    margin-right: 20px
    color: #531f15

  .notfound-msg
    display: inline-block
    vertical-align: top

  .notfound-title
    font-size: 25px
    color: #333
    line-height: 16px
    margin-bottom: 20px
    display: block

  .notfound-tip
    color: #90949c
</style>
