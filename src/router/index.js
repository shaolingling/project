import Vue from "vue";
import Router from "vue-router";
import index from "@/views/index";
import basicinfo from "@/views/basicinfo";
import marOperEles from "@/views/marOperEles";
import marOperEle from "@/views/marOperEle";
import result from "@/views/result";
import depanalysis from  "@/views/depanalysis";
import seresults from "@/views/seresults"; //返回结果列表页
//import person from "@/views/person";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/seresults",
      name: "seresults",
      component: seresults
    },
    {
      path: "/basicinfo",
      name: "basicinfo",
      component: basicinfo
    },
    {
       path: "/depanalysis",
      name: "depanalysis",
      component: depanalysis
    },
    {
      path: "/company/marOperEles",
      name: "marOperEles",
      component: marOperEles
    },
    {
      path: "/company/marOperEles/marOperEle",
      name: "marOperEle",
      component: marOperEle
    },
    {
      path: "/company/marOperEles/marOperEle/result",
      name: "result",
      component: result
    }
  ]
});
