import axios from 'axios'
import cookie from 'vue-cookie'
import Router from '@/router'

const instance = axios.create({
  baseURL: process.env.API_URL
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Router.push('/signin')
    }
    return Promise.reject(error)
  }
)

instance.interceptors.request.use(
  config => {
    config.headers['Authorization'] = cookie.get('token')
    return config
  },
  error => Promise.reject(error)
)

export default instance
