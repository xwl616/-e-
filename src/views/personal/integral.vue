<template>
    <div class="integral above">
        <div class="integral-wrap">
            <div class="integral-img">
                <img src="../../assets/jifen.png">
                <span class="integral-digit">{{userData.totalScore}}</span>
            </div>
            <router-link to="/Integraldetail">
            <div class="integral-info">
                <div class="integral-img ">
                    <img src="../../assets/lxjf.png">
                    <span>积分明细</span>
                </div>
                <div class="picture">
                    <img src="../../assets/right.png">
                </div>
            </div>
            </router-link>
            <div class="integral-rule">
                <div class="rule-title">
                    <span>积分规则</span>
                    <img src="../../assets/wenhao.png">
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>登录APP</span>
                    <div class="rule1">5</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>完善个人信息</span>
                    <div class="rule1">2</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>查看积分</span>
                    <div class="rule1">1</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>按时交纳党费</span>
                    <div class="rule1">10</div>
                </div>
            </div>
           <div class="integral-time">
                <div class="rule">
                    <span>查看通知</span>
                    <div class="rule1">2</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>了解学院工作状态</span>
                    <div class="rule1">5</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>上交思想汇报经审核通过</span>
                    <div class="rule1">5</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>主动学习相关文件</span>
                    <div class="rule1">10</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>认真撰写心得总结并上交，经审核通过</span>
                    <div class="rule1">5</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>提交个人总结，并参与评议</span>
                    <div class="rule1">2</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>积极参与互动</span>
                    <div class="rule1">5</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>学习党建知识</span>
                    <div class="rule1">5</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>学习党史</span>
                    <div class="rule1">10</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>创先争优事迹</span>
                    <div class="rule1">10</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>学党章，学习近平总书记系列讲话</span>
                    <div class="rule1">10</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>用镜头记录两学一做过程中令人感动的人和事</span>
                    <div class="rule1">3</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>关注并积极参与特色活动</span>
                    <div class="rule1">5</div>
                </div>
            </div>
            <div class="integral-time">
                <div class="rule">
                    <span>制度化、常态化建设</span>
                    <div class="rule1">5</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        computed: {
            ...mapState(['userData'])
        }
    }
</script>

<style scoped lang='scss'>
.integral a{
    text-decoration: none
}
.integral-wrap{
    .integral-img{
        position: relative;
        img{
            width: 100%;
            height: auto;
        }
    }
    .integral-digit{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
    }
}
.integral-info{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #888;
    .integral-img {
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
            font-size: 16px;
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
.integral-rule{
    width: 100%;
    height: auto;
    background: rgb(238, 238, 238);
    .rule-title{
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        line-height: 2;
        color: #666;
        font-size: 14px;
        img{
            width: 18px;
            height: 18px;
            padding-top: 5px;
        }
    }
}
 .integral-time{
    width: 100%;
    height: auto;
    font-size: 14px;
    color: rgb(153, 153, 153);
    line-height: 2;
    border-bottom: 1px solid #999999;
    .rule{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 350px;
    }
   .rule1{
        color: #f00;
   }
 }
</style>