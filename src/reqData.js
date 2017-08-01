import axios from "axios";
const axiosConfig = {
  method: "get",
  baseURL: "",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
};
let $ajax = axios.create(axiosConfig);
 
export default {
  req: function(p) {
    return $ajax(p);
  }
};
