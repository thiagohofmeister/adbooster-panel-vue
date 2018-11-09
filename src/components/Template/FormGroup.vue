<template>
  <div class="form-group" v-bind:class="[colClass, classError]">
    <label class="form-label" v-bind:class="{'bold': required}">{{ label }} <span class="t-error" v-if="required">*</span></label>
    <slot/>
    <span class="t-error dsblock" v-if="!isNumber && error.message !== null">
        {{
          $te(`validationError.${error.message}.label`, { msg: $t(error.value) }) ?
            $t(`validationError.${error.message}.label`, { msg: $t(error.value) }) :
            $t(`${error.message}.label`, { msg: $t(error.value) })
        }}
      </span>
    <span class="t-error dsblock" v-if="isNumber && error.message !== null">
        {{
          $te(`validationError.${error.message}.label`, error.value, { msg: error.value }) ?
            $tc(`validationError.${error.message}.label`, error.value, { msg: error.value }) :
            $tc(`${error.message}.label`, error.value, { msg: error.value })
        }}
      </span>
  </div>
</template>

<script>
  export default {
    props: {
      columns: {
        type: Number,
        default: 3
      },
      label: {
        type: String,
        required: false
      },
      error: {
        type: Object,
        default: () => { return {message: null, value: null} },
        required: false
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      classError () {
        return {
          'i-error': !!this.error
        }
      }
    },
    computed: {
      colClass () {
        return `col-${this.columns}`
      },
      isNumber () {
        return !isNaN(this.error.value)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .t-error
    font-size: 13px
    font-weight: bold
    margin-top: 5px

  .bold
    font-weight: bold

  .dsblock
    display: block
</style>
