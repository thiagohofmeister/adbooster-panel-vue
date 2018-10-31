import Vue from 'vue'

/**
 * Exibe mensagem de alerta.
 *
 * @param {string} title
 * @param {string} text
 * @param {string} type
 */
const createMessage = (title, text, type) => {
  Vue.prototype.$notify({
    title,
    message: text,
    type,
    closeable: true,
    timer: 5000
  })
}

export default {
  /**
   * Exibe alerta de sucesso.
   *
   * @param {string} text
   * @param {string} title
   */
  success (text, title) {
    createMessage(title, text, 'success')
  },
  /**
   * Exibe alerta de erro.
   *
   * @param {string} text
   * @param {string} title
   */
  error (text, title) {
    createMessage(title, text, 'error')
  },
  /**
   * Exibe alerta de aviso.
   *
   * @param {string} text
   * @param {string} title
   */
  warning (text, title) {
    createMessage(title, text, 'warning')
  }
}
