import { createStore } from 'vuex'
import invoice from './modules/invoice.js'
import payment from './modules/payment.js'

export default createStore({
  strict: true,

  modules: {
    invoice,
    payment,
  },
})
