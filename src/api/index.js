import axios from 'axios'
import request from '@/api/request'

export default {
  /**
   * Realiza a autenticação do usuário no sistema.
   *
   * @param {Object} userData
   * @returns {Promise<any>}
   */
  async authenticate (userData) {
    return (await axios.post(process.env.API_URL + `/authenticate`, userData)).data
  },
  /**
   * Realiza a validação do usuário logado.
   *
   * @param {String} token
   * @returns {Promise<any>}
   */
  async getUser (token) {
    return (await request.post(process.env.API_URL + `/user/retrieve`)).data
  }
}