<template>
    <div>
        <div class="header">
            <div class="logo">logo</div>
            <div class="goindex" @click="goindex">返回首页</div>
            <div class="search">
                <search :size="size"></search>
            </div>
        </div>
    </div>
</template>

<script>
import search from './search.vue'
export default {
    components: { search },
    name: 'toptwo',
    data() {
        return {
            size: "small"
        }
    },
    methods:{
        goindex(){
            this.$router.push({ name: 'index'})
        }
    }
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
  background-color: #20a0ff;;
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

.search {
    position: absolute;
     top:16px;
     right:200px;
    
}

.goindex {
    position: absolute;
      top:16px;
    right: 80px;
    cursor:pointer;
}
</style>
