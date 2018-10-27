<template>
    <div class="ahactivities above">
        <router-link to="/" v-for="(item,index) in ahactivitiesList" :key='index'>
        <div class="ahactivities-wrap">
            <div class="ahactivities-img">
                <img :src="item.pic">
            </div>
            <div class="ahactivities-title">
                {{item.title}}
                <div class="ahactivities-item">
                    {{item.currentTime}}
                    <div>
                        <img src="../../assets/12-eye.png">
                        {{item.count}}
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
                ahactivitiesList: []
            }
        },
        methods:{
            getData(){
                this.$axios.fetch('get','/news/newsList.do?page=1&rows=10&type=1').then(res => {
                    console.log(res)
                    if(res.code == 1){
                        this.ahactivitiesList = res.rows
                    }
                })
            }
        },
        created() {
            this.getData()
        },
    }
</script>

<style scoped lang='scss'>
.ahactivities a{
    text-decoration: none;
}
.ahactivities-wrap{
    width: 100%;
    height: 101px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666;
    .ahactivities-img{
        img{
            width: 80px;
            height: 80px;
            margin: 10px 10px;
        }
    }
    .ahactivities-title{
        flex: 1;
        margin-top: 10px;
        color: #333;
    }
    .ahactivities-item{
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