<template>
    <div class="bg" >
        <toptwo></toptwo>
        <h4>检索结果</h4>
        <div class="con_bg">
            <div class="ser_res">搜索结果</div>
            <div class="triangle"></div>
            <el-table :data="companys"   style="width: 80% ; margin: 50px auto 0 auto;" @row-click='basicInfo($event)' >
                <el-table-column prop="companyName" label="公司名称" width="180">
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
            </el-table> 
               <!--<table>
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
            </table>-->
            <h4 class="event">为了向您显示相关程度最高的结果，我们过滤合并了一些相似结果条目。</h4>
            <ul class="related">
               <li>
                  <div class="title">法国一男子用锤子袭击女性致1伤 高喊“真主至上”</div>
                   <div class="time">2017-09-15 </div> 
                   <div class="content">据今日俄罗斯报道,一名男子在法国里昂市用锤子袭击了两名女性,造成其中一名女性受伤。</div>
               </li>
               <li><div class="title">李建霖:高位回撤后仍要看涨,下周金价站稳90看涨1340</div>
                  <div class="time">2017-08-12 </div> 
                  <div class="content">日线报收一根锤子线,昨晚的行情果真爆炸,深夜在1290美元做多,止损在下方1286附近的投资者朋友,已然有很多扫损出局,及时跟空也挽回一些损失,近日个人同样也说过,避险情绪下多空都要走一走,受阻未能站稳一定将进行回撤,幅度不会太大,未能跌破下方多头强势支撑1278-1272美元,多头格局将发展不变,周线的收官,...</div>
               </li>
               <li>
                  <div class="title">法国一男子用锤子袭击女性致1伤 高喊“真主至上”</div>
                   <div class="time">2017-09-15 </div> 
                   <div class="content">据今日俄罗斯报道,一名男子在法国里昂市用锤子袭击了两名女性,造成其中一名女性受伤。</div>
               </li>
               <li><div class="title">李建霖:高位回撤后仍要看涨,下周金价站稳90看涨1340</div>
                  <div class="time">2017-08-12 </div> 
                  <div class="content">日线报收一根锤子线,昨晚的行情果真爆炸,深夜在1290美元做多,止损在下方1286附近的投资者朋友,已然有很多扫损出局,及时跟空也挽回一些损失,近日个人同样也说过,避险情绪下多空都要走一走,受阻未能站稳一定将进行回撤,幅度不会太大,未能跌破下方多头强势支撑1278-1272美元,多头格局将发展不变,周线的收官,...</div>
               </li>
               <li>
                  <div class="title">法国一男子用锤子袭击女性致1伤 高喊“真主至上”</div>
                   <div class="time">2017-09-15 </div> 
                   <div class="content">据今日俄罗斯报道,一名男子在法国里昂市用锤子袭击了两名女性,造成其中一名女性受伤。</div>
               </li>
               <li><div class="title">李建霖:高位回撤后仍要看涨,下周金价站稳90看涨1340</div>
                  <div class="time">2017-08-12 </div> 
                  <div class="content">日线报收一根锤子线,昨晚的行情果真爆炸,深夜在1290美元做多,止损在下方1286附近的投资者朋友,已然有很多扫损出局,及时跟空也挽回一些损失,近日个人同样也说过,避险情绪下多空都要走一走,受阻未能站稳一定将进行回撤,幅度不会太大,未能跌破下方多头强势支撑1278-1272美元,多头格局将发展不变,周线的收官,...</div>
               </li>
            </ul>
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
 
        basicInfo(event){
            debugger
             this.$store.dispatch('updateCompany',{id:event.companyId,name:event.companyName})
             sessionStorage.setItem("companyInfo",JSON.stringify({id:event.companyId,name:event.companyName}))  
             this.$router.push({ name: 'basicinfo' })
        }
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
    
    top:60px;
    padding-top:80px;
}
h4.event{
    font-weight:normal;
    width:80%;
    margin:0 auto; 
    margin-top:40px;
    border-top:1px solid #eee;
    font-style:italic;
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
 
.ser_res{
    width:100px;
    height:40px;
    background-color:#20a0ff;
    color:#fff;
    text-align:center;
    line-height:40px;
    position:absolute;
    top:20px;
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
    top:61px;
    z-index:-1;
}
.related{
    width:80%;
    margin:20px auto 0 auto;
}
.related .title{
    color: #20a0ff;
}
.related li{
    border-bottom:1px solid  #eee;
    margin-top:20px;
    margin-bottom:20px;
    list-style-type: disc;
}
.related li div{
    margin-bottom:10px;
}
</style>
