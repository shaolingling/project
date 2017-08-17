<template>
  <div>
    <div class="header">
      <div class="logo">logo</div>
      <ul class="nav">
        <li>产品介绍</li>
        <li>客户案例</li>
        <li>关于我们</li>
      </ul>
      <div class="reg_load">  
        <span class="load">登陆</span>
        <span class="register">注册</span> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  overflow: hidden;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  position: fixed;
  background-color: #fff;
  top:0;
  left:0;
  right:0;
  z-index: 999;
  height:30px;
}
.logo {
  position: absolute;
  left: 80px;
  top:16px;
}
 
.reg_load {
  position: absolute;
  right: 80px;
  top:16px;
  color:blue;
}
 
.nav li {
  display: inline-block;
  margin-right: 40px;
  margin-top:20px;
}

.load {
  margin-right: 10px;
}
</style>
