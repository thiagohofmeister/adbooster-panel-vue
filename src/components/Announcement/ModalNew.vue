<template>
  <modal name="createAnnouncement" :width="555" height="auto">
    <div class="modal-title">
      Anunciar produto
    </div>

    <div class="modal-body">
      <div class="row">
        <FormGroup label="Teste" :columns="12">
          <input type="text" class="form-control">
        </FormGroup>

        <FormGroup label="Teste" :columns="12">
          <input type="text" class="form-control">
        </FormGroup>

        <div class="col-12">
          <UploadImage/>
        </div>

        <div class="col-12">
          <div class="action">
            <button class="btn btn-primary">Publicar</button>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
  import FormGroup from '@/components/Template/FormGroup'
  import UploadImage from '@/components/Announcement/UploadImage'

  export default {
    components: {
      FormGroup,
      UploadImage
    }
  }
</script>

<style lang="sass" scoped>
  .show
    display: block

  .action
    text-align: right

  .modal-body
    padding-bottom: 20px

  .modal-title
    width: 100%
    background-color: #e44d3a
    color: #fff
    text-align: center
    font-size: 18px
    font-weight: 500
    padding: 20px 0
    margin-bottom: 20px
</style>
