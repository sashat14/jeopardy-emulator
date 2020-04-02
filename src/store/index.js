import Vue from 'vue'
import Vuex from 'vuex'
import categories from './modules/categories.js'
import clues from './modules/clues.js'
import clue from './modules/clue.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    clues,
    clue
  }
})
