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
    export default {
        data(){
            return{
                
            }
        },
        methods: {
            getData(){
                this.$axios.fetch('get','/integral/integralList.do?page=1&rows=10').then(res => {
                    
                })
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