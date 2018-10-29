<template>
    <div class="Integraldetail above">
        <div class="wrap">
            <div class="wrap-row cleanfix">
                <div class="wrap-title fll">
                    <div>查看新闻眼</div>
                    <div class="item">2018-10-24 20:31:11</div>
                </div>
                <div class="wrap-item flr">+0.1</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                token: '',
                params: {
                    page: 1,
                    rows: 10
                }
            }
        },
        methods: {
            getData(){  
                this.token = this.$store.state.token
                let token = this.token
                console.log(token)
                let config = {
                    headers: {
                        'token': token
                    }
                }
                var url = `http://211.67.177.56:8080/hhdj/integral/integralList.do?`
                axios.get(url, {params: {page: 1, rows: 10}},  config ).then(res => {
                    console.log(res)
                })
                // this.$axios.fetch('get','/integral/integralList.do?', this.params,
                //  config).then(res => {
                //     console.log(res)
                // })
            }
        },
        created() {
            this.getData()
        },
    }
</script>

<style scoped lang='scss'>
.wrap{
    padding: 16px;
    line-height: 2;
    border-bottom: 1px solid #ddd;
    .item{
        font-size: 12px;
    }
    .wrap-item{
        color: #f00;
    }
}
</style>