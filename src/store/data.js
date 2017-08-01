import Vue from "vue";
import reqData from "../assets/data/data.js";
const UPDATE_COMPANY = "UPDATE_COMPANY";
const UPDATE_MAROPERELE = "UPDATE_MAROPERELE";
const UPDATE_RESULT = "UPDATE_RESULT";
const state = {
  companyName: "",
  marOperEle: "",
  result: ""
};
const actions = {
  // refresh({ commit, state }, p) {
  //   let hashArr = window.location.hash.split("/");
  //   if (hashArr[1]) {
  //     let companyName = reqData.companyList.filter(function(ele) {
  //       return hashArr[2] == ele.id;
  //     })[0]["name"];
  //     commit(UPDATE_COMPANY, companyName);
  //   }
  //   if (hashArr[4]) {
  //     let marOperEle = reqData.operEles.filter(function(ele) {
  //       return hashArr[5] == ele.ename;
  //     })[0]["cname"];
  //     commit(UPDATE_MAROPERELE, marOperEle);
  //   }
  //   if (hashArr[6]) {
  //     let result = reqData.result.filter(function(ele) {
  //       return hashArr[7] == ele.id;
  //     })[0]["name"];
  //      commit(UPDATE_RESULT, result);
  //   }
  // },
  updateCompany({ commit, state }, companyName) {
    commit(UPDATE_COMPANY, companyName);
   
  },
  updateMarOperEle({ commit, state }, marOperEle) {
    commit(UPDATE_MAROPERELE, marOperEle);
    
  },
  updateResult({ commit, state }, result) {
    commit(UPDATE_RESULT, result);
    
  }
};
const mutations = {
  [UPDATE_COMPANY](state, companyName) {
    state.companyName = companyName;
  },
  [UPDATE_MAROPERELE](state, marOperEle) {
    state.marOperEle = marOperEle;
  },
  [UPDATE_RESULT](state, result) {
    state.result = result;
  }
};
const getters = {
  getCompanyName: state => {
    return state.companyName;
  },
  getMarOperEle: state => {
    return state.marOperEle;
  },
  getResult: state => {
    return state.result;
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
