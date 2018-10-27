<template>
    <div class="login above">
        <div class="wrap">
            <div class="login-img">
                <img src="../../assets/logo.png">
            </div>
            <form class=" form" @submit.prevent>
                <div class="input-wrap">
                    <input type="text" placeholder="身份证号" v-model="formData.id_card">
                </div>
                <div class="input-wrap">
                    <input type="password" placeholder="密码" v-model="formData.password">
                </div>
                <div class="input-wrap">
                    <mt-button size='large' @click="handleLogin">登录</mt-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
    export default {
        data(){
            return{
                formData: {
                    id_card: '1003',
                    password: '123456',
                }
            }
        },
        methods: {
            handleLogin(){
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                const FormData = this.qs.stringify(this.formData)
                this.$axios.fetch('post',`/user/userLogin.do?${FormData}`).then(res=>{
                    console.log(res)
                    if(res.code == 1){
                        this.$store.commit("GET_USERDATA",res.data)
                        localStorage.setItem('token', res.token)
                        Indicator.close()
                        Toast({
                            message: '登陆成功',
                            iconClass: 'icon icon-success',
                            duration: 1000
                        })
                        this.$router.push({name: 'personal'})
                    }                     
                })
            }
        }
    }
</script>

<style>
.mint-button{
    background: #e3574f;
    font-size: 14px;
    color: #fff;
}
</style>

<style lang="scss">
.wrap{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #c50206;
    padding-top: 80px;
    overflow-y: auto;
    margin-top: -1px;
    margin-bottom: -1px;
    height: auto;
}
.login-img{
    margin:0 82px;
}
.login-img img{
    background: #c50206;
    width: 200px;
}
.form{
    padding-top: 25px;
    width: 300px;
    margin: 0 auto;
    .input-wrap{
        margin-bottom: 20px;
        input{
            width: 100%;
            height: 41px;
            border: 1px solid #ff0;
            border-radius: 4px;
            background: #c7000a;
            font-size: 14px;
            color: #fff;
            
        }
    }
}
</style>