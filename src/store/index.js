import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    state: {}
  })
  return store
}
