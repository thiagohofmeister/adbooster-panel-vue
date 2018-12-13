import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'pt-br',
  silentTranslationWarn: true,
  messages: {
    'pt-br': {
      address: {
        state: {
          label: 'UF'
        },
        city: {
          label: 'Cidade'
        },
        district: {
          label: 'Bairro'
        },
        street: {
          label: 'Rua'
        },
        number: {
          label: 'Número'
        },
        reference: {
          label: 'Referência'
        },
        zipCode: {
          label: 'CEP'
        },
        complement: {
          label: 'Complemento'
        }
      },
      order: {
        statuses: {
          pending: {
            label: 'Pendente'
          },
          approved: {
            label: 'Aprovado'
          },
          invoiced: {
            label: 'Faturado'
          },
          shipped: {
            label: 'Em transporte'
          },
          cancelled: {
            label: 'Cancelado'
          },
          delivered: {
            label: 'Entregue'
          }
        }
      },
      paymentMethod: {
        wallet: {
          label: 'Minha carteira'
        }
      },
      validationError: {
        greaterThan: {
          label: 'Campo deve ser maior do que \'{msg}\''
        },
        lessThan: {
          label: 'Campo deve ser menor do que \'{msg}\''
        },
        maxLength: {
          label: '| Máximo {msg} caractere. | Máximo {msg} caracteres.'
        },
        minItems: {
          label: 'Mínimo {msg}.'
        },
        minLength: {
          label: '| Mínimo {msg} caractere. | Mínimo {msg} caracteres.'
        },
        minimum: {
          label: 'Mínimo {msg}.'
        },
        required: {
          label: 'Campo obrigatório.'
        },
        type: {
          label: 'Tipo de dado inválido.'
        }
      },
      wallet: {
        label: 'Minha carteira'
      }
    }
  }
})
