import Vue from "vue";
//import axios from "axios";
//import { operEles } from "../assets/data/data.js";
import reqData from "../reqData.js";
const UPDATE_COMPANY = "UPDATE_COMPANY";
const UPDATE_MAROPERELE = "UPDATE_MAROPERELE";
const UPDATE_RESULT = "UPDATE_RESULT";
const INIT_OPERELES = "INIT_OPERELES";
const UPDATE_SERESULTS = "UPDATE_SERESULTS";
const UPDATE_ANALYSISPROPERTY = "UPDATE_ANALYSISPROPERTY";
const UPDATE_HOTCOMS = "UPDATE_HOTCOMS";
const state = {
  companyInfo: {},
  analysisProperty: {},
  marOperEle: "",
  result: "",
  operEles: "",
  seresults: [], //模糊搜索得到的公司列表
  hotcoms: []
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
      .req({ apiName: "operEles" })
      .then(res => {
        commit(INIT_OPERELES, res.data);
        cb && cb();
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateCompany({ commit, state }, companyInfo) {
    commit(UPDATE_COMPANY, companyInfo);
  },
  updateAnalysisProperty({ commit, state }, analysisProperty) {
    commit(UPDATE_ANALYSISPROPERTY, analysisProperty);
  },
  updateMarOperEle({ commit, state }, marOperEle) {
    commit(UPDATE_MAROPERELE, marOperEle);
  },
  updateResult({ commit, state }, result) {
    commit(UPDATE_RESULT, result);
  },
  updateSeresults({ commit, state }, p) {
    var cb = p && p.cb;
    //  reqData
    //   .req({ apiName: "test" })
    //   .then(res => {
    //      debugger
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    reqData
      .req({ apiName: "companyList" })
      .then(res => {
        commit(UPDATE_SERESULTS, res.data);
        sessionStorage.setItem("seresults", JSON.stringify(res.data));
        cb && cb();
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateHotcoms({ commit, state }, p) {
    var cb = p && p.cb;
    reqData
      .req({ apiName: "hotcoms" })
      .then(res => {
        res = res.data;
        console.log(res);
        if (res && res.code === "200") {
          debugger
          commit(UPDATE_HOTCOMS, res.data);
          cb && cb();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
const mutations = {
  [UPDATE_COMPANY](state, companyInfo) {
    state.companyInfo = companyInfo;
  },
  [UPDATE_MAROPERELE](state, marOperEle) {
    state.marOperEle = marOperEle;
  },
  [UPDATE_RESULT](state, result) {
    state.result = result;
  },
  [INIT_OPERELES](state, operEles) {
    state.operEles = operEles;
  },
  [UPDATE_SERESULTS](state, seresults) {
    state.seresults = seresults;
  },
  [UPDATE_ANALYSISPROPERTY](state, analysisProperty) {
    state.analysisProperty = analysisProperty;
  },
  [UPDATE_HOTCOMS](state, hotcoms) {
    debugger
    state.hotcoms = hotcoms;
  }
};
const getters = {
  getCompanyInfo: state => {
    return state.companyInfo;
  },
  getMarOperEle: state => {
    return state.marOperEle;
  },
  getResult: state => {
    return state.result;
  },
  getOperEles: state => {
    return state.operEles;
  },
  getSeresults: state => {
    return state.seresults;
  },
  getAnalysisProperty: state => {
    return state.analysisProperty;
  },
  getHotcoms: state => {
    debugger
    return state.hotcoms;
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
