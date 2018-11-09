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
   * Retorna o usuário logado.
   *
   * @returns {Promise<any>}
   */
  async getUser () {
    return (await request.get(`/user/retrieve`)).data
  },
  /**
   * Retorna a timeline do usuário.
   *
   * @param options
   * @returns {Promise<any>}
   */
  async getTimeLineUser (options) {
    return (await request.get(`/announcement`, {
      params: options
    })).data
  },
  /**
   * Envia uma imagem.
   *
   * @returns {Promise.<Object>}
   */
  async uploadImage (formData) {
    return (await request.post(`file/upload`, formData)).data
  },
  /**
   * Publica um anúncio.
   *
   * @param {Object} announcement
   * @returns {Promise<any>}
   */
  async publishAnnouncement (announcement) {
    return (await request.post(`/announcement/publish`, announcement)).data
  }
}
