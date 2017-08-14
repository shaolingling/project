import Vue from "vue";
import Router from "vue-router";
import index from "@/views/index";
import basicinfo from "@/views/basicinfo";
import marOperEles from "@/views/marOperEles";
import marOperEle from "@/views/marOperEle";
import result from "@/views/result";
import depanalysis from  "@/views/depanalysis";
import seresults from "@/views/seresults"; //返回结果列表页
import resshow from "@/views/resshow";
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
       path: "/depanalysis/resshow",
       name: "resshow",
       component: resshow
    }   
  ]
});
