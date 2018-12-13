<template>
  <div>
    <Loader :loading="fetching"/>
    <Panel v-if="!fetching && order">
      <span slot="header">Meu Pedido #{{ order._id.$oid }}</span>

      <div class="row">
        <div class="col-12 no-pdd">
          <div class="products">
            <div class="col-12">
              <h3>Produto</h3>
            </div>

            <Product v-for="product in order.items" :key="product" :product="product"/>
          </div>
        </div>

        <div class="col-6">
          <div class="address">
            <h3>Endereço de entrega:</h3>
            <span><strong>{{ $t('address.zipCode.label') }}:</strong> {{ order.shippingAddress.zipCode || '-' }}</span>
            <span><strong>{{ $t('address.state.label') }}:</strong> {{ order.shippingAddress.state || '-' }}</span>
            <span><strong>{{ $t('address.city.label') }}:</strong> {{ order.shippingAddress.city || '-' }}</span>
            <span><strong>{{ $t('address.district.label') }}:</strong> {{ order.shippingAddress.district || '-' }}</span>
            <span><strong>{{ $t('address.street.label') }}:</strong> {{ order.shippingAddress.street || '-' }}</span>
            <span><strong>{{ $t('address.number.label') }}:</strong> {{ order.shippingAddress.number || '-' }}</span>
            <span><strong>{{ $t('address.complement.label') }}:</strong> {{ order.shippingAddress.complement || '-' }}</span>
            <span><strong>{{ $t('address.reference.label') }}:</strong> {{ order.shippingAddress.reference || '-' }}</span>
          </div>
        </div>

        <div class="col-6">
          <div class="address">
            <h3>Endereço de cobrança:</h3>
            <span><strong>{{ $t('address.zipCode.label') }}:</strong> {{ order.billingAddress.zipCode || '-' }}</span>
            <span><strong>{{ $t('address.state.label') }}:</strong> {{ order.billingAddress.state || '-' }}</span>
            <span><strong>{{ $t('address.city.label') }}:</strong> {{ order.billingAddress.city || '-' }}</span>
            <span><strong>{{ $t('address.district.label') }}:</strong> {{ order.billingAddress.district || '-' }}</span>
            <span><strong>{{ $t('address.street.label') }}:</strong> {{ order.billingAddress.street || '-' }}</span>
            <span><strong>{{ $t('address.number.label') }}:</strong> {{ order.billingAddress.number || '-' }}</span>
            <span><strong>{{ $t('address.complement.label') }}:</strong> {{ order.billingAddress.complement || '-' }}</span>
            <span><strong>{{ $t('address.reference.label') }}:</strong> {{ order.billingAddress.reference || '-' }}</span>
          </div>
        </div>

        <div class="col-12">
          <h3>Pagamento:</h3>
          <p>{{ $t(`paymentMethod.${order.paymentMethod}.label`) }}</p>
        </div>
      </div>

      <div slot="footer" class="btn-continue">
        <button class="btn btn-info" @click="talkWithSeller()">Conversar com o vendedor</button>
      </div>
    </Panel>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import Panel from '@/components/Template/Panel'
  import Loader from '@/components/Template/Loader'
  import Product from '@/components/Order/Detail/Product'

  export default {
    props: {
      code: {
        type: String,
        required: true
      }
    },
    methods: {
      talkWithSeller () {
      }
    },
    computed: {
      ...mapFields({
        fetching: 'orders.fetching'
      }),
      ...mapGetters('orders', [
        'getOrder'
      ]),
      order () {
        return this.getOrder(this.code)
      }
    },
    components: {
      Panel,
      Loader,
      Product
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
