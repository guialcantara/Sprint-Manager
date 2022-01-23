import Vue from 'vue'
import Vuex from 'vuex'
import {data} from "../mock/listsData"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: data
  },
  mutations: {
    UPDATE_LIST(state, listData){
      state.lists.forEach(element => {
        if(listData.id == element.id){
          element = listData.list
        }
    });
    }
  },
  actions: {
    updateList ({ commit}, {list, listId}) {
      commit('UPDATE_LIST',{list, listId})
    }
  },
  modules: {
  }
})
