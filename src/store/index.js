import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list : [],
    size : 10,
    totalPage : 1,
    currentPage : 1,
    showModal : false,
    editStudentInfo : {},
  },
  mutations: {
    setList (state, payload) {
      state.list = payload;
    },
    setTotalPage (state, payload) {
      state.totalPage = Math.ceil(payload/state.size);
    },
    setCurrentPage (state, payload) {
      state.currentPage = payload;
    },
    setShowModal (state, payload) {
      state.showModal = payload;
    },
    setEditStudentInfo (state, payload) {
      state.editStudentInfo = payload;
    }
  },
  actions: {
    getStudentList ({commit, state}) {
      return api.findByPage(state.currentPage, state.size).then( res => {
            if (res.data.status === 'success') {
              commit('setList', res.data.data.findByPage);
              commit('setTotalPage', res.data.data.cont);
              return {
                msg : res.data.msg,
                type : 'success'
              }
            } else {
              return {
                msg : res.data.msg,
                type : 'fail'
              }
            }
        } )
    },
    updateStu ({commit, state}, options) {
      return api.updateStu(options).then( res => {
            if(res.data.status === 'success') {
                commit('setShowModal', false);
                Object.assign(state.editStudentInfo, options);
                return {
                    msg : res.data.msg,
                    type : 'success'
                }
            } else {
              return {
                msg : res.data.msg,
                type : 'fail'
              }
            }
      })
    },
    turnPage ({commit, dispatch}, page) {
      commit('setCurrentPage', page);
      return dispatch('getStudentList');
    }
  },
  modules: {
  }
})
