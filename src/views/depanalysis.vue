<template>
    <div class="bg">
      <toptwo></toptwo>
      <div class="con_bg">
        <div class="ser_res">{{companyName}}</div>
        <div class="triangle"></div>
        <div class="wrap">
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
            <div class="title">{{analyProInfo.name}}属性选择</div>
            <el-select v-for="(item,index) in analysisProperty" v-model="opt[index]" :key="item.id" placeholder="请选择">
                <el-option v-for="initem in item.options" :key="initem.value" :label="initem.label" :value="initem.label">
                </el-option>
            </el-select>
            <el-button @click="confirm" class="confirm">确认</el-button>
            <!--<el-select v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                             <el-select v-model="value" placeholder="请选择">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>-->
        </div>
        <div class="right_wrap">
            <div class="title">
                选择后的匹配结果展示
            </div>
           <!-- <ul class="res_wrap">
                <li><span>名称</span><span>匹配度</span><span>真实性</span></li>
                <li v-for="item in depAnalyRes" class="res_item" @click="resShow(item.id)">
                        <span>{{item.content}}</span>
                        <span>{{item.matching}}</span>
                        <span>{{item.validity}}</span>
                </li>
            </ul>-->
            <table class="res_wrap">
               <tr><th>名称</th><th>匹配度</th><th>真实性</th></tr>
               <tr v-for="item in depAnalyRes" class="res_item" @click="resShow(item.id)" ><td>{{item.content}}</td><td>{{item.matching}}</td><td>{{item.validity}}</td></tr>
            </table>
        </div>
      </div>
    </div>
</template>

<script>
import toptwo from './../components/toptwo.vue'
import reqData from "../reqData.js";
export default {
    data() {
        return {
            opt: []
        }
    },
    components: { toptwo },
    name: 'depanalysis',
    computed: {
        selectOpts() {
            let _this = this;
            return this.analysisProperty.map(function (item, index) {
                return { id: item.id, value: _this.opt[index] }
            })
        },
        companyName() {
            return this.$store.getters.getCompanyInfo.name || JSON.parse(sessionStorage.getItem("companyInfo")).name
        },
        companyId() {
            return this.$store.getters.getCompanyInfo.id || JSON.parse(sessionStorage.getItem("companyInfo")).id
        },
        analyProInfo() {
            return JSON.parse(sessionStorage.getItem("analyProInfo"))
        },
        // analyProId() {
        //     return this.$store.getters.getAnalysisProperty.id || JSON.parse(sessionStorage.getItem("analysisProperty")).id
        // },
        analysisProperty() {
            if (this.$store.getters.getAnalysisProperty.length === 0) {
                return JSON.parse(sessionStorage.getItem("analysisProperty"))
            } else {
                return this.$store.getters.getAnalysisProperty
            }
        },
        depAnalyRes() {
            //  if (this.$store.getters.getDepAnalyRes.length === 0) {
            //  return JSON.parse(sessionStorage.getItem("depAnalyRes"))
            // } else {
            return this.$store.getters.getDepAnalyRes
            // }
        }
    },
    methods: {
        confirm() {
            this.$store.dispatch('updateDepAnalyRes', { companyId: this.companyId, analysisPropertyId: this.analyProInfo.id, selectOpts: this.selectOpts })
        },
        resShow(id) {
            let ps = [
                {
                    apiName: "line"
                }, {
                    apiName: 'funnel',
                }
            ]
            reqData.all(ps, (res1, res2) => {
                let res1Data = res1.data
                let res2Data = res2.data
                let [code1,data1] = [res1Data.code, res1Data.data]
                let [code2,data2] = [res2Data.code, res2Data.data]
                if (code1 === '200' && code2 === '200') {
                    sessionStorage.setItem("resshow", JSON.stringify(data1));
                    sessionStorage.setItem("resshowSec", JSON.stringify(data2));   
                    this.$router.push({ name: "resshow" })
                }  
                
            }).catch(err => {
               console.log(err);
            })
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
   background-color:#ededed;
   position:fixed;
   top:0;
   bottom:0;
   left:0;
   right:0;
    overflow:auto;
}
.con_bg{
    background-color:#fff;
    width:80%;
    position:absolute;
    left:10%;
    min-height: 100%;
    
}
.company_name {
    position: absolute;
    left: 100px;
    font-weight: bold;
    top:140px;
}

.wrap {
    text-align: center;
    font-size: 18px;
    margin-top: 180px;
}

.tip {
    text-align: center;
    font-size: 16px;
    margin-top: 20px;
    font-style:italic;
}

.left_wrap {
    margin-left: 80px;
    margin-top: 40px;
    font-size: 18px;
   
    float: left
}

.left_wrap .title {
    text-align: center;
}

.el-select {
    display: block;
    margin-top: 20px;
}

.right_wrap {
    float: left;
    width: 60%;
    border: 1px solid #ddd;
    min-height: 400px;
    margin-top: 40px;
    margin-left: 40px;
    margin-bottom: 20px;
}

.right_wrap .title {
    background-color: #eee;
    font-size: 18px;
    line-height: 40px;
    padding-left: 20px;
}

.confirm {
    float: right;
    margin-top: 20px;
    width: 100px;
}

.res_item {
    cursor: pointer;
    height: 40px;
}
.res_item:hover{
     background-color:#eee;
}
.res_item td,tr th {
   width:100px;
   text-align:center;
}

.res_wrap {
    padding: 20px;
}
.ser_res{
    width:300px;
    height:40px;
    background-color:#20a0ff;
    color:#fff;
    text-align:center;
    line-height:40px;
    position:absolute;
    top:100px;
    left:-20px;
}
.triangle{
    position:absolute;
    width:0;
    height:0;
    border-style:solid;
    border-width:20px;
    border-color:transparent;
    border-top:20px solid #20a0ff;
    left:-20px;
    top:141px;
    z-index:-1;
}
</style>
