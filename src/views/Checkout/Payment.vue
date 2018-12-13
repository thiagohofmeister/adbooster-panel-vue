<template>
  <Panel>
    <span slot="header">Pagamento</span>

    <p>
      Você possui <strong>{{ this.user.coins | currency }}</strong> em sua carteira.
      Após finalizar esta compra, você ficará com <strong>{{ this.resultCoins | currency }}</strong>.
    </p>

    <div slot="footer" class="btn-continue">
      <button class="btn" @click="goToBack()">Voltar</button>
      <button class="btn btn-success" @click="goToConfirm()" :disabled="!shippingAddress">Continuar</button>
    </div>
  </Panel>
</template>

<script>
  import Panel from '@/components/Template/Panel'
  import { mapFields } from 'vuex-map-fields'
  import ShippingAddress from '@/components/Checkout/ShippingAddress'

  export default {
    mounted () {
      if (!this.items.length || !this.shippingAddress) {
        this.goToBack()
      }
    },
    methods: {
      goToBack () {
        this.$router.push('/checkout/shipping')
      },
      goToConfirm () {
        this.$router.push('/checkout/confirm')
      }
    },
    computed: {
      ...mapFields({
        user: 'user.user',
        items: 'checkout.items',
        totalPrice: 'checkout.totalPrice',
        shippingAddress: 'checkout.shippingAddress'
      }),
      resultCoins () {
        return this.user.coins - this.totalPrice
      }
    },
    components: {
      Panel,
      ShippingAddress
    }
  }
</script>

<style lang="sass" scoped>
  .btn-continue
    text-align: right
    margin-top: 20px

  strong
    font-weight: bold
</style>
