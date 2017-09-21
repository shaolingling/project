<template>
  <div>
    <top></top>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="hot">
      <el-card class="box-card" :body-style="{ height: '300px',overflow:'auto' }">
        <div slot="header" class="clearfix">
          <span style="line-height: 20px;">热点公司</span>
        </div>
        <div v-for="item in hotcoms" class="text item">
          {{item.companyName}}
        </div>
      </el-card>
      <img class="hot_c" :src="hot_c" >
       <img class="bot_n" :src="bot_n" >
      <el-card class="box-card" :body-style="{ height: '300px',overflow:'auto' }">
        <div slot="header" class="clearfix">
          <span style="line-height: 20px;">热点新闻</span>
        </div>
        <div v-for="item in hotnews" class="text item">
          <a :href="item.newsHref"> {{item.newsTitle}}</a>
        </div>
      </el-card>
    </div>
    <div class="ser_wrap" :style="{backgroundImage: 'url(' +bg + ')'}">
      <div class="search">
        <search :size="size"></search>
      </div>
    </div>
  </div>
</template>

<script>
import top from './../components/top.vue'
import search from './../components/search.vue'
import { companyList } from '../assets/data/data.js'
import store from './../store'

export default {
  components: { top, search },
  name: 'index',
  beforeRouteEnter: (to, from, next) => {
    store.dispatch('updateHotcoms', { cb: next })
    store.dispatch('updateHotnews', { cb: next })
  },
  data() {
    return {
      size: "large",
      bg: require('./../assets/imgs/ser_bg.jpg'),
      bot_n:require('./../assets/imgs/hot_1.png'),
      bot_c:require('./../assets/imgs/hot_2.png'),
    }
  },
  computed: {
    hotcoms() {
      return this.$store.getters.getHotcoms
    },
    hotnews() {
      return this.$store.getters.getHotnews
    }
  },
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
  background: no-repeat center;
  background-size: cover;
  width: 100%;
  height: 200px;
  padding-top: 140px;
  opacity: 0.7;
  filter: alpha(opacity=70)
}

.search {
  width: 50%;
  margin: 0 auto;
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
  width: 480px;
}

.box-card:nth-of-type(1) {
 
}

.box-card:nth-of-type(2) {
   
}

a {
  text-decoration: none;
}

.el-carousel {
  margin-top: 60px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
