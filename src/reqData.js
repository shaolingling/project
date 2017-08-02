import axios from "axios";
import testData from "./assets/data/data.js"
const axiosConfig = {
  method: "get", //default
  baseURL: "http://121.42.29.188:9773",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
};
let $ajax = axios.create(axiosConfig);
const requestApi = {
  //test
  test: {
    url: "/login"
  }
};
export default {
  req: function(p) {
    var req_obj = requestApi[p.apiName];
    if (!req_obj) {
      return testData(p) //取前端moke数据
    } else {
      return $ajax(req_obj);
    }
  }
};
