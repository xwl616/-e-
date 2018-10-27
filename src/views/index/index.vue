<template>
    <div class="index">
        
        <div class="herder">
            <div class="img-left">
                <img src="../../assets/logo.png" class="herder-img">
            </div>
            <router-link to="/login" class="herder-a">登录</router-link>
        </div>
        <div class="swipe">
            <router-link to="">
            <swiper :options="swiperOption" >
                <swiper-slide v-for="(item,index) in swipeList" :key="index">
                    <div class="swipe-img">
                        <img :src="item.imgUrl">
                        <div class="swipe-title">
                            {{item.title}}
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            </router-link>
        </div>
        <div class="main-maun">
            <div class="main-item">
                <router-link to="/news" class="item1"> 
                <div >
                    <img src="../../assets/icon_01.png">
                    <div class="item">信工新闻眼</div>
                </div>
                </router-link>
                <router-link to="/life" class="item1">
                <div>
                    <img src="../../assets/icon_03.png">
                </div>
                 <div class="item">掌上组织生活</div>
                </router-link> 
                <router-link to="/pminteraction" class="item1">
                <div>
                    <img src="../../assets/icon_05.png">
                </div>
                <div class="item">党员互动</div>
                </router-link>
            </div>
            <div class="main-item">
                <router-link to="/albopb" class="item1"> 
                <div>
                    <img src="../../assets/icon_04.png">
                    <div class="item">党建一点通</div>
                </div>
                </router-link>
                
                <router-link to="/pmstatus" class="item1">
                <div>
                    <img src="../../assets/icon_06.png">
                </div>
                 <div class="item">党员亮身份</div>
                </router-link> 
                <router-link to="/tich" class="item1">
                <div>
                    <img src="../../assets/icon_02.png">
                </div>
                <div class="item">党史上的今天</div>
                </router-link>
            </div>
        </div>
        <div class="images">
            <img src="../../assets/banner1.png" alt="">
        </div>
        <div class="footer-img">
            <div class="img-left"></div>
            <div class="img-right">
                <div class="row">
                    <router-link to="/wawp"></router-link>
                    <router-link to="/saaanytime"></router-link>
                </div>
                <div class="row">
                    <router-link to="/systemb"></router-link>
                    <router-link to="/ahactivities"></router-link>
                </div>
            </div>
        </div>
        <teas></teas>
    </div>
    
</template>

<script>
import teas  from "../../components/teas";
export default {
    data() {
        return {
            swiperOption: {
                autoplay: 3000,
            },
            swipeList: []
        }
    },
    components: {
        teas,
    },
    methods: {
        getData(){
            this.$axios.fetch('get','/carousel/carouselList.do?type=0').then(res => {
                if(res.code == 1){
                    this.swipeList = res.rows  
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
.herder{
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background-color: #c50206;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: #fff;
    .img-left {
        margin-top: 6px;
        margin-left: 6px;
        .herder-img{
            width: 130px;
            height: 31px;
        }
    }
}
.swipe{
    margin-top: 50px;
}
.swipe-img{
    img{
        width: 100%;
        height: 188px;
        position: relative;
        overflow-x: auto;
        overflow-y: hidden;
    }
    .swipe-title{
        width: 100%;
        padding-left: 6px;
        line-height: 2.5;
        position: absolute;
        z-index: 998;
        left: 0;
        right: 0;
        bottom: 3px;
        color: #fff;
        font-size: 10px;
        background: rgba(0,0,0, .5);
    }
}
.main-maun{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: -3px;
    width: 100%;
    height: 197px;
    background: url('../../assets/bt_bg.png') no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    .main-item{
        display: flex;
        .item1{
            flex: 1;
            text-align: center;
            text-decoration: none;
            color: #000;
            font-size: 14px;
        }
        img{
           width: 50px;
        }
    }
}
.images img{
    width: 100%;
    height: 90px;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
}
.footer-img{
    display: flex;
    width: 100%;
    height: 165px;
    margin-bottom: 46px;
    margin-top: -5px;
    background: url('../../assets/tese.png') no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    .img-left{
        flex: 1;
    }
    .img-right{
        flex: 2;
        .row{
          display: flex;
          height: 50%;
          a{
            flex: 1;
            height: 100%;
          }
        }
    }
}

</style>
