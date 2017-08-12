<template>
  <div>
    <top></top>
    <div class="search">
      <search :size="size"></search>
    </div>
    <div class="hot">
      <el-card class="box-card" :body-style="{ height: '300px',overflow:'auto' }">
        <div slot="header" class="clearfix">
          <span style="line-height: 20px;">热点公司</span>
        </div>
        <div v-for="item in hotcoms" class="text item">
          {{item.companyName}}
        </div>
      </el-card>
      <el-card class="box-card" :body-style="{ height: '300px',overflow:'auto' }">
        <div slot="header" class="clearfix">
          <span style="line-height: 20px;">热点新闻</span>
        </div>
       <div v-for="item in hotnews" class="text item">
         <a :href="item.newsHref"> {{item.newsTitle}}</a>
        </div> 
      </el-card>
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
      size: "large"
    }
  },
  computed: {
    hotcoms() {
      return this.$store.getters.getHotcoms
    },
    hotnews() {
      return this.$store.getters.getHotnews
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
.search {
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
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
  float: left;
}

.box-card:nth-of-type(2) {
  float: right;
}
a{
  text-decoration: none;
}
</style>
