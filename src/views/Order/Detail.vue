<template>
  <Panel>
    Detalhe {{ code }}
  </Panel>
</template>

<script>
  import Panel from '@/components/Template/Panel'

  export default {
    props: {
      code: {
        type: String,
        required: true
      }
    },
    components: {
      Panel
    }
  }
</script>

<style scoped>

</style>
