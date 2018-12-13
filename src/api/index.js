import axios from 'axios'
import request from '@/api/request'

export default {
  /**
   * Busca o endereço pelo CEP.
   *
   * @param {string} cep
   * @returns {Promise<any>}
   */
  async getCep (cep) {
    return (await axios.get(`https://viacep.com.br/ws/${cep}/json`)).data
  },
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
   * Retorna um anúncio.
   *
   * @param {string} code
   * @param {string} sharedCode
   * @returns {Promise<any>}
   */
  async getAnnouncement (code, sharedCode) {
    return (await request.get(`/announcement/retrieve/${code}/${sharedCode}`)).data
  },
  /**
   * Compra um anúncio.
   *
   * @param {Object} order
   * @returns {Promise<any>}
   */
  async buyAnnouncement (order) {
    return (await request.post(`/order/create`, order)).data
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
   * Aceita uma solicitação de amizade.
   *
   * @param {string} loggedUser
   * @param {string} inviteUser
   * @returns {Promise<any>}
   */
  async acceptInviteFriendship (loggedUser, inviteUser) {
    return (await request.get(`/friendship/accept/${loggedUser}/${inviteUser}`)).data
  },
  /**
   * Adiciona um novo amigo.
   *
   * @param {Object} friendship
   * @returns {Promise<any>}
   */
  async addInviteFriendship (friendship) {
    return (await request.post(`/friendship/invite`, friendship)).data
  },
  /**
   * Recusa uma solicitação de amizade.
   *
   * @param {string} loggedUser
   * @param {string} inviteUser
   * @returns {Promise<any>}
   */
  async declineInviteFriendship (loggedUser, inviteUser) {
    return (await request.get(`/friendship/decline/${loggedUser}/${inviteUser}`)).data
  },
  /**
   * Remove uma amizade.
   *
   * @param {string} loggedUser
   * @param {string} inviteUser
   * @returns {Promise<any>}
   */
  async unfriendshipInviteFriendship (loggedUser, inviteUser) {
    return (await request.get(`/friendship/remove/${loggedUser}/${inviteUser}`)).data
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
  },
  /**
   * Impulsiona um anúncio.
   *
   * @param {Object} impulse
   * @returns {Promise<any>}
   */
  async addImpulseAnnouncement (impulse) {
    return (await request.post(`/announcement/add_impulse`, impulse)).data
  },
  /**
   * Impulsiona um anúncio.
   *
   * @param {Object} impulse
   * @returns {Promise<any>}
   */
  async removeImpulseAnnouncement (impulse) {
    return (await request.post(`/announcement/remove_impulse`, impulse)).data
  },
  /**
   * Adiciona um endereço de entrega.
   *
   * @param {Object} shippingAddress
   * @returns {Promise<any>}
   */
  async addShippingAddress (shippingAddress) {
    return (await request.post(`/user/add_shipping_address`, shippingAddress)).data
  },
  /**
   * Faz uma pesquisa por usuários e anúncios.
   *
   * @param {string} search
   * @returns {Promise<any>}
   */
  async search (search) {
    return (await request.get(`/search/retrieve/${search}`)).data
  },
  /**
   * Busca os pedidos do usuário logado.
   *
   * @param {Object} options
   * @returns {Promise<any>}
   */
  async getOrders (options) {
    return (await request.get(`/order`, {
      params: options
    })).data
  },
  /**
   * Busca um pedido pelo código.
   *
   * @param {string} code
   * @returns {Promise<any>}
   */
  async getOrder (code) {
    return (await request.get(`/order/retrieve/${code}`)).data
  }
}
