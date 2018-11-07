<template>
  <div class="form-group" v-bind:class="[colClass, classError]">
    <label class="form-label" v-bind:class="{'bold': required}">{{ label }} <span class="t-error" v-if="required">*</span></label>
    <slot/>
    <span class="t-error dsblock" v-if="error !== null">{{ error }}</span>
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
        required: true
      },
      error: {
        type: String,
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
