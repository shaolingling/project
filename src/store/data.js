import Vue from "vue";
//import axios from "axios";
//import { operEles } from "../assets/data/data.js";
import reqData from "../reqData.js";
const UPDATE_COMPANY = "UPDATE_COMPANY";
const UPDATE_RESULT = "UPDATE_RESULT";
const UPDATE_SERESULTS = "UPDATE_SERESULTS";
const UPDATE_ANALYSISPROPERTY = "UPDATE_ANALYSISPROPERTY";
const UPDATE_HOTCOMS = "UPDATE_HOTCOMS";
const UPDATE_HOTNEWS = "UPDATE_HOTNEWS";
const UPDATE_BASICINFO = "UPDATE_BASICINFO";
const UPDATE_DEPANALYRES = "UPDATE_DEPANALYRES";
const state = {
  companyInfo: {},
  analysisProperty: [],
  result: "",
  seresults: [], //模糊搜索得到的公司列表
  hotcoms: [],
  hotnews: [],
  basicInfo: "",
  depAnalyRes: []
};
const actions = {
  updateCompany({ commit, state }, companyInfo) {
    commit(UPDATE_COMPANY, companyInfo);
  },
  updateAnalysisProperty({ commit, state }, options) {
    reqData
      .req({
        apiName: "depanalysis",
        data: {
          companyId: options.id,
          analysisPropertyId: options.name
        }
      })
      .then(res => {
        res = res.data;
        console.log(res);
        if (res && res.code === "200") {
          let data = res.data;
          commit(UPDATE_ANALYSISPROPERTY, data);
          sessionStorage.setItem("analysisProperty", JSON.stringify(data));
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  updateResult({ commit, state }, result) {
    commit(UPDATE_RESULT, result);
  },
  updateSeresults({ commit, state }, p) {
    var cb = p && p.cb;

    reqData
      .req({ apiName: "seresults" })
      .then(res => {
        res = res.data;
        console.log(res);
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
          let data = res.data;
          // data.forEach(function(element) {
          //    element.companyName = element.companyName
          // });
          commit(UPDATE_HOTCOMS, data);
          cb && cb();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateHotnews({ commit, state }, p) {
    var cb = p && p.cb;
    reqData
      .req({ apiName: "hotnews" })
      .then(res => {
        res = res.data;
        console.log(res);
        if (res && res.code === "200") {
          let data = res.data;
          commit(UPDATE_HOTNEWS, data);
          cb && cb();
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateBasicInfo({ commit, state }, options) {
    reqData
      .req({
        apiName: "basicinfo",
        data: {
          companyId: options.companyId,
          basicPropertyId: options.basicPropertyId
        }
      })
      .then(res => {
        res = res.data;
        console.log(res);
        if (res && res.code === "200") {
          let data = res.data;
          commit(UPDATE_BASICINFO, data);
          sessionStorage.setItem("basicInfo", JSON.stringify(data));
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateDepAnalyRes({ commit, state }, options) {
    debugger
    reqData
      .req({
        apiName: "depanalyres",
        data: {
          companyId: options.companyId,
          analysisPropertyId: options.analysisPropertyId,
          selectOpts: options.selectOpts
        }
      })
      .then(res => {
        res = res.data;
        console.log(res);
        if (res && res.code === "200") {
          let data = res.data;
          commit(UPDATE_DEPANALYRES, data);
          //sessionStorage.setItem("depAnalyRes", JSON.stringify(data));
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

  [UPDATE_RESULT](state, result) {
    state.result = result;
  },

  [UPDATE_SERESULTS](state, seresults) {
    state.seresults = seresults;
  },
  [UPDATE_ANALYSISPROPERTY](state, analysisProperty) {
    state.analysisProperty = analysisProperty;
  },
  [UPDATE_HOTCOMS](state, hotcoms) {
    state.hotcoms = hotcoms;
  },
  [UPDATE_HOTNEWS](state, hotnews) {
    state.hotnews = hotnews;
  },
  [UPDATE_BASICINFO](state, basicInfo) {
    state.basicInfo = basicInfo;
  },
  [UPDATE_DEPANALYRES](state, depAnalyRes) {
    state.depAnalyRes = depAnalyRes;
  },
};
const getters = {
  getCompanyInfo: state => {
    return state.companyInfo;
  },

  getResult: state => {
    return state.result;
  },

  getSeresults: state => {
    return state.seresults;
  },
  getAnalysisProperty: state => {
    return state.analysisProperty;
  },
  getHotcoms: state => {
    return state.hotcoms;
  },
  getHotnews: state => {
    return state.hotnews;
  },
  getBasicInfo: state => {
    return state.basicInfo;
  },
  getDepAnalyRes:state=>{
    return state.depAnalyRes
  },
};
export default {
  state,
  actions,
  mutations,
  getters
};
