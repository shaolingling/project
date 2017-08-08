<template>
    <div>
        <top></top>
        <div class="name_wrap">
            <h3 class="cname">{{company}}</h3>
            <h4>{{eleName}}需求</h4>
        </div>
        <ul class="property">
            <li>自然属性
                <el-select v-model="value_n" clearable placeholder="请选择">
                    <el-option v-for="item in options_n" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </li>
            <li>社会属性
                <el-select v-model="value_s" clearable placeholder="请选择">
                    <el-option v-for="item in options_s" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </li>
            <li>专业技能
                <el-select v-model="value_p" clearable placeholder="请选择">
                    <el-option v-for="item in options_p" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </li>
        </ul>
        <div class="result">
            <h4>筛选结果</h4>
            <ul>
                <li v-for="item in reList" @click="itemSel(item)">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import top from './../components/top.vue'
import { result } from '../assets/data/data.js'
import { mapGetters } from 'vuex'
export default {
    components: { top },
    name: 'marOperEle',
    data() {
        return {
            options_n: [{
                value: 'A',
                label: 'A'
            }, {
                value: 'B',
                label: 'B'
            }, {
                value: 'C',
                label: 'C'
            }],
            options_s: [{
                value: 'A',
                label: 'A'
            }, {
                value: 'B',
                label: 'B'
            }, {
                value: 'C',
                label: 'C'
            }],
            options_p: [{
                value: 'A',
                label: 'A'
            }, {
                value: 'B',
                label: 'B'
            }, {
                value: 'C',
                label: 'C'
            }],
            value_n: '',
            value_s: '',
            value_p: ''

        }
    },
    computed: {
        company() {
            return this.$store.getters.getCompanyName || sessionStorage.getItem("companyName")
        },
          eleName() {
            return this.$store.getters.getMarOperEle || sessionStorage.getItem("marOperEle")
        },
        reList() {
            let _this = this
            return result.filter(function (element) {
                debugger
                if (_this.value_n && _this.value_s && _this.value_p) {
                    return element.nature == _this.value_n &&
                        element.society == _this.value_s &&
                        element.profession == _this.value_p
                }
                if (_this.value_n && !_this.value_s && !_this.value_p) {
                    return element.nature == _this.value_n
                }
                if (!_this.value_n && _this.value_s && !_this.value_p) {
                    return element.society == _this.value_s
                }
                if (!_this.value_n && !_this.value_s && _this.value_p) {
                    return element.profession == _this.value_p
                }
                if (_this.value_n && _this.value_s && !_this.value_p) {
                    return element.nature == _this.value_n &&
                        element.society == _this.value_s
                }
                if (_this.value_n && !_this.value_s && _this.value_p) {
                    return element.nature == _this.value_n &&
                        element.profession == _this.value_p
                }
                if (!_this.value_n && _this.value_s && _this.value_p) {
                    return element.society == _this.value_s &&
                        element.profession == _this.value_p
                }

            })
        }
    },
    methods: {
        itemSel(item) {
            this.$router.push({ name: 'result'})
            this.$store.dispatch('updateResult', item.name)
            sessionStorage.setItem("result", item.name);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    float: left;
    padding-left: 180px;
}

.name_wrap h4 {
    float: left;
    padding-left: 100px;
}

.name_wrap {
    overflow: hidden;
    margin-bottom: 30px;
}

ul.property {
    float: left;
    margin-left: 180px;
}

li {
    margin-bottom: 20px;
}

.result {
    width: 500px;
    height: 300px;
    float: left;
    border: 1px solid #ddd;
    margin-left: 100px;
}
</style>
