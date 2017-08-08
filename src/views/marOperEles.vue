<template>
    <div>
        <top></top>
        <h3 class="cname">{{company}}</h3>
        <div>
            <h4>市场经营要素</h4>
            <ul class="eles">
                <li v-for="element in operEles">
                    <a @click="eleSel(element)">{{element.cname}}</a>
                </li>
    
            </ul>
        </div>
    </div>
</template>

<script>
import top from './../components/top.vue'
import store from './../store'
export default {
    components: { top },
    name: 'marOperEles',
    data() {
        return {

        }
    },
    beforeRouteEnter(to, from, next) {
        store.dispatch('initOperEles', { cb: next })
    },
    computed: {
        company() {
            return this.$store.getters.getCompanyName ||sessionStorage.getItem("companyName")
        },
        operEles() {
           // return operEles
            return this.$store.getters.getOperEles
        }
    },
    methods: {
        eleSel(ele) {
            this.$router.push({ name: 'marOperEle'})   
             this.$store.dispatch('updateMarOperEle',ele.cname)
             sessionStorage.setItem("marOperEle", ele.cname);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    text-align: left;
    padding-left: 180px;
}

.eles {
    overflow: hidden;
    width: 60%;
    margin: 0 auto;
}

.eles li {
    float: left;
    margin: 0 40px 20px 40px;
}
</style>
