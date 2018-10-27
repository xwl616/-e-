<template>
    <div class="pmstatus above">
        <router-link to="" v-for="(item,index) in pmstatusList" :key="index">
        <div class="pmstatus-wrap">
            <div class="pmstatus-img">
                <img :src="item.pic">
            </div>
            <div class="pmstatus-title">
                <span>{{item.title}}</span>
                <div class="pmstatus-item">
                    <span>{{item.currentTime}}</span>
                    <div>
                        <img src="../../assets/12-eye.png">
                        <span>{{item.count}}</span>
                    </div>
                </div>
            </div>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                pmstatusList: []
            }
        },
        methods: {
            getData(){
                this.$axios.fetch('get','/news/newsList.do?page=1&rows=10&type=5').then(res => {
                    if(res.code == 1){
                        this.pmstatusList = res.rows
                    }
                })
            }
        },
        created() {
            this.getData()
        },
    }
</script>

<style scope lang='scss'>
.pmstatus a{
    text-decoration: none;
}
.pmstatus-wrap{
    width: 100%;
    height: 101px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666;
    .pmstatus-img{
        img{
            width: 80px;
            height: 80px;
            margin: 10px 10px;
        }
    }
    .pmstatus-title{
        flex: 1;
        margin-top: 10px;
        color: #333;
    }
    .pmstatus-item{
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        margin-right: 10px;
        display: flex;
        justify-content: space-between;
        img{
          width: 10px;
          height: 10px;
          padding-right: 10px;
        }
    }
}   
</style>