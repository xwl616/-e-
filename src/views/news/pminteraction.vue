<template>
    <div class="pminteraction above">
        <div class="pminteraction-wrap" v-for="(item,index) in pminteractionList" :key="index">
            <div class="pminteraction-content">
                <div class="pminteraction-top cleanfix">
                    <div class=" fll">
                        <img class="images" :src="item.header">
                    </div>
                    <div class="pminteraction-left fll">
                        <span>5555</span>
                        <div class="pminteraction-item">
                            <img src="../../assets/时间.png">
                            <span class="item">{{item.currentTime}}</span>
                            <img src="../../assets/声音.png">
                            <span class="item">公开</span>
                        </div>
                    </div>
                    <div class="pminteraction-right flr">
                        <img src="../../assets/党员互动icon.png">
                    </div>
                    <div class="sentence">
                        {{item.content}}
                    </div> 
                    <div class="reply flr">
                        <img src="../../assets/回复.png">
                        回复
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                pminteractionList:[]
            }
        },
        methods:{
            getData(){
                this.$axios.fetch('get','/forum/forumList.do?page=1&rows=10&type=0&cates=0').then(res => {
                    console.log(res)
                    if(res.code == 1){
                        this.pminteractionList = res.rows
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
.pminteraction-wrap{
    width: 100%;
    height: 100%;
    .pminteraction-content{
        width: 100%;
        height: auto;
        .pminteraction-top{
            width: 343px;
            height: 120px;
            padding: 16px;
            border-bottom: 12px solid #ddd;
            .images{
                width: 34px;
                height: 34px;
                border-radius: 50%;
                
            }
            .pminteraction-left{
                color: #333;
                font-size: 18px;
            }
            .pminteraction-item{
                .item{
                    font-size: 12px;
                }
            }
        }
    }
    .sentence{
        padding: 10px 0;
        clear: both;
    }
}
</style>