<template>
    <div>
        <toptwo></toptwo>
        <h4>检索结果</h4>
        <div>
            <!--<el-table :data="companys"   style="width: 60% ; margin: 0 auto;" @row-click="alert" >
                <el-table-column prop="name" label="公司名称" width="180">
                </el-table-column>
                <el-table-column prop="regCap" label="注册资本" width="180">
                </el-table-column>
                <el-table-column prop="legalRep" label="法定代表人">
                </el-table-column>
                <el-table-column prop="estabTime" label="成立时间">
                </el-table-column>
                <el-table-column prop="involLiti" label="涉诉">
                </el-table-column>
                <el-table-column prop="operating" label="经营">
                </el-table-column>
                <el-table-column prop="assetTrans" label="资产交易">
                </el-table-column>
            </el-table>-->

            <table>
                <tr class="title"><th>公司名称</th><th>注册资本</th><th>法定代表人</th><th>成立时间</th><th>涉诉</th><th>经营</th><th>资产交易</th></tr>
                <tr class="content" v-for="item in companys" @click="basicInfo(item.companyId,item.companyName)">
                    <td>{{item.companyName}}</td>
                    <td>{{item.regCap}}</td>
                    <td>{{item.legalRep}}</td>
                    <td>{{item.estabTime}}</td>
                    <td>{{item.involLiti}}</td>
                    <td>{{item.operating}}</td>
                    <td>{{item.assetTrans}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import toptwo from './../components/toptwo.vue'
export default {
    components: { toptwo },
    name: 'seresults',
    computed: {
        companys() {
            if (this.$store.getters.getSeresults.length === 0) {
                return JSON.parse(sessionStorage.getItem("seresults"))
            } else {
                return this.$store.getters.getSeresults
            }
        },
    },
    methods:{
        basicInfo(id,name){
            debugger
             this.$store.dispatch('updateCompany',{id:id,name:name})
             sessionStorage.setItem("companyInfo",JSON.stringify({id:id,name:name}))  
             this.$router.push({ name: 'basicinfo' })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {  
    margin-left: -800px;
}
table{
    font-size: 18px;
    width:60%;
    margin:0 auto; 
    text-align: center;
    
}
table tr.title{
    background-color: #eee;
    height:40px;
}
table tr{
  cursor: pointer;
}
td{
    height:50px;
    width:100px;
}
</style>
