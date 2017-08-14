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
            <ul class="res_wrap">
                <li v-for="item in depAnalyRes" class="res_item" @click="resShow(item.id)">{{item.content}}</li>
            </ul>
        </div>
    
    </div>
</template>

<script>
import toptwo from './../components/toptwo.vue'

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
            this.$ajax({
                method: 'post',
                url: 'http://121.42.29.188:9779/matching',
            }).then(response => {
                // success callback
                console.log(response.data)
                let res = response.data
                if(res.code=="200"){
                    let data = res.data
                    sessionStorage.setItem("resshow", JSON.stringify(data));
                    this.$router.push({ name: "resshow" })
                }
             
            }, response => {
                // error callback
            })

        },

    }
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
    width: 20%;
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
    width: 70%;
    border: 1px solid #ddd;
    min-height: 400px;
    margin-top: 40px;
    margin-left: 40px;
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
    height: 30px;
}

.res_wrap {
    padding: 20px;
}
</style>
