<template>
  <div>
    <div class="row">
      <div class="col-12">
        <OrderList/>
      </div>

      <div class="col-12">
        <SaleList/>
      </div>
    </div>
  </div>
</template>

<script>
  import Panel from '@/components/Template/Panel'
  import Loader from '@/components/Template/Loader'
  import OrderList from '@/views/Order/List'
  import SaleList from '@/views/Sale/List'

  export default {
    components: {
      Panel,
      Loader,
      OrderList,
      SaleList
    }
  }
</script>

<style scoped>

</style>
