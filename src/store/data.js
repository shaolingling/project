import Vue from "vue";
//import axios from "axios";
//import { operEles } from "../assets/data/data.js";
import reqData from "../reqData.js";
const UPDATE_COMPANY = "UPDATE_COMPANY";
const UPDATE_MAROPERELE = "UPDATE_MAROPERELE";
const UPDATE_RESULT = "UPDATE_RESULT";
const INIT_OPERELES = "INIT_OPERELES";
const state = {
  companyName: "",
  marOperEle: "",
  result: "",
  operEles: ""
};
const actions = {
  initOperEles({ commit, state }, p) {
    var cb = p && p.cb;
    // axios({
    //   method: "get",
    //   baseURL: "http://121.42.29.188:9773/login",
    //   timeout: 30000,
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8"
    //   }
    //   // params: {
    //   //   name: 'wise',
    //   //   info: 'wrong'
    //   // }
    // }).then(
    //   res => {
    //     // success callback
    //     console.log(res);
    //   },
    //   err => {
    //     // error callback
    //   }
    // );
    reqData
      .req({ apiName: "test" })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    reqData
      .req({ apiName: "operEles" })
      .then(res => {
        commit(INIT_OPERELES, res.data);
        cb && cb();
      })
      .catch(err => {
        console.log(err);
      });
  },
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
  },
  [INIT_OPERELES](state, operEles) {
    state.operEles = operEles;
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
  },
  getOperEles: state => {
    return state.operEles;
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
