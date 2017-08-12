import axios from "axios";
import testData from "./assets/data/data.js";

const axiosConfig = {
  method: "post", //default
  baseURL: "http://121.42.29.188:9776",
  timeout: 30000,
  transformRequest: [
    function(data) {
      // Do whatever you want to transform the data
      return JSON.stringify(data);
    }
  ],
  headers: {
    // "Content-Type": "application/json;charset=utf-8",
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
};
let $ajax = axios.create(axiosConfig);
const requestApi = {
  hotcoms: {
    url: "/hotcoms",
    method: "post"
  },
  hotnews: {
    url: "/hotnews",
    method: "post"
  },
  seresults: {
    url: "/seresults",
    method: "post"
  },
  basicinfo: {
    url: "/basicinfo",
    method: "post",
    data: {
      companyId: "001",
      basicPropertyId: "01"
    }
  },
  depanalysis: {
    url: "/depanalysis",
    method: "post",
    data: {
      companyId: "001",
      analysisPropertyId: "01"
    }
  },
  depanalyres:{
    url:"/depanalysis/result",
    method: "post",
    data: {
      companyId: "001",
      analysisPropertyId: "01",
      selectOpts:[{id:"01",value:"成都欢乐谷"},{id:"02",value:"公园"},{id:"03",value:"价格"}],     
    }

  },
};
export default {
  req: function(p) {
    var req_obj = requestApi[p.apiName];
    if (!req_obj) {
      return testData(p); //取前端moke数据
    } else {
      req_obj = Object.assign({}, req_obj, p);
      delete req_obj.apiName;
      return $ajax(req_obj);
    }
  }
};
