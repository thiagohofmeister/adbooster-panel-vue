import axios from 'axios'
// import request from '@/api/request'

export default {
  /**
   * Realiza a autenticação na Logarme.
   *
   * @param {String} userData
   * @returns {Promise<any>}
   */
  authenticate (userData) {
    return axios.post(process.env.API_URL + `/authenticate`, userData)
  }
}
