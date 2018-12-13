<template>
  <Panel>
    <span slot="header">Carrinho de compras</span>

    <div v-if="items.length">
      <CartItem v-for="item in items" :key="item" :item="item"/>
    </div>

    <div v-else>
      <i class="fa fa-cart-plus notfound"></i>

      <div class="notfound-msg">
        <span class="notfound-title">
          Carrinho de compras vazio!
        </span>

        <span class="notfound-tip">
          Seu carrinho de compras está vazio, adicione itens nele.
        </span>
      </div>
    </div>

    <div slot="footer" class="btn-continue" v-if="items.length">
      <div class="infos">
        Total: <span class="t-primary">{{ total | currency }}</span>
      </div>
      <hr>
      <button class="btn btn-success" @click="goToShipping()">Continuar</button>
    </div>
  </Panel>
</template>

<script>
  import { mapFields } from 'vuex-map-fields'
  import Panel from '@/components/Template/Panel'
  import CartItem from '@/components/Checkout/CartItem'

  export default {
    methods: {
      goToShipping () {
        this.$router.push('/checkout/shipping')
      }
    },
    computed: {
      ...mapFields({
        items: 'checkout.items',
        total: 'checkout.totalPrice'
      })
    },
    components: {
      Panel,
      CartItem
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

  .btn-continue
    text-align: right

  .infos
    display: block
    margin-bottom: 20px
    font-size: 18px
</style>
