<template>
    <div class="saaanytime above">
        <div class="saaanytime-content" v-for="(item,index) in saaanytimeList" :key="index">
            <div class="saaanytime-img">
                <img :src="item.pic">
                <div>
                    <span>{{item.title}}</span>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                saaanytimeList: []      
            }
        },
        methods:{
            getData(){
                this.$axios.fetch('get','/news/newsList.do?page=1&rows=10&type=7').then(res => {
                    console.log(res)
                    if(res.code == 1){
                        this.saaanytimeList = res.rows
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
.saaanytime-content{
    width: 100%;
    height: 100%; 
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box; 
    .saaanytime-img{
        width: 50%;
        height: 152px;
        color: #666;
        font-size: 12px;
        text-align: center;
        padding: 16px;
        img{
            width: 155px;
            height: 116px;
        }
    } 
}
</style>