<template>
    <div>
        <el-autocomplete   popper-class="my-autocomplete" :size="size" class="inline-input" v-model="companyName" icon="search" :fetch-suggestions="querySearch" placeholder="请输入公司名称" :on-icon-click="search"></el-autocomplete>
    </div>
</template>
<script>
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
            //this.$store.dispatch('updateCompany', _this.companyName.trim())
            // sessionStorage.setItem("companyName", _this.companyName.trim())
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
.el-autocomplete {
    width: 100%;
}
</style>
