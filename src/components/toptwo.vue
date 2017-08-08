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
}

.logo {
    float: left;
}

.logo {
    margin-left: 80px;
}

.search {
    float: right;
    margin-right: 80px;
}

.goindex {
    float: right;
    margin-right: 80px;
}
</style>
