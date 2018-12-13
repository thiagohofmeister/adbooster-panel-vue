<template>
  <div class="col-6">
    <div class="address">
      <span><strong>{{ $t('address.zipCode.label') }}:</strong> {{ address.zipCode || '-' }}</span>
      <span><strong>{{ $t('address.state.label') }}:</strong> {{ address.state || '-' }}</span>
      <span><strong>{{ $t('address.city.label') }}:</strong> {{ address.city || '-' }}</span>
      <span><strong>{{ $t('address.district.label') }}:</strong> {{ address.district || '-' }}</span>
      <span><strong>{{ $t('address.street.label') }}:</strong> {{ address.street || '-' }}</span>
      <span><strong>{{ $t('address.number.label') }}:</strong> {{ address.number || '-' }}</span>
      <span><strong>{{ $t('address.complement.label') }}:</strong> {{ address.complement || '-' }}</span>
      <span><strong>{{ $t('address.reference.label') }}:</strong> {{ address.reference || '-' }}</span>

      <div class="buttons">
        <button class="btn btn-primary" @click="selectAddress" v-if="!isSelected">Selecionar</button>
        <button class="btn btn-primary" v-else :disabled="true">Selecionado</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapFields } from 'vuex-map-fields'
  import { mapActions } from 'vuex'

  export default {
    props: {
      address: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions('checkout', [
        'setShippingAddress'
      ]),
      selectAddress () {
        this.setShippingAddress(this.address)
      }
    },
    computed: {
      ...mapFields({
        shippingAddress: 'checkout.shippingAddress'
      }),
      isSelected () {
        return JSON.stringify(this.address) === JSON.stringify(this.shippingAddress)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .address
    border: 1px solid #dddfe2
    padding: 10px
    margin-bottom: 20px
    position: relative

    span
      display: block
      line-height: 20px

      strong
        font-weight: bold

    .buttons
      position: absolute
      margin-top: 15px
      top: 0
      right: 10px
</style>
