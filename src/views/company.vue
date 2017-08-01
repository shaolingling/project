<template>
    <div>
        <top></top>
        <div class="wrap">
            <h3 class="cname">{{company}}</h3>
            <div class="select">
                <span>产品及服务维度</span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="link">
                <router-link :to="{ name:'marOperEles'}">市场经营要素</router-link>
            </div>
        </div>
        <div class="wrap_net">
            <el-tabs type="card">
                <el-tab-pane label="行业竞争对手网络">
                    <compnet></compnet>
                </el-tab-pane>
                <el-tab-pane label="行业合作伙伴网络">
                    <coornet></coornet>
                </el-tab-pane>
            </el-tabs>
    
        </div>
    </div>
</template>

<script>
import top from './../components/top.vue'
import compnet from './../components/compnet.vue'
import coornet from './../components/coornet.vue'
import { companyList } from '../assets/data/data.js'
//import store from './../store'
import { mapGetters } from 'vuex'
export default {
    components: { top, compnet, coornet },
    name: 'company',
    data() {
        return {
            options: [{
                value: '选项1',
                label: '地域'
            }, {
                value: '选项2',
                label: '市场'
            }, {
                value: '选项3',
                label: '产品'
            }, {
                value: '选项4',
                label: '功能'
            }],
            value: "地域"
        }
    },
    computed: {
        // ...mapGetters({
        //     company: 'getCompanyName'
        // })
        company() {
            return this.$store.getters.getCompanyName ||sessionStorage.getItem("companyName")
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cname,
.select,
.link {
    float: left;
}

.cname {
    margin-left: 180px;
    margin-top: 60px;
}

.select {
    margin-left: 100px;
    margin-top: 56px;
}

.link {
    margin-left: 100px;
    margin-top: 56px;
}

.wrap,
.wrap_net {
    overflow: hidden;
}

.wrap_net {
    margin: 0 auto;
    width: 80%;
    margin-top: 50px;
}
</style>
