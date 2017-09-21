<template>
    <div class="bg">
        <toptwo></toptwo>
        <div class="con_bg">
            <div class="ser_res">{{companyName}}</div>
            <div class="triangle"></div>
            <div class="basic_info">
              <el-tabs type="border-card">
                 <!--<el-tab-pane label="公司信息树状图"><div id="tree"></div></el-tab-pane>-->
                <el-tab-pane label="公司信息网状图"><div id="net"></div></el-tab-pane>
                <el-tab-pane label="工商资料" @click="getBasicInfo('01')">
                    <ul>
                        <li>法定代表人：罗永浩</li>
                        <li>注册资本：2567.272万元人民币</li>
                        <li>登记状态：存续（在营、开业、在册）</li>
                        <li>成立日期：2012年05月28日</li>
                    </ul>       
                </el-tab-pane>
                <el-tab-pane label="新闻事件" @click="getBasicInfo('02')">
                <ul>
                    <li>2017/08/25  罗永浩：因精力问题，停止更新得到专栏</li>
                    <li>2017/08/23  今日头条回应被百度收购传闻；乐视移动转让易到股份来抵消 3.24 亿元债务| 极客早知道</li>
                    <li>2017/08/07  罗永浩透露锤子将融资10亿元，去年最困难的时候差点被收购 </li>
                </ul>
                </el-tab-pane>
                <el-tab-pane label="涉诉事件" @click="getBasicInfo('03')">
                  <ul>
                        <li>侵害作品信息网络传播权48次</li>
                        <li>侵害录音录像制作者权纠纷48次</li>
                        <li>网络购物合同纠纷2次</li>
                  </ul>
                
             </el-tab-pane>
                <el-tab-pane label="经营活动" @click="getBasicInfo('04')">经营活动</el-tab-pane>
                <el-tab-pane label="拥有专利" @click="getBasicInfo('05')">拥有专利</el-tab-pane>
                <el-tab-pane label="交易股票" @click="getBasicInfo('06')">交易股票</el-tab-pane>
                <el-tab-pane label="市场份额" @click="getBasicInfo('07')">市场份额</el-tab-pane>
                <el-tab-pane label="合作企业" @click="getBasicInfo('08')">合作企业</el-tab-pane>
             </el-tabs>
            </div>
            <div class="ser_res dep">深度信息</div>
            <div class="triangle dep"></div>
            <div class="wrap"> 
               <div class="depth_info">
                  
                                        <!--<ul>
                                            <li @click="depanalysis('01','市场')">市场分析</li>
                                            <li @click="depanalysis('02','产品')">产品分析 </li>
                                            <li @click="depanalysis('03','专利')">专利分析</li>
                                            <li @click="depanalysis('04','人才')">人才分析</li>
                                        </ul>-->
                <el-button   @click="depanalysis('01','市场')">市场分析</el-button>
                <el-button   @click="depanalysis('02','产品')">产品分析</el-button>
                <el-button   @click="depanalysis('03','专利')">专利分析</el-button>
                <el-button  @click="depanalysis('04','人才')">人才分析</el-button>
               </div>
               <img class="pc" :src="pc">
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
            pc:require('./../assets/imgs/pc.png')
 
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
                            //name : "Force tree",
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
h3 {
    text-align: center;
    margin-top:100px;
}

.basic_info {
   margin-top:180px;
}

/* .basic_info ul,*/
.basic_info span {
    display: inline-block;
    font-size: 18px;
}

.basic_info span {
    padding: 10px 18px;
}

.basic_info li {
  /*   display: inline-block;
    margin-left: 20px;
    border: 1px solid #ddd;
    padding: 10px 18px;
    cursor: pointer;*/
    padding: 10px 18px;
}
.el-tabs{
    width:80%;
    margin-left:10%;
   
    
}
.el-tab-pane{
    overflow:auto;
    width:100%;
    min-height:400px;
}
 

.depth_info {
  
    width: 40%;
    text-align: center;
    float:left;
}
.pc{
    width:40%;
    margin-left:10%;
    margin-top:20px;
}

 .depth_info li {
    margin-top: 30px;
    border: 1px solid #ddd;
    padding: 10px 18px;
    cursor: pointer;   
} 

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
    margin: 120px 100px;
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
 
.ser_res.dep{
  top:720px;
}
.triangle.dep{
  top:761px;
}
</style>
