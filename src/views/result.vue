<template>
    <div>
        <top></top>
        <div class="name_wrap">
            <h3 class="cname">{{company}}</h3>
            <h4>{{eleName}}需求</h4>
            <h4>{{result}}</h4>
        </div>
        <div class="wrap_net">
            <el-tabs type="card">
                <el-tab-pane label="以往工作岗位">
    
                </el-tab-pane>
                <el-tab-pane label="当前岗位的匹配度">
    
                </el-tab-pane>
                 <el-tab-pane label="适合的工作岗位">
    
                </el-tab-pane>
                <el-tab-pane label="为了可能的离职概率">
    
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import top from './../components/top.vue'
import { mapGetters } from 'vuex'
export default {
    components: { top },
    name: 'result',
    data() {
        return {

        }
    },
    computed: {
          company() {
            return this.$store.getters.getCompanyName || sessionStorage.getItem("companyName")
        },
          eleName() {
            return this.$store.getters.getMarOperEle || sessionStorage.getItem("marOperEle")
        },
          result() {
            return this.$store.getters.getResult || sessionStorage.getItem("result")
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    float: left;
    padding-left: 180px;
}

.name_wrap h4 {
    float: left;
    padding-left: 100px;
}
.wrap_net {
    margin: 0 auto;
    width: 80%;
    margin-top: 90px;
}
</style>
