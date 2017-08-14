<template>
    <div>
        <toptwo></toptwo>
        <h3>{{analyProInfo.name}}用户需求</h3>
        <div class="echart">
            <div id="echart_fir"></div>
            <div id="echart_sec"></div>
        </div>
    </div>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/chart/funnel');

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
        optionFir() {
            return {
                title: {
                    text: '未来一周气温变化',
                    subtext: '纯属虚构'
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
                    text: '漏斗图',
                    subtext: '纯属虚构'
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
        }
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        var myChartFir = echarts.init(document.getElementById('echart_fir'));
        // 绘制图表
        myChartFir.setOption(this.optionFir);
        var myChartSec = echarts.init(document.getElementById('echart_sec'));
        // 绘制图表
        debugger
        myChartSec.setOption(this.optionSec);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    text-align: center;
}

#echart_fir {
    width: 100%;
    height: 400px;
}

#echart_sec {
    width: 600px;
    height: 600px;
    margin: 0 auto;
    margin-top: 20px;
}
 
</style>
