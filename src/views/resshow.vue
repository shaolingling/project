<template>
    <div class="bg">
        <toptwo></toptwo>
        <h3>{{analyProInfo.name}}用户需求</h3>
        <div class="echart">
            <div class="lineone">
                <el-card class="cardone">
                    <div id="echart_fir"></div>
                </el-card>
                <el-card class="cardthree">
                    <div id="echart_third"></div>
                </el-card>
                <el-card class="cardfive">
                    <div id="echart_fifth"></div>
                </el-card> 
            </div>
            <div class="linetwo">
                <div class="two_left">
                    <el-card class="cardtwo">
                        <div id="echart_sec"></div>
                    </el-card>
                </div>
                <div class="two_right">
                    <el-card class="cardfour">
                        <div id="echart_fouth"></div>
                    </el-card>
                    <el-card class="cardsix">
                        <div id="echart_sixth"></div>
                    </el-card>
                </div>
                
            </div>
                      
        </div>
    </div>
</template>
<script>
import reqData from "../reqData.js";
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/scatter');
// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/chart/funnel');
require('echarts/lib/chart/sankey');
require('echarts/lib/chart/graph');


import toptwo from '../components/toptwo.vue'
import store from './../store'
export default {
    components: { toptwo },
    name: 'resshow',
    computed: {
        analyProInfo() {
            return JSON.parse(sessionStorage.getItem("analyProInfo"))
        },
        dataFir() {
            return JSON.parse(sessionStorage.getItem("resshow"))
        },
        dataSec() {
            // debugger
            return JSON.parse(sessionStorage.getItem("resshowSec"))
        },
        dataThird(){
            // debugger
             return JSON.parse(sessionStorage.getItem("resshowThird"))
        },
         dataFouth() {
            // debugger
            return JSON.parse(sessionStorage.getItem("resshowFouth"))
        },
        dataFifth() {
            return JSON.parse(sessionStorage.getItem("resshowFifth"))
        },
        dataSixth() {
            return JSON.parse(sessionStorage.getItem("resshowSixth"))
        },
        optionFir() {
            return {
                title: {
                    text: '推荐',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['匹配度']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: this.dataFir["x"]
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    {
                        name: '匹配度',
                        type: 'line',
                        data: this.dataFir["y"],
                        markPoint: {
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: '平均值' }
                            ]
                        }
                    },

                ]
            }

        },
        optionSec() {
            // debugger
            return {
                title: {
                    text: '匹配',
                    subtext: ''
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
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
                legend: {
                    // data: this.dataSec["legend"]
                },
                calculable: true,
                series: [
                    {
                        name: '漏斗图',
                        type: 'funnel',
                        x: '10%',
                        y: 50,
                        // x2: 80,
                        y2: 20,
                        width: '80%',
                        // height: {totalHeight} - y - y2,
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending', // 'ascending', 'descending'
                        gap: 5,
                        itemStyle: {
                            normal: {
                                // color: 各异,
                                borderColor: '#fff',
                                borderWidth: 1,
                                label: {
                                    show: true,
                                    position: 'inside'
                                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                                },
                                labelLine: {
                                    show: false,
                                    length: 10,
                                    lineStyle: {
                                        // color: 各异,
                                        width: 1,
                                        type: 'solid'
                                    }
                                }
                            },
                            emphasis: {
                                // color: 各异,
                                borderColor: 'red',
                                borderWidth: 5,
                                label: {
                                    show: true,
                                    formatter: '{b}:{c}%',
                                    textStyle: {
                                        fontSize: 20
                                    }
                                },
                                labelLine: {
                                    show: true
                                }
                            }
                        },
                        data: 
                            this.dataSec["seriesData"]          
                    }
                ]
            }
        },
        optionThird(){
            return {
                    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                    offset: 0,
                    color: '#f7f8fa'
                }, {
                    offset: 1,
                    color: '#cdd0d5'
                }]),
                title: {
                    text: ''
                },
                xAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    scale: true
                },
                series: [{
                    name: '',
                    //   data: [[1, 80, 8000000, "经济管理"],[2, 76, 780, "金融学"],[3, 70, 700, "通信与信息处理"],
                    //            [4, 60, 500, "市场营销"],[5, 40, 860, "信息管理和信息系统"],[6, 40, 660, "计算机科学与技术"],
                    //             [7, 60, 960, "计算机应用"]],
                    data:this.dataThird[0],
                    // data: [[28604,77,17096869,'Australia'],[31163,77.4,27662440,'Canada'],[1516,68,1154605773,'China'],[13670,74.7,10582082,'Cuba'],[28599,75,4986705,'Finland'],[29476,77.1,56943299,'France'],[31476,75.4,78958237,'Germany'],[28666,78.1,254830,'Iceland'],[1777,57.7,870601776,'India'],[29550,79.1,122249285,'Japan'],[2076,67.9,20194354,'North Korea'],[12087,72,42972254,'South Korea'],[24021,75.4,3397534,'New Zealand'],[43296,76.8,4240375,'Norway'],[10088,70.8,38195258,'Poland'],[19349,69.6,147568552,'Russia'],[10670,67.3,53994605,'Turkey'],[26424,75.7,57110117,'United Kingdom'],[37062,75.4,252847810,'United States']],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(120, 36, 50, 0.5)',
                            shadowOffsetY: 5,
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(251, 118, 123)'
                            }, {
                                offset: 1,
                                color: 'rgb(204, 46, 72)'
                            }])
                        }
                    }
                } ]
            }
        },
        optionFouth() {
            //  debugger
            return {
                title: {
                    text: 'Sankey Diagram'
                },
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series: [
                    {
                        type: 'sankey',
                        layout: 'none',
                        data: this.dataFouth["nodes"],
                        links: this.dataFouth["links"],
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderColor: '#aaa'
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: 'source',
                                curveness: 0.5
                            }
                        }
                    }
                ]
            }
        },
        optionFifth() {
            return {
                title: {
                    text: 'Les Miserables',
                    // subtext: 'Default layout',
                    // top: 'bottom',
                    // left: 'right'
                },
                tooltip: {
                    show:true
                },
                legend: [{
                    selectedMode: 'single',
                    // data: categories.map(function (a) {
                    //     return a.name;
                    // })
                }],
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [
                    {
                        name: 'Les Miserables',
                        type: 'graph',
                        layout: 'none',
                        data:this.dataFifth['links'],
                        links:this.dataFifth['nodes'], 
                        categories: [
                            {
                            "name": "负载",
                            "symbol": "rect",
                            "label": {
                            }
                            },
                            {
                            "name": "中间件",
                            "symbol": "rect"
                            },
                            {
                            "name": "端口号",
                            "symbol": "roundRect"
                            },
                            {
                            "name": "数据库",
                            "symbol": "roundRect"
                            },
                            {
                            "name": "用户名",
                            "symbol": "roundRect"
                            }
                        ],
                        roam: true,
                        label: {
                            normal: {
                                position: 'right',
                                formatter: '{b}'
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: 'source',
                                curveness: 0.3
                            }
                        }
                    }
                ]
            }
        },
        optionSixth(){
            return {
                title: {
                    text: 'Les Miserables',
                    subtext: 'Default layout',
                    // top: 'bottom',
                    // left: 'right'
                },
                tooltip: {},
                legend: [{
                    // selectedMode: 'single',
                    data: this.dataSixth["categories"],
                }],
                animation: false,
                series : [
                    {
                        name: 'Les Miserables',
                        type: 'graph',
                        layout: 'force',
                        data:this.dataSixth["data"],
                        links:this.dataSixth["links"],
                        categories:this.dataSixth["categories"],
                        roam: true,
                        label: {
                            normal: {
                                position: 'right'
                            }
                        },
                        force: {
                            repulsion: 100
                        }
                    }
                ]
            }
        }
    },
   
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        var myChartFir = echarts.init(document.getElementById('echart_fir'));
        // 绘制图表
        myChartFir.setOption(this.optionFir);
        var myChartSec = echarts.init(document.getElementById('echart_sec'));
        // 绘制图表
       
        myChartSec.setOption(this.optionSec);
        var myChartThird = echarts.init(document.getElementById('echart_third'));
        // 绘制图表
        //   debugger
        myChartThird.setOption(this.optionThird);
        console.log(this.dataThird);
        var myChartFouth = echarts.init(document.getElementById('echart_fouth'));
        // 绘制图表
        // debugger
        myChartFouth.setOption(this.optionFouth);
        var myChartFifth = echarts.init(document.getElementById('echart_fifth'));
        // 绘制图表
        myChartFifth.setOption(this.optionFifth);

        var myChartSixth = echarts.init(document.getElementById('echart_sixth'));
        // 绘制图表
        myChartSixth.setOption(this.optionSixth);
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
h3 {
    text-align: center;
    margin-top:100px;
}
.lineone{
    width: 100%;
    display: flex;
}
.linetwo{
    display: flex;
}
.two_left{
   width:32.4%;
   margin-right:12px;
}
.two_right{
    width:66%;
}
.el-card{
     width:100%;
    margin:10px 5px;
    overflow:auto;
}

#echart_fir {
     width:100%; 
    height: 400px; 
}

#echart_sec {
    width:100%;
    height: 600px;
    margin: 0 auto;
    margin-top: 20px;
}
#echart_third{
     width:100%;
    height: 400px;
}
#echart_fouth{
     width:100%;
    height: 450px;
}
#echart_sixth{
     width:100%;
    height: 350px;
}
#echart_fifth{
     width:100%;
    height: 400px;
}
</style>
