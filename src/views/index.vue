<template>
  <div>
    <top></top>
    <!-- <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in slide_imgs">
           <img :src="item.slide_img">
      </el-carousel-item>
    </el-carousel> -->
    <div class="ser_wrap" :style="{backgroundImage: 'url(' +bg + ')'}">
      <div class="search">
        <search :size="size"></search>
      </div>
    </div>
    <div class="info">
      <div class="name">
        <span class="news" :class="{'active' : flag}" @click="showcont('01')">热点新闻</span>
        <span class="company" :class="{'active' : !flag}" @click="showcont('02')">热点公司</span>
      </div>
      <div class="content">
        <transition enter-active-class="animated slideInLeft">
          <div class="hotnews" v-if="flag">
              <div v-for="item in hotnews" class="text item">
                <a :href="item.newsHref"> {{item.newsTitle}}</a>
              </div>
          </div>
         </transition>   
          
        <transition enter-active-class="animated slideInRight">

          <div class="hotcoms" v-if="!flag">
              <div v-for="item in hotcoms" class="text item">
                {{item.companyName}}
              </div>
          </div>
         </transition>   
      </div>
    </div>
    <bottom></bottom>
    <!-- <div class="hot">
      <div class="hot_item">
          <el-card class="box-card" :body-style="{ height: '300px',overflow:'auto' }">
            <div slot="header" class="clearfix">
              <span style="line-height: 20px;">热点公司</span>
            </div>
            <div v-for="item in hotcoms" class="text item">
              {{item.companyName}}
            </div>
          </el-card>
          <img class="hot_c" :src="hot_c" >
      </div>
      <div class="hot_item">
          <img class="hot_n" :src="hot_n" >
          <el-card class="box-card" :body-style="{ height: '300px',overflow:'auto' }">
            <div slot="header" class="clearfix">
              <span style="line-height: 20px;">热点新闻</span>
            </div>
            <div v-for="item in hotnews" class="text item">
              <a :href="item.newsHref"> {{item.newsTitle}}</a>
            </div>
          </el-card>
      </div>
    </div> -->
    
  </div>
</template>

<script>
import top from './../components/top.vue'
import search from './../components/search.vue'
import bottom from './../components/bottom.vue'
import { companyList } from '../assets/data/data.js'
import store from './../store'
import animate from 'animate.css/animate.css'

export default {
  components: { top, search ,bottom},
  name: 'index',
  beforeRouteEnter: (to, from, next) => {
    store.dispatch('updateHotcoms', { cb: next })
    store.dispatch('updateHotnews', { cb: next })
  },
  data() {
    return {
      flag:true,
      size: "large",
      bg: require('./../assets/imgs/ser_bg2.jpg'),
      hot_n:require('./../assets/imgs/hot_1.png'),
      hot_c:require('./../assets/imgs/hot_2.png'),
      slide_imgs:[
         {slide_img:require('./../assets/imgs/slide_1.jpg')},
         {slide_img:require('./../assets/imgs/slide_2.jpg')},  
      ]
    }
  },
  computed: {
    hotcoms() {
      return this.$store.getters.getHotcoms
    },
    hotnews() {
      return this.$store.getters.getHotnews
    },
  },
  methods:{
    showcont(num){
      if(num === '01'){
        console.log("热点新闻");
        this.flag = true;
      }
      if(num === '02'){
        console.log("热点公司");
        this.flag = false;
      }

    }
  }
  // mounted() {

  // this.$ajax({
  //   method: 'post',
  //   url: 'http://121.42.29.188:9775/text',
  //   // data:{
  //   //   a:"a",
  //   //   b:"b"
  //   // }
  // }).then(response => {
  //   // success callback
  //   console.log(response)
  // }, response => {
  //   // error callback
  // })
  // },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin:0;
}
.ser_wrap {
    /* position: relative;   */
    /* top:60px;   */
  background: no-repeat center;
  background-size: 100% 100%;
  width: 100%;
  height: 200px; 
   padding-top:20%; 
   opacity: 0.9; 
  /* filter: alpha(opacity=70) */
    /* z-index: -1;   */
}

.search {
  
  width: 50%;
  margin: 0 auto;
  margin-top: -90px; 
}
.info{
  position: relative;
  z-index: 9;
  height:300px;
   background-color: #fff;
   width: 50%;
   margin: 0 auto;
   margin-top:-220px;
   border-radius: 4px;
   box-shadow:1px 1px 10px 1px #abcdef ;
   /* padding:10px; */
}
.info .name{
   padding:20px 20px 10px;
   display: flex;
   justify-content: space-around;
   font-size: 14px;
  color: rgba(0,0,0,.54);
}
.info .name span{
  width:50%;
  text-align:center;
  display: inline-block;
}
.active{
  color:#3D90F0;
}
.content{
  display: flex;
  overflow: hidden;
  padding:0px 30px;
  
}
.hotnews,.hotcoms{
  padding:0 20px;
  width:100%;
  background-color: #fafafa;
  border-radius: 2px;
  color: #3d90f0;
  font-weight: 700;
}

.hot {
  width: 1000px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 60px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 40%;
}

.hot_item:nth-of-type(1) .box-card {
  float:left;
}

.hot_item:nth-of-type(2) .box-card{
   float:right;
}
.hot_item:nth-of-type(2) {
  margin-top:80px;
}
.hot_item{
  width:100%;
  overflow:hidden;
}
.hot_c{
  float:right;
  width: 40%;
}
.hot_n{
  float:left;
  width: 40%;
}
a {
  text-decoration: none;
}

.el-carousel {
  margin-top: 60px;
}

.el-carousel__item img {
  width:100%;
}
</style>
