import Vue from "vue";
import Router from "vue-router";
import index from "@/views/index";
import company from "@/views/company";
import marOperEles from "@/views/marOperEles";
import marOperEle from "@/views/marOperEle";
import result from "@/views/result";
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
      path: "/company/:id",
      name: "company",
      component: company
    },
    {
      path: "/company/:id/marOperEles",
      name: "marOperEles",
      component: marOperEles
    },
    {
      path: "/company/:id/marOperEles/marOperEle/:ele",
      name: "marOperEle",
      component: marOperEle
    },
    {
      path: "/company/:id/marOperEles/marOperEle/:ele/result/:id",
      name: "result",
      component: result
    }
  ]
});
