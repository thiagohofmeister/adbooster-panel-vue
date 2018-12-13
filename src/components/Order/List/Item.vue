<template>
  <div class="col-12 no-pdd">
    <div class="order">
      <div class="row">
        <div class="col-3">
          <router-link :to="{ name: 'orders/detail', params: { code: order._id.$oid } }">#{{ order._id.$oid }}</router-link>
        </div>

        <div class="col-5">
          {{ itemsName }}
        </div>

        <div class="col-2">
          <span class="badge" v-bind:class="order.status">{{ $t(`order.statuses.${order.status}.label`) }}</span>
        </div>

        <div class="col-2">
          Total: {{ order.totalPrice | currency }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      order: {
        type: Object,
        required: true
      }
    },
    computed: {
      itemsName () {
        return this.order.items.map(item => item.title).join(', ')
      }
    }
  }
</script>

<style lang="sass" scoped>
  .order
    padding: 10px
</style>
