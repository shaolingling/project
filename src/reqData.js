import axios from "axios";
import testData from "./assets/data/data.js";

const axiosConfig = {
  method: "post", //default
  baseURL: "http://121.42.29.188:9775",
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
  //test
  // test: {
  //   url: "/seresults",
  //   method: "post",
  //   data: {
  //     name: "a",
  //     id: "001"
  //   }
  // }
    hotcoms: {
    url: "/hotcoms",
    method: "post",
  }
};
export default {
  req: function(p) {
    var req_obj = requestApi[p.apiName];
    if (!req_obj) {
      return testData(p); //取前端moke数据
    } else {
      req_obj = Object.assign({},req_obj,p)
      return $ajax(req_obj);
    }
  }
};
