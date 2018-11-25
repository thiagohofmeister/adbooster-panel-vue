<template>
  <modal name="createAnnouncement" :width="555" height="auto">
    <div class="modal-title">
      Anunciar produto
    </div>

    <div class="modal-body">
      <div class="row">
        <FormGroup label="Título" :columns="12" :error="getError('title')" :required="true">
          <input type="text" v-model="announcement.title" class="form-control">
        </FormGroup>

        <FormGroup label="Preço Antigo" :columns="6" :error="getError('previousPrice')" :required="true">
          <Money v-model="announcement.previousPrice" v-bind="money" class="form-control"/>
        </FormGroup>

        <FormGroup label="Preço Atual" :columns="6" :error="getError('currentPrice')" :required="true">
          <Money v-model="announcement.currentPrice" v-bind="money" class="form-control"/>
        </FormGroup>

        <FormGroup label="Preço limite em impulsos" :columns="6" :error="getError('impulsePayoutLimit')" :required="true">
          <Money v-model="announcement.impulsePayoutLimit" v-bind="money" class="form-control"/>
        </FormGroup>

        <FormGroup label="Estoque" :columns="6" :error="getError('stock')" :required="true">
          <input type="text" v-model="announcement.stock" class="form-control">
        </FormGroup>

        <FormGroup label="Descrição" :columns="12" :error="getError('description')" :required="true">
          <textarea v-model="announcement.description" class="form-control description" rows="4"></textarea>
        </FormGroup>

        <FormGroup :columns="12" :error="getError('images')">
          <UploadImage @change="changeImages"/>
        </FormGroup>

        <div class="col-12">
          <div class="action">
            <button class="btn btn-primary" @click="publish">Publicar</button>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
  import notifier from '@/notifier'
  import { omit } from '@/utils'
  import api from '@/api'
  import { mapActions, mapGetters } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import FormGroup from '@/components/Template/FormGroup'
  import UploadImage from '@/components/Announcement/UploadImage'
  import { Money } from 'v-money'

  export default {
    data: () => ({
      announcement: {
        title: '',
        previousPrice: 0,
        currentPrice: 0,
        impulsePayoutLimit: 0,
        stock: 0,
        description: '',
        creator: '',
        type: 'bronze',
        images: []
      },
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false
      }
    }),
    mounted () {
      this.announcement.creator = {
        code: this.user._id.$oid,
        name: this.user.name,
        image: this.user.image
      }
    },
    methods: {
      ...mapActions('user', [
        'fetchTimeLine'
      ]),
      ...mapActions('errors', [
        'addError',
        'clearErrors'
      ]),
      changeImages (images) {
        this.announcement.images = images
      },
      publish () {
        this.clearErrors()

        api.publishAnnouncement(omit(this.announcement))
          .then(() => {
            notifier.success('Anúncio publicado com sucesso.', 'Anunciar produto')
            this.$modal.hide('createAnnouncement')
            this.fetchTimeLine()
          })
          .catch(errors => {
            notifier.error('Erro ao publicar anúncio.', 'Anunciar produto')
            this.addError(errors.response.data.data)
          })
          .then()
      }
    },
    computed: {
      ...mapGetters('errors', [
        'getError'
      ]),
      ...mapFields({
        user: 'user.user'
      })
    },
    components: {
      FormGroup,
      UploadImage,
      Money
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

  .description
    resize: none
</style>
