<template>
    <div>
        <el-autocomplete popper-class="my-autocomplete" :size="size" class="inline-input" v-model="companyName" icon="search" :fetch-suggestions="querySearch" placeholder="请输入公司名称" :on-icon-click="search">
        </el-autocomplete>
    </div>
</template>

<script>
import Vue from 'vue'

// Vue.component('my-zh', {
//     functional: true,
//     render: function (h, ctx) {
//        // var item = ctx.props.item;
//         return h('ul', ctx.data, [
//             h('li', { attrs: { class: 'name' } }, ["1"]),
//           //  h('div', { attrs: { class: 'name' } }, [item.value]),
//            // h('span', { attrs: { class: 'addr' } }, [item.address])
//         ]);
//     },
//     props: {
//         item: { type: Object, required: true }
//     }
// });
// var myAppendTo = Vue.extend({
//     template: '<p>appendTo</p>'
// })
//new myAppendTo().$mount().$appendTo('#app');//appendTo
export default {
    name: 'search',
    data() {
        return {
            companyName: "",
        }
    },
    props: ['size'],
    computed: {
        companys() {
            if (localStorage.historyItems === undefined) {
                return []
            } else {
                let companylist = [];
                localStorage.historyItems.split('|').forEach(function (element) {
                    companylist.push({ "value": element })
                });
                return companylist
            }
        }
    },
    mounted() {
        var autoDom = document.getElementsByClassName("el-autocomplete-suggestion")[0]
        var newdiv = document.createElement("div");
        newdiv.id = "clean-his";
        var newtext = document.createTextNode("清除历史记录");
        newdiv.appendChild(newtext);
        newdiv.addEventListener("click", function () {
            alert("1")
            this.clearHistory()
        });
        newdiv.style.backgroundColor ="#fff"
        newdiv.style.height ="40px"
        newdiv.style.lineHeight ="40px"
       newdiv.style.cursor ="pointer"
        autoDom.appendChild(newdiv);
        console.log(newdiv)
    },
    methods: {
        querySearch(queryString, cb) {
            var companys = this.companys;
            var results = queryString ? companys.filter(this.createFilter(queryString)) : companys;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (companyName) => {
                return (companyName.value.indexOf(queryString) >= 0);
            };
        },
        search() {
            let _this = this
            this.$store.dispatch('updateSeresults')
            this.setHistoryItems(_this.companyName.trim())
            _this.$router.push({ name: 'seresults' })
        },
        setHistoryItems(keyword) {
            let { historyItems } = localStorage;
            if (historyItems === undefined) {
                localStorage.historyItems = keyword;
            } else {
                const onlyItem = historyItems.split('|').filter(e => e != keyword);
                if (onlyItem.length > 0) { historyItems = keyword + '|' + onlyItem.join('|'); }
                localStorage.historyItems = historyItems;
            }
        },
        clearHistory() {
            localStorage.removeItem('historyItems');
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
