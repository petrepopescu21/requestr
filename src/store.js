import Vue from 'vue'
import Vuex from 'vuex'
const Ajv = require('ajv')
const requestSchema = require('./request.schema.json')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {}
  },
  mutations: {
    PLACE_REQUEST(state, request) {
      console.log(request)
    }
  },
  actions: {
    placeRequest({commit}, request) {
      const ajv = new Ajv({
        allErrors: true,
        jsonPointers: true
      });
      require('ajv-errors')(ajv)
      const validate = ajv.compile(requestSchema)
      if(!validate(request)) {
        throw JSON.stringify(validate.errors)
      }
      else console.log("Success!")
      commit('PLACE_REQUEST', request)
    }
  }
})
