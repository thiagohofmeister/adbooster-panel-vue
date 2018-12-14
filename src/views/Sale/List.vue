<template>
  <Panel>
    <Loader :loading="fetching"/>
    <span slot="header">Minhas vendas</span>

    <SaleItem v-for="item in sales" :key="item" :order="item"/>

    <div v-if="!sales.length">
      <i class="fa fa-sad-tear notfound"></i>

      <div class="notfound-msg">
      <span class="notfound-title">
        Você ainda não realizou nenhuma venda.
      </span>

        <span class="notfound-tip">
        Que tal fazer tua primeira venda agora?
      </span>
      </div>
    </div>
  </Panel>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import Panel from '@/components/Template/Panel'
  import Loader from '@/components/Template/Loader'
  import SaleItem from '@/components/Sale/List/Item'

  export default {
    mounted () {
      if (!this.sales.length) {
        this.fetchSales(this.user._id.$oid)
      }
    },
    methods: {
      ...mapActions('sales', [
        'fetchSales'
      ])
    },
    computed: {
      ...mapFields({
        user: 'user.user',
        fetching: 'sales.fetching',
        sales: 'sales.sales'
      })
    },
    components: {
      Panel,
      Loader,
      SaleItem
    }
  }
</script>

<style lang="sass" scoped>
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
