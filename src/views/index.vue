<template>
  <div>
    <top></top>
    <div class="search">
      <input placeholder="请输入公司名称" type="text" v-model="companyName">
      <span @click="search">搜索</span>
    </div>
  </div>
</template>

<script>
import top from './../components/top.vue'
import { companyList } from '../assets/data/data.js'
import store from './../store'
export default {
  components: { top },
  name: 'index',
  data() {
    return {
      companyName: ""
    }
  },
  mounted() {
    // this.$ajax({
    //   method: 'get',
    //   url: 'http://121.42.29.188:9773/login',
    //   // data: {
    //   //   name: 'wise',
    //   //   info: 'wrong'
    //   // }
    // }).then(response => {
    //   // success callback
    //   console.log(response)
    // }, response => {
    //   // error callback
    // })
  },
  methods: {
    search() {
      let _this = this
      store.dispatch('updateCompany', _this.companyName.trim())
      sessionStorage.setItem("companyName", _this.companyName.trim());
      companyList.forEach(function (element) {
        if (_this.companyName.trim() == element.name) {
          _this.$router.push({ name: 'company', params: { id: element.id } })
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  margin-top: 100px;
}

.search input {
  width: 300px;
  height: 30px;
}

.search span {
  cursor: pointer;
}
</style>
