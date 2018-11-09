<template>
  <div>
    <Panel>
      <div slot="header">
        Buscando por "{{ search }}"
      </div>


    </Panel>
  </div>
</template>

<script>
  import Panel from '@/components/Template/Panel'

  export default {
    props: {
      search: {
        type: String,
        required: true
      }
    },
    watch: {
      search (value) {
      }
    },
    components: {
      Panel
    }
  }
</script>

<style scoped>

</style>
