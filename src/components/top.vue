<template>
  <div>
    <el-menu :default-active="activeIndex2" class="header el-menu-demo" mode="horizontal">
      <div >
        <!-- logo -->
      </div>
      <div>
          <el-menu-item index="1">产品介绍</el-menu-item>
          <el-menu-item index="2">客户案例</el-menu-item>
          <el-menu-item index="3">关于我们</el-menu-item>
          <el-menu-item index="4">联系我们</el-menu-item>
      </div>
      <div class="reg_load">  
        <span class="load">登陆</span>
        <span class="register">注册</span> 
      </div>
    </el-menu>

    <!-- <div class="header">
      <div class="logo">logo</div>
      <ul class="nav">
        <li>产品介绍</li>
        <li>客户案例</li>
        <li>关于我们</li>
      </ul>
      <div class="reg_load">  
        <span class="load"> <img :src="loadbg">登陆</span>
        <span class="register"> <img :src="regbg">注册</span> 
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'top',
  data() {
    return { 
      activeIndex2: '1',    
      loadbg:require('./../assets/imgs/loadbg.png'),
      regbg:require('./../assets/imgs/regbg.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding-bottom: 30px;
  text-align: center;
  position: fixed;
  background-color: #fff;
  top:0;
  left:0;
  right:0;
  z-index: 999;
  height:30px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5) !important;
  font-weight: bold;
}
.reg_load {
    color: #3d90f0;
    text-align: center;
    line-height: 60px;
}
.reg_load span{
  display: inline-block;
  height:56px;
  width:52px;
  font-size: 16px;
  /* border-bottom: 5px solid ; */
}
.reg_load span:hover{
  /* background-color:#C4CFE5;  */
  color:#77b1f4;
  border-bottom: 4px solid #FFB579;
}
 .load{
   margin-right:10px;
 }
</style>
