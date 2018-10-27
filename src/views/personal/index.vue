<template>
    <div class="personal above">
        <div class="personal-wrap">
            <div class="personal-img">
                <img :src="userData.header">
            </div>
            <router-link to="/login">
            <div class="personal-title">
                {{userData.username}}
            </div>    
            </router-link>
        </div>
        <router-link to="/info">
        <div class="personal-info">
            <div class="info-img ">
                <img src="../../assets/person.png">
                <span>个人信息</span>
            </div>
            <div class="picture">
                <img src="../../assets/right.png">
            </div>
        </div>
        </router-link>
        <router-link to="/integral">
        <div class="personal-info">
            <div class="info-img ">
                <img src="../../assets/lxjf.png">
                <span>个人量化积分</span>
            </div>
            <div class="picture">
                <img src="../../assets/right.png">
            </div>
        </div>
        </router-link>
        <router-link to="/modify">
        <div class="personal-info">
            <div class="info-img ">
                <img src="../../assets/xgmm.png">
                <span>修改密码</span>
            </div>
            <div class="picture">
                <img src="../../assets/right.png">
            </div>
        </div>
        </router-link>
        <router-link to="/partyDues">
        <div class="personal-info">
            <div class="info-img ">
                <img src="../../assets/icon3.png">
                <span>党费激纳</span>
            </div>
            <div class="picture">
                <img src="../../assets/right.png">
            </div>
        </div>
        </router-link>
        <div class="personal-btn">
            <button class="btn">退出登录</button>
        </div>
        
    <teas></teas>
    </div>
</template>

<script>
import teas  from "../../components/teas";
import {mapState} from 'vuex'
    export default {
        data(){
            return{
               
            }
        },
        computed: {
            ...mapState(['userData'])
        },
        components: {
            teas,
        }
    }
</script>

<style scoped lang="scss">
.personal a{
    text-decoration: none;
}
.personal-wrap{
    width: 100%;
    height: 140px;
    background: #c50206;
    display: flex;
    flex-direction: column ;
    .personal-img {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        img{
            width: 63px;
            height: 63px;
            border-radius: 50% 50%;
        }
    }
    .personal-title{
        text-align: center;
        color: #fff;
        font-size: 14px;
        line-height: 3;
    }
}
.personal-info{
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666;
    .info-img {
        display: flex;
        justify-content: center;
        img{
            width: 32px;
            height: 34px;
            padding: 10px 11px;
        }
        span{
            padding-top: 16px;
            color: #666;
        }
    }
    .picture{
        img{
           width: 7px;
           height: 14px;
           margin-top: 20px;
           margin-right: 11px;
        }
    }
}
.personal-btn{
    margin-left: 5%;
    margin-top: 40px;
    .btn{
    width: 95%;
    background: #e3574f;
    padding: 10px;
    display: block;
    border: none;
    color: #fff;
    border-radius: 4px;
    line-height: 1.5;
    }
}

</style>