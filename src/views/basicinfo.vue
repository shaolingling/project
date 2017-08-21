<template>
    <div>
        <toptwo></toptwo>
        <h3>{{companyName}}</h3>
        <div class="basic_info">
            <el-tabs type="border-card">
                <el-tab-pane label="公司信息树状图"><div id="tree"></div></el-tab-pane>
                <el-tab-pane label="公司信息网状图"><div id="net"></div></el-tab-pane>
                <el-tab-pane label="工商资料" @click="getBasicInfo('01')">工商资料</el-tab-pane>
                <el-tab-pane label="新闻事件" @click="getBasicInfo('02')">新闻事件</el-tab-pane>
                <el-tab-pane label="涉诉事件" @click="getBasicInfo('03')">涉诉事件</el-tab-pane>
                <el-tab-pane label="经营活动" @click="getBasicInfo('04')">经营活动</el-tab-pane>
                <el-tab-pane label="拥有专利" @click="getBasicInfo('05')">拥有专利</el-tab-pane>
                <el-tab-pane label="交易股票" @click="getBasicInfo('06')">交易股票</el-tab-pane>
                <el-tab-pane label="市场份额" @click="getBasicInfo('07')">市场份额</el-tab-pane>
                <el-tab-pane label="合作企业" @click="getBasicInfo('08')">合作企业</el-tab-pane>
           </el-tabs>
        </div>
        <div class="wrap">
            <!--<div class="result">
                <el-card class="result_inner">
                    {{basicInfo}}
                </el-card>
            </div>-->
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
import reqData from "../reqData.js";
// 引入 ECharts 主模块
//var echarts = require('echarts/lib/echarts');
//var echarts = require('echarts');
export default {
    components: { toptwo },
    name: 'basicinfo',
   // beforeRouteEnter: (to, from, next) => {
        // reqData
        //     .req({
        //         apiName: "company",
        //     })
        //     .then(res => {
        //         next((vm) => {
        //             res = res.data;
        //             console.log(res);
        //             if (res && res.code === "200") {
        //                 let data = res.data;
        //                 console.log(JSON.parse(data))
        //                 debugger
        //                 vm.treeData = JSON.parse(data)
        //                 // 基于准备好的dom，初始化echarts实例
        //                 var myChartFir = echarts.init(document.getElementById('tree'));
        //                 // 绘制图表
        //                 debugger
        //                 myChartFir.setOption(vm.optionTree);
        //             }
        //         })

        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });

            // let ps = [
            //     {
            //         apiName: "company"
            //     }, {
            //         apiName: 'companygxwl',
            //     }
            // ]
            // reqData.all(ps, (res1, res2) => {
            //     let res1Data = res1.data
            //     let res2Data = res2.data
            //     let [code1,data1] = [res1Data.code, res1Data.data]
            //     let [code2,data2] = [res2Data.code, res2Data.data]
            //     if (code1 === '200' && code2 === '200') {
            //          next((vm) => {
            //              debugger
            //               vm.treeData = JSON.parse(data1)
            //             // 基于准备好的dom，初始化echarts实例
            //              var myChartFir = echarts.init(document.getElementById('tree'));
            //             // 绘制图表
                   
            //               myChartFir.setOption(vm.optionTree);
            //               console.log(data2)
            //                vm.links=JSON.parse(data2)["links"]
            //                 vm.nodes=JSON.parse(data2)["nodes"]
            //                    var myChartFir = echarts.init(document.getElementById('net'));
            //             // 绘制图表
                   
            //               myChartFir.setOption(vm.optionNet);

            //          })
            //     }  
                
            // }).catch(err => {
            //    console.log(err);
            // })
     
  //  },
    data() {
        return {
            treeData: [],
            links: [],
            nodes: [],
            constMaxRadius : 10,
            constMinRadius :2,
 
        }
    },
    computed: {
        companyName() {

            return this.$store.getters.getCompanyInfo.name || JSON.parse(sessionStorage.getItem("companyInfo")).name
        },
        companyId() {

            return this.$store.getters.getCompanyInfo.id || JSON.parse(sessionStorage.getItem("companyInfo")).id
        },
        basicInfo() {
            return this.$store.getters.getBasicInfo || JSON.parse(sessionStorage.getItem("basicInfo"));
        },
        optionTree() {
            return {
                title: {
                    text: '树图',
                    subtext: '虚构数据'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: false,

                series: [
                    {
                        name: '树图',
                        type: 'tree',
                        orient: 'horizontal',   // vertical horizontal
                        rootLocation: { x: "30%", y: '50%' }, // 根节点位置  {x: 100, y: 'center'}
                        nodePadding: 10,
                        layerPadding: 200,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    formatter: "{b}",
                                     position: 'right',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: 'bolder'
                                    }
                                },
                                lineStyle: {
                                    color: '#48b',
                                    shadowColor: '#000',
                                    shadowBlur: 3,
                                    shadowOffsetX: 3,
                                    shadowOffsetY: 5,
                                    type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

                                }
                            },
                            emphasis: {
                                label: {
                                    show: true
                                }
                            }
                        },

                        data: this.treeData
                    }
                ]
            }
        },
        optionNet(){
           return {
                    title : {
                        text: 'Force',
                        subtext: 'Force-directed tree',
                        x:'right',
                        y:'bottom'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: '{a} : {b}'
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            restore : {show: true},
                            magicType: {show: true, type: ['force', 'chord']},
                            saveAsImage : {show: true}
                        }
                    },
                    legend: {
                        x: 'left',
                        data:['叶子节点','非叶子节点', '根节点']
                    },
                    series : [
                        {
                            type:'force',
                            name : "Force tree",
                            ribbonType: false,
                            categories : [
                                {
                                    name: '叶子节点'
                                },
                                {
                                    name: '非叶子节点'
                                },
                                {
                                    name: '根节点'
                                }
                            ],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false
                                    },
                                    nodeStyle : {
                                        brushType : 'both',
                                        borderColor : 'rgba(255,215,0,0.6)',
                                        borderWidth : 1
                                    }
                                }
                            },
                            minRadius : this.constMinRadius,
                            maxRadius : this.constMaxRadius,
                            coolDown: 0.995,
                            steps: 10,
                            nodes : this.nodes,
                            links : this.links,
                            steps: 1
                        }
                    ]
            }
        }


    },

    methods: {
        depanalysis(id, name) {
            this.$router.push({ name: "depanalysis" })
            this.$store.dispatch('updateAnalysisProperty', { companyId: this.companyId, basicPropertyId: id })

            sessionStorage.setItem("analyProInfo", JSON.stringify({ name: name, id: id }))
        },
        getBasicInfo(id) {
           
            this.$store.dispatch('updateBasicInfo', { companyId: this.companyId, basicPropertyId: id })
        },
        getTree(){
                    reqData
            .req({
                apiName: "company",
            })
            .then(res => {
                    res = res.data;
                    console.log(res);
                    if (res && res.code === "200") {
                        let data = res.data;
                        console.log(JSON.parse(data))
                        debugger
                        this.treeData = JSON.parse(data)
                        // 基于准备好的dom，初始化echarts实例
                        var myChartFir = echarts.init(document.getElementById('tree'));
                        // 绘制图表
                        debugger
                        myChartFir.setOption(this.optionTree);
                    }
            })
            .catch(err => {
                console.log(err);
            });

        },
        getNet(){
            debugger
             reqData.req({
                apiName: "companygxwl",
            })
            .then(res => {             
                    res = res.data;
                    console.log(res);
                    debugger
                    if (res && res.code === "200") {
                        let data = res.data;
                        console.log(JSON.parse(data))
                         this.links=JSON.parse(data)["links"]
                         this.nodes=JSON.parse(data)["nodes"]
                          var myChartFir = echarts.init(document.getElementById('net'));
                         // 绘制图表
                          myChartFir.setOption(this.optionNet);
                    }

            })
            .catch(err => {
                console.log(err);
            });
        }
         
    },
    mounted(){
         this.getTree()
         this.getNet()
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    text-align: center;
    margin-top:100px;
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
.el-tabs{
    width:60%;
    margin-left:10%;
    float:left;  
    
}
.el-tab-pane{
    overflow:auto;
    width:100%;
  
     min-height:400px;
}
 

.depth_info {
    margin-left: 50px;
    width: 50%;
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

#tree {
    width: 1200px;
    height: 2000px;
   
   
}
#net{
    width: 400px;
    height: 400px;
    margin:0 auto;
   
}
</style>
