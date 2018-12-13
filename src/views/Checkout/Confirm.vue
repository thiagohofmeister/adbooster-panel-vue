<template>
  <Panel>
    <span slot="header">Confirmação de compra</span>

    <div class="row">
      <div class="col-12 no-pdd">
        <div class="products">
          <div class="col-12">
            <h3>Produto</h3>
          </div>

          <CartItem v-for="item in items" :key="item" :item="item"/>
        </div>
      </div>

      <div class="col-6">
        <div class="address">
          <h3>Endereço de entrega:</h3>
          <span><strong>{{ $t('address.zipCode.label') }}:</strong> {{ shippingAddress.zipCode || '-' }}</span>
          <span><strong>{{ $t('address.state.label') }}:</strong> {{ shippingAddress.state || '-' }}</span>
          <span><strong>{{ $t('address.city.label') }}:</strong> {{ shippingAddress.city || '-' }}</span>
          <span><strong>{{ $t('address.district.label') }}:</strong> {{ shippingAddress.district || '-' }}</span>
          <span><strong>{{ $t('address.street.label') }}:</strong> {{ shippingAddress.street || '-' }}</span>
          <span><strong>{{ $t('address.number.label') }}:</strong> {{ shippingAddress.number || '-' }}</span>
          <span><strong>{{ $t('address.complement.label') }}:</strong> {{ shippingAddress.complement || '-' }}</span>
          <span><strong>{{ $t('address.reference.label') }}:</strong> {{ shippingAddress.reference || '-' }}</span>
        </div>
      </div>

      <div class="col-6">
        <div class="address">
          <h3>Endereço de cobrança:</h3>
          <span><strong>{{ $t('address.zipCode.label') }}:</strong> {{ billingAddress.zipCode || '-' }}</span>
          <span><strong>{{ $t('address.state.label') }}:</strong> {{ billingAddress.state || '-' }}</span>
          <span><strong>{{ $t('address.city.label') }}:</strong> {{ billingAddress.city || '-' }}</span>
          <span><strong>{{ $t('address.district.label') }}:</strong> {{ billingAddress.district || '-' }}</span>
          <span><strong>{{ $t('address.street.label') }}:</strong> {{ billingAddress.street || '-' }}</span>
          <span><strong>{{ $t('address.number.label') }}:</strong> {{ billingAddress.number || '-' }}</span>
          <span><strong>{{ $t('address.complement.label') }}:</strong> {{ billingAddress.complement || '-' }}</span>
          <span><strong>{{ $t('address.reference.label') }}:</strong> {{ billingAddress.reference || '-' }}</span>
        </div>
      </div>

      <div class="col-12">
        <h3>Pagamento:</h3>
        <p>
          Você possui <strong>{{ this.user.coins | currency }}</strong> em sua carteira.
          Após finalizar esta compra, você ficará com <strong>{{ this.resultCoins | currency }}</strong>.
        </p>
      </div>
    </div>

    <div slot="footer" class="btn-continue">
      <button class="btn" @click="goToBack()">Voltar</button>
      <button class="btn btn-success" @click="confirm()">Confirmar</button>
    </div>
  </Panel>
</template>

<script>
  import api from '@/api'
  import notifier from '@/notifier'
  import Panel from '@/components/Template/Panel'
  import { mapFields } from 'vuex-map-fields'
  import CartItem from '@/components/Checkout/CartItem'
  import ShippingAddress from '@/components/Checkout/ShippingAddress'
  import AddShippingAddress from '@/components/Checkout/AddShippingAddress'
  import { omit } from '@/utils'

  export default {
    mounted () {
      if (!this.items.length || !this.shippingAddress || !this.paymentMethod) {
        this.goToBack()
      }
    },
    methods: {
      addShippingAddress () {
        this.$modal.show('addShippingAddress')
      },
      goToBack () {
        this.$router.push('/checkout/payment')
      },
      confirm () {
        api.buyAnnouncement(omit({
          items: this.items.map(item => ({
            code: item.product._id.$oid,
            previousPrice: item.product.previousPrice,
            currentPrice: item.product.currentPrice,
            quantity: item.quantity,
            seller: item.product.sharedBy._id.$oid,
            impulsePrice: item.product.impulsePayoutLimit
          })),
          billingAddress: this.billingAddress,
          shippingAddress: this.shippingAddress,
          customer: this.user._id.$oid
        }))
          .then(order => {
            notifier.success('Compra realizada com sucesso.', 'Comprar anúncio')
            // this.$router.push(`/orders/${order._id.$oid}`)
          })
          .catch(() => notifier.error('Erro ao finalizar a compra.', 'Comprar anúncio'))
      }
    },
    computed: {
      ...mapFields({
        user: 'user.user',
        items: 'checkout.items',
        totalPrice: 'checkout.totalPrice',
        shippingAddress: 'checkout.shippingAddress',
        billingAddress: 'checkout.billingAddress',
        paymentMethod: 'checkout.paymentMethod'
      }),
      resultCoins () {
        return this.user.coins - this.totalPrice
      }
    },
    components: {
      Panel,
      CartItem,
      ShippingAddress,
      AddShippingAddress
    }
  }
</script>

<style lang="sass" scoped>
  .btn-continue
    text-align: right
    margin-top: 20px

  strong
    font-weight: bold

  h3
    font-size: 18px
    margin-bottom: 15px

  .address
    border: 1px solid #dddfe2
    padding: 10px
    margin-bottom: 20px
    position: relative

    span
      display: block
      line-height: 20px

  .products
    margin-bottom: 20px
</style>
