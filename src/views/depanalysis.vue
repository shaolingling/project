<template>
    <div>
        <toptwo></toptwo>
        <div class="wrap">
            <div class="company_name">{{companyName}}</div>
            <span class="property">市场分析</span>
            <span class="arrow">--></span>
            <span class="property">产品分析</span>
            <span class="arrow">--></span>
            <span class="property">专利分析</span>
            <span class="arrow">--></span>
            <span class="property">人才分析</span>
        </div>
        <div class="tip">温馨提示：按照箭头方向逐一分析，可以得到更加个性化的分析结果</div>
        <div class="left_wrap">
            <div class="title">{{analyProName}}属性选择</div>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
             <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="right_wrap">
           <div class="title">
                 选择后的匹配结果展示
           </div>
        </div>
    </div>
</template>

<script>
import toptwo from './../components/toptwo.vue'

export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        }
    },
    components: { toptwo },
    name: 'depanalysis',
    computed: {
        companyName() {
            return this.$store.getters.getCompanyInfo.name || JSON.parse(sessionStorage.getItem("companyInfo")).name
        },
        companyId() {
            return this.$store.getters.getCompanyInfo.id || JSON.parse(sessionStorage.getItem("companyInfo")).id
        },
        analyProName() {
            return this.$store.getters.getAnalysisProperty.name || JSON.parse(sessionStorage.getItem("analysisProperty")).name
        },
        analyProId() {
            return this.$store.getters.getAnalysisProperty.id || JSON.parse(sessionStorage.getItem("analysisProperty")).id
        },

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company_name {
    position: absolute;
    left: 80px;
    font-weight: bold;
}

.wrap {
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
}

.tip {
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
}

.left_wrap {
    margin-left: 80px;
    margin-top: 40px;
    font-size: 18px;
    width:20%;
    float:left
    
}
.left_wrap .title{
    text-align: center;
}
.el-select{
    display: block;
    margin-top: 20px;
    
}
.right_wrap{
    float: left;
    width:70%;
    border: 1px solid #ddd;
    min-height: 400px;
     margin-top: 40px;
     margin-left: 40px;
}
.right_wrap .title{
    background-color: #eee;
      font-size: 18px;
      line-height:40px;
      padding-left: 20px;
}
</style>
