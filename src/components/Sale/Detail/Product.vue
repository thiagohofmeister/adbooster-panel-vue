<template>
  <div class="row">
    <div class="col-12">
      <div class="usy-dt">
        <img :src="product.images[0]" alt=""/>
        <div class="usy-name">
          <h3>{{ product.title }}</h3>

          <div class="prices">
            <span class="d-block">De {{ product.previousPrice | currency }}</span>
            <span class="d-block">Por {{ product.currentPrice | currency }}</span>
          </div>

          <span class="quantity">Quantidade: {{ product.quantity }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="sass" scoped>
  .usy-dt > img
    width: 110px
    height: 110px
    margin-right: 10px
    display: inline-block
    vertical-align: middle

  .usy-name
    margin-left: 10px
    display: inline-block
    vertical-align: top

  .usy-name h3
    color: #000000
    font-size: 20px
    text-transform: capitalize
    font-weight: 600
    margin-bottom: 6px
    margin-top: 2px

  .usy-name img
    margin-top: 2px
    margin-right: 6px

  .prices, .quantity
    font-size: 18px
    color: #000

  .prices
    margin: 10px 0

    span:first-child
      text-decoration: line-through
      font-size: 14px
</style>
