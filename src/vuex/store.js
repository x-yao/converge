import Vue from 'vue'
import Vuex from 'vuex'
import {TEST} from './mutation-types'

Vue.use(Vuex)

const state = {
	num : 0
}

const mutations = {
	[TEST] (state){
		state.num++
	}
}

export default new Vuex.Store({
  state,
  mutations,
  getters:{
  	num: () => { return state.num }
  }
})