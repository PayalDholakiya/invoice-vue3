<template>
  <div>
    <div id="display">
      <Invoice :detail="invoices" />
      <Payment :details="payment" />
    </div>
    <div id="form-data">
      <div>
        Type:
        <select id="my_select" v-model="formData.type">
          <option value="invoice" id="invoice">invoice</option>
          <option value="payment" id="payment">payment</option>
        </select>
      </div>
      <div style="padding-top: 2px">
        To/Form:
        <input
          v-model="formData.form"
          type="text"
          class="input-data"
          id="form"
        />
      </div>
      <div style="padding-top: 2px">
        Details:
        <input
          v-model="formData.details"
          type="text"
          class="input-data"
          id="details"
        />
      </div>
      <div style="padding-top: 2px">
        Amount:
        <input
          v-model="formData.amount"
          type="number"
          class="input-data"
          id="amount"
        />
      </div>
      <div class="add">
        <button @click="add()" type="submit">
          Add
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
import { mapActions } from 'vuex'
import Invoice from './Invoice'
import Payment from './Payment'
import modules from '../store/modules/invoice'
import module from '../store/modules/payment'

export default {
  components: {
    Invoice,
    Payment,
    modules,
    module,
  },
  setup() {
    const invoices = ref([])
    const payment = ref([])
    const formData = reactive({
      type: 'invoice',
      form: '',
      details: '',
      amount: '',
    })

    return {
      invoices,
      payment,
      formData,
    }
  },

  methods: {
    ...mapActions('invoice', ['addInvoice']),
    ...mapActions('payment', ['addPayment']),

    add() {
      if (this.formData.type === 'invoice') {
        this.addInvoice(this.formData)
      } else {
        this.addPayment(this.formData)
      }
      this.reset()
    },
    reset() {
      this.formData = {
        type: 'invoice',
        form: '',
        details: '',
        amount: '',
      }
    },
  },
}
</script>
<style scoped>
#display {
  display: flex;
  justify-content: space-around;
}
h1 {
  color: fuchsia;
}
#form-data {
  height: 20vh;
  background-color: rgb(204, 203, 203);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 10px;
}

.add button {
  height: 30px;
  width: 90px;
  background-color: magenta;
  border-radius: 5px;
}
.add {
  padding-top: 2px;
  margin-left: 5%;
}
@media screen and (max-width: 1063px) {
  #form-data {
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 20%;
    padding-top: 20px;
  }
  .add button {
    height: 30px;
    width: 90px;
  }
}
</style>
