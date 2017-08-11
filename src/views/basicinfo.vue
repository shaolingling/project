<template>
    <div>
        <toptwo></toptwo>
        <h2>{{companyName}}</h2>
        <div class="basic_info">
            <span>基本信息</span>
            <ul>
                <li @click="getBasicInfo('01')">工商资料</li>
                <li>新闻事件</li>
                <li>涉诉事件</li>
                <li>经营活动</li>
                <li>拥有专利</li>
                <li>交易股票</li>
                <li>市场份额</li>
                <li>合作企业</li>
            </ul>
        </div>
        <div class="wrap">
            <div class="result">
                <div class="result_inner">
                    <ul>
                        <li>{{basicInfo}}</li>
                    </ul>
                </div>
            </div>
            <div class="depth_info">
                <span>深度信息</span>
                <ul>
                    <li @click="depanalysis('01','市场')">市场分析</li>
                    <li @click="depanalysis('02','产品')">产品分析 </li>
                    <li @click="depanalysis('03','专利')">专利分析</li>
                    <li @click="depanalysis('04','人才')">人才分析</li>
                </ul>
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
            return this.$store.getters.getCompanyInfo.name || JSON.parse(sessionStorage.getItem("companyInfo")).name
        },
        companyId() {
            return this.$store.getters.getCompanyInfo.id || JSON.parse(sessionStorage.getItem("companyInfo")).id
        },
        basicInfo() {
            return this.$store.getters.getBasicInfo||JSON.parse(sessionStorage.getItem("basicInfo"));
        }
    },
    methods: {
        depanalysis(id, name) {
            this.$router.push({ name: "depanalysis" })
            this.$store.dispatch('updateAnalysisProperty', { id: id, name: name })
            sessionStorage.setItem("analysisProperty", JSON.stringify({ id: id, name: name }))
        },
        getBasicInfo(id) {
            this.$store.dispatch('updateBasicInfo',{companyId:this.companyId,basicPropertyId:id})
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
}

.depth_info {
    width: 20%;
    float: left;
    text-align: center;
}

.depth_info li {
    margin-top: 30px;
    border: 1px solid #ddd;
    padding: 10px 18px;
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
