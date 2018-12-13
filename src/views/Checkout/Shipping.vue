<template>
  <Panel>
    <span slot="header">Transporte</span>

    <div class="row">
      <ShippingAddress v-for="address in user.shippingAddresses" :key="address" :address="address"/>

      <div class="col-12">
        <button class="btn btn-primary" @click="addShippingAddress">Adicionar endereço novo</button>
      </div>
    </div>

    <AddShippingAddress/>

    <div slot="footer" class="btn-continue">
      <button class="btn" @click="goToBack()">Voltar</button>
      <button class="btn btn-success" @click="goToPayment()" :disabled="!shippingAddress">Continuar</button>
    </div>
  </Panel>
</template>

<script>
  import Panel from '@/components/Template/Panel'
  import { mapFields } from 'vuex-map-fields'
  import ShippingAddress from '@/components/Checkout/ShippingAddress'
  import AddShippingAddress from '@/components/Checkout/AddShippingAddress'

  export default {
    mounted () {
      if (!this.items.length) {
        this.goToBack()
      }
    },
    methods: {
      addShippingAddress () {
        this.$modal.show('addShippingAddress')
      },
      goToBack () {
        this.$router.push('/checkout/cart')
      },
      goToPayment () {
        this.$router.push('/checkout/payment')
      }
    },
    computed: {
      ...mapFields({
        user: 'user.user',
        items: 'checkout.items',
        shippingAddress: 'checkout.shippingAddress'
      })
    },
    components: {
      Panel,
      ShippingAddress,
      AddShippingAddress
    }
  }
</script>

<style lang="sass" scoped>
  .btn-continue
    text-align: right
    margin-top: 20px
</style>
