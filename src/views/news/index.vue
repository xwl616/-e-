<template>
    <div class="news above">
        <router-link to="" v-for="(item, index) in newsList" :key="index"  
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
        <div class="news-wrap">
            <div class="news-img">
                <img :src="item.pic">
            </div>
            <div class="news-title">
                <span>{{item.title}}</span>
                <div class="newws-item">
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
            return {
                newsList:[],
                page: 1,
                
            }
        },
        methods: {
            loadMore(){},
            // loadMore() {
            //     this.loading = true;
            // setTimeout(() => {
            //     let last = this.newsList[this.newsList.length - 1];
            //     for (let i = 1; i <= 10; i++) {
            //     this.newsList.push(last + i); 
            // }
            // this.loading = false;
            // }, 2500);
            // },
            getData(){
                this.$axios.get('/news/newsList.do?page=1&rows=10&type=0').then(res => {
                    if(res.code == 1){
                        this.newsList = res.rows
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
.news a{
    text-decoration: none;
}
.news-wrap{
    width: 100%;
    height: 101px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666;
    .news-img{
        img{
            width: 80px;
            height: 80px;
            margin: 10px 10px;
        }
    }
    .news-title{
        flex: 1;
        margin-top: 10px;
        color: #333;
    }
    .newws-item{
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