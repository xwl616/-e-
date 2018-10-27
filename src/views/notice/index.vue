<template>
    <div class="notice above">
        <router-link to="" v-for="(item,index) in noticeList" :key="index">
        <div class="notice-wrap">
            <div class="notice-img">
                <img src="../../assets/iconfont.png">
            </div>
            <div class="notice-title">
                <div>
                   {{item.title}}
                </div>
                <div class="notice-item">
                    {{item.currentTime}}
                </div>
            </div>
            
        </div>
        </router-link>
        <teas></teas>
    </div>
</template>

<script>
import teas  from "../../components/teas";
    export default {
        data(){
            return{
                noticeList: []
            }
        },
        components:{
            teas,
        },
        methods: {
            getData(){
                this.$axios.fetch('get','/news/newsList.do?page=1&rows=10&type=2').then(res => {
                    if(res.code == 1){
                        this.noticeList = res.rows
                    }
                })
            }
        },
        created() {
            this.getData()
        },
    }
</script>

<style scoped lang="scss">
.notice a{
    text-decoration: none;
}
.notice-wrap{
    width: 100%;
    height: 97px;
    display: flex;
    border-bottom: 1px solid #333;
    .notice-img{
        img{
            width: 35px;
            height: 37px;
            margin-right: 10px;
            margin: 30px 16px;
        }
    }
    .notice-title{
        width: 274px;
        height: 40px;
        color: #333;
        font-size: 16px;
        padding-top: 16px;
        .notice-item{
            margin: 3px 0;
            color: #666;
            font-size: 10px;
            margin-top: 10px;
        }
    }
}
</style>