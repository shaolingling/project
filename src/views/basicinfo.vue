<template>
    <div>
        <toptwo></toptwo>
        <h2>{{companyName}}</h2>
        <div class="basic_info">
            <span>基本信息</span>
            <!--<ul>
                    <li @click="getBasicInfo('01')">工商资料</li>
                    <li @click="getBasicInfo('02')">新闻事件</li>
                    <li @click="getBasicInfo('03')">涉诉事件</li>
                    <li @click="getBasicInfo('04')">经营活动</li>
                    <li @click="getBasicInfo('05')">拥有专利</li>
                    <li @click="getBasicInfo('06')">交易股票</li>
                    <li @click="getBasicInfo('07')">市场份额</li>
                    <li @click="getBasicInfo('08')">合作企业</li>
                </ul>-->
            <el-button @click="getBasicInfo('01')">工商资料</el-button>
            <el-button @click="getBasicInfo('02')">新闻事件</el-button>
            <el-button @click="getBasicInfo('03')">涉诉事件</el-button>
            <el-button @click="getBasicInfo('04')">经营活动</el-button>
            <el-button @click="getBasicInfo('05')">拥有专利</el-button>
            <el-button @click="getBasicInfo('06')">交易股票</el-button>
            <el-button @click="getBasicInfo('07')">市场份额</el-button>
            <el-button @click="getBasicInfo('08')">合作企业</el-button>
    
        </div>
        <div class="wrap">
            <div class="result">
                <div class="result_inner">
                    {{basicInfo}}
                </div>
            </div>
            <div class="depth_info">
                <span>深度信息</span>
                <!--<ul>
                                <li @click="depanalysis('01','市场')">市场分析</li>
                                <li @click="depanalysis('02','产品')">产品分析 </li>
                                <li @click="depanalysis('03','专利')">专利分析</li>
                                <li @click="depanalysis('04','人才')">人才分析</li>
                            </ul>-->
                <el-button @click="depanalysis('01','市场')">市场分析</el-button>
                <el-button @click="depanalysis('02','产品')">产品分析</el-button>
                <el-button @click="depanalysis('03','专利')">专利分析</el-button>
                <el-button @click="depanalysis('04','人才')">人才分析</el-button>
            </div>
    
        </div>
    </div>
</template>

<script>
import toptwo from './../components/toptwo.vue'

export default {
    components: { toptwo },
    name: 'basicinfo',
    computed: {
        companyName() {
            debugger
            return this.$store.getters.getCompanyInfo.name || JSON.parse(sessionStorage.getItem("companyInfo")).name
        },
        companyId() {
            debugger
            return this.$store.getters.getCompanyInfo.id || JSON.parse(sessionStorage.getItem("companyInfo")).id
        },
        basicInfo() {
            return this.$store.getters.getBasicInfo || JSON.parse(sessionStorage.getItem("basicInfo"));
        }
    },
    methods: {
        depanalysis(id, name) {
            this.$router.push({ name: "depanalysis" })
            this.$store.dispatch('updateAnalysisProperty', { companyId: this.companyId, basicPropertyId: id })
            debugger
            sessionStorage.setItem("analyProInfo", JSON.stringify({ name: name, id: id }))
        },
        getBasicInfo(id) {
            this.$store.dispatch('updateBasicInfo', { companyId: this.companyId, basicPropertyId: id })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
}

.basic_info {
    text-align: center;
}

.basic_info ul,
.basic_info span {
    display: inline-block;
    font-size: 18px;
}

.basic_info span {
    padding: 10px 18px;
}

.basic_info li {
    display: inline-block;
    margin-left: 20px;
    border: 1px solid #ddd;
    padding: 10px 18px;
    cursor: pointer;
}
 
.depth_info {
    width: 20%;
    float: left;
    text-align: center;
}
 
/*.depth_info li {
    margin-top: 30px;
    border: 1px solid #ddd;
    padding: 10px 18px;
    cursor: pointer;
}*/

.depth_info .el-button {

    width: 100%;
    float: left;
    margin-top: 30px;
    margin-left: 0;
}

.result {
    width: 80%;
    float: left;
}

.result_inner {
    border: 1px solid #ddd;
    margin: 10px 60px;
    min-height: 400px;
}

.wrap {
    margin: 50px 100px;
    font-size: 18px;
    overflow: hidden;
}
</style>
