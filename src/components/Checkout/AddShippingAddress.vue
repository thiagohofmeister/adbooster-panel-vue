<template>
  <modal name="addShippingAddress" :width="555" height="auto">
    <div class="modal-title">
      Cadastrar endereço de entrega
    </div>

    <div class="modal-body">
      <div class="row">
        <FormGroup :label="$t('address.zipCode.label')" :columns="4" :error="getError('zipCode')" :required="true">
          <input type="text" v-model="shippingAddress.zipCode" class="form-control">
        </FormGroup>

        <FormGroup :label="$t('address.state.label')" :columns="2" :error="getError('state')" :required="true">
          <select class="form-control" v-model="shippingAddress.state">
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
            <option value="ES">ES</option>
          </select>
        </FormGroup>

        <FormGroup :label="$t('address.city.label')" :columns="6" :error="getError('city')" :required="true">
          <input type="text" v-model="shippingAddress.city" class="form-control">
        </FormGroup>

        <FormGroup :label="$t('address.district.label')" :columns="12" :error="getError('district')" :required="true">
          <input type="text" v-model="shippingAddress.district" class="form-control">
        </FormGroup>

        <FormGroup :label="$t('address.street.label')" :columns="9" :error="getError('street')" :required="true">
          <input type="text" v-model="shippingAddress.street" class="form-control">
        </FormGroup>

        <FormGroup :label="$t('address.number.label')" :columns="3" :error="getError('number')" :required="true">
          <input type="text" v-model="shippingAddress.number" class="form-control">
        </FormGroup>

        <FormGroup :label="$t('address.complement.label')" :columns="12" :error="getError('complement')">
          <input type="text" v-model="shippingAddress.complement" class="form-control">
        </FormGroup>

        <FormGroup :label="$t('address.reference.label')" :columns="12" :error="getError('reference')">
          <input type="text" v-model="shippingAddress.reference" class="form-control">
        </FormGroup>

        <div class="col-12">
          <div class="action">
            <button class="btn btn-primary" @click="save">Salvar</button>
            <button class="btn" @click="cancel()">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
  import api from '@/api'
  import notifier from '@/notifier'
  import { mapGetters, mapActions } from 'vuex'
  import { mapFields } from 'vuex-map-fields'
  import FormGroup from '@/components/Template/FormGroup'
  import { omit } from '@/utils'

  export default {
    data: () => ({
      shippingAddress: {
        state: 'RS',
        city: null,
        district: null,
        street: null,
        number: null,
        reference: null,
        zipCode: null,
        complement: null
      }
    }),
    methods: {
      ...mapActions('user', [
        'refreshUser'
      ]),
      save () {
        api.addShippingAddress(omit(this.shippingAddress))
          .then(() => {
            notifier.success('Endereço de entrega adicionado com sucesso.', 'Cadastro de endereço de entrega')
            this.refreshUser()
              .then(() => {})
              .catch(() => {})
              .then(() => this.cancel())
          })
          .catch(() => notifier.error('Erro ao adicionar endereço de entrega.', 'Cadastro de endereço de entrega'))
      },
      cancel () {
        this.$modal.hide('addShippingAddress')
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
    watch: {
      'shippingAddress.zipCode' (value) {
        if (value.length === 8) {
          api.getCep(value)
            .then(result => {
              this.shippingAddress.state = result.uf
              this.shippingAddress.city = result.localidade
              this.shippingAddress.district = result.bairro
              this.shippingAddress.street = result.logradouro
            })
        }
      }
    },
    components: {
      FormGroup
    }
  }
</script>

<style lang="sass" scoped>
  .show
    display: block

  .action
    text-align: center
    margin-top: 20px

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

  span
    font-weight: bold
</style>
