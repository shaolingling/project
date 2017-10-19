<template>
    <div class="bg">
        <toptwo></toptwo>
        <h3>{{analyProInfo.name}}用户需求</h3>
        <div class="echart">
            <el-card>
                <div id="echart_fir"></div>
            </el-card>
            <el-card>
                <div id="echart_sec"></div>
            </el-card>
            <el-card>
                <div id="echart_third"></div>
            </el-card>
            <el-card>
                <div id="echart_fouth"></div>
            </el-card>
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
require('echarts/lib/chart/funnel');
require('echarts/lib/chart/sankey');

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
            debugger
            return JSON.parse(sessionStorage.getItem("resshowSec"))
        },
        dataThird() {
            debugger
            return JSON.parse(sessionStorage.getItem("resshowThird"))
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
                    data: ['最高气温']
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
                        name: '最高气温',
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
            debugger
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
                    data: this.dataSec["legend"]
                },
                calculable: true,
                series: [
                    {
                        name: '漏斗图',
                        type: 'funnel',
                        x: '10%',
                        y: 60,
                        //x2: 80,
                        y2: 60,
                        width: '80%',
                        // height: {totalHeight} - y - y2,
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending', // 'ascending', 'descending'
                        gap: 10,
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
        optionThird() {
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
                    data: this.dataThird[0],
                    // data: [[28604,77,17096869,'Australia'],[31163,77.4,27662440,'Canada'],[1516,68,1154605773,'China'],[13670,74.7,10582082,'Cuba'],[28599,75,4986705,'Finland'],[29476,77.1,56943299,'France'],[31476,75.4,78958237,'Germany'],[28666,78.1,254830,'Iceland'],[1777,57.7,870601776,'India'],[29550,79.1,122249285,'Japan'],[2076,67.9,20194354,'North Korea'],[12087,72,42972254,'South Korea'],[24021,75.4,3397534,'New Zealand'],[43296,76.8,4240375,'Norway'],[10088,70.8,38195258,'Poland'],[19349,69.6,147568552,'Russia'],[10670,67.3,53994605,'Turkey'],[26424,75.7,57110117,'United Kingdom'],[37062,75.4,252847810,'United States']],
                    type: 'scatter',
                    symbolSize: function(data) {
                        return Math.sqrt(data[2]) / 5e2;
                    },
                    label: {
                        emphasis: {
                            show: true,
                            formatter: function(param) {
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
                }]
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
        debugger
        myChartThird.setOption(this.optionThird);
        console.log(this.dataThird)
        //3秒之后获取第四张图的数据
        window.setTimeout(() => {
            reqData
                .req({
                    apiName: "mulberry",
                })
                .then(res => {
                    res = res.data;
                    console.log(res);
                    if (res && res.code === "200") {
                        let dataFouth = res.data;
                        let optionFouth = {
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
                                    data: dataFouth["links"],
                                    links: dataFouth["nodes"],
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
                        let myChartFouth = echarts.init(document.getElementById('echart_fouth'));
                        myChartFouth.setOption(optionFouth);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }, 3000)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
    background-color: #ededed;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
}

h3 {
    text-align: center;
    margin-top: 100px;
}

.el-card {
    width: 40%;
    float: left;
    margin: 40px 60px;
    overflow: auto;
}

#echart_fir {
    width: 100%;
    height: 400px;
}

#echart_sec {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    margin-top: 20px;
}

#echart_third {
    width: 100%;
    height: 600px;
}

#echart_fouth {
    width: 100%;
    height: 600px;
}
</style>
