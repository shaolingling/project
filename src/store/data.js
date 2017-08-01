import Vue from "vue";
import axios from "axios";
import reqData from "../assets/data/data.js";
import { operEles } from "../assets/data/data.js";
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
  initOperEles({ commit, state }, p) {
    var cb = p && p.cb;
    axios({
      method: "get",
      url: "http://121.42.29.188:9773/login",
      timeout: 30000,
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
      // data: {
      //   name: 'wise',
      //   info: 'wrong'
      // }
    }).then(
      response => {
        // success callback
        console.log(response);
      },
      response => {
        // error callback
      }
    );
    commit(INIT_OPERELES, operEles);
    cb && cb();
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
