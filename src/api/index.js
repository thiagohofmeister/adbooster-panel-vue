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
   * Realiza o cadastro do usuário no sistema.
   *
   * @param {Object} userData
   * @returns {Promise<any>}
   */
  async register (userData) {
    return (await axios.post(process.env.API_URL + `/register`, userData)).data
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
   * @param {Object} options
   * @returns {Promise<any>}
   */
  async getTimeLineUser (options) {
    return (await request.get(`/announcement`, {
      params: options
    })).data
  },
  /**
   * Retorna os convites de amizade do usuário.
   *
   * @param {string} userCode
   * @returns {Promise<any>}
   */
  async getInvitesFriendship (userCode) {
    return (await request.get(`/user/retrieve_friendships_pending/${userCode}`)).data
  },
  /**
   * Retorna os convites de amizade do usuário.
   *
   * @param {string} loggedUser
   * @param {string} inviteUser
   * @returns {Promise<any>}
   */
  async acceptInviteFriendship (loggedUser, inviteUser) {
    return (await request.get(`/friendship/accept/${loggedUser}/${inviteUser}`)).data
  },
  /**
   * Retorna os convites de amizade do usuário.
   *
   * @param {string} loggedUser
   * @param {string} inviteUser
   * @returns {Promise<any>}
   */
  async declineInviteFriendship (loggedUser, inviteUser) {
    return (await request.get(`/friendship/decline/${loggedUser}/${inviteUser}`)).data
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
