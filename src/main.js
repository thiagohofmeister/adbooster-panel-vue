import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/pt-br'
import VueMoment from 'vue-moment'
import moment from 'moment'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(ElementUI, { locale })

Vue.use(VueMoment, {
  moment
})

Vue.use(VueCurrencyFilter, {
  symbol: 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

require('moment/locale/pt-br')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
