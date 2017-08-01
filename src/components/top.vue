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
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .header{
   overflow: hidden;
   padding-bottom: 30px;
   border-bottom: 1px solid #ddd;
 }
  .logo{
    float : left;  
  }
  .logo{
    margin-left:80px;
  }
  .nav{
    margin-left: 500px;
  }
  .reg_load{
    float:right;
    margin-right:80px; 
  }
  .nav li{
    float:left;
    margin-right: 20px;
  } 
  .load{
    margin-right: 10px;
  }
</style>
