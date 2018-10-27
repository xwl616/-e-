<template>
    <div class="modify above">
        <div class="modify-wrap above">
            <form class="modify-form">
                旧密码:
                <input type="password">
                新密码:
                <input type="password">
                确认密码:
                <input type="password">
                <button>确定</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang='scss'>
.modify-form{
    width: 300px;
    height: auto;
    margin: 0 auto;
    color: #666;
    line-height: 2.5;
    margin-top: 90px;
    input{
        width: 100%;
        height: 40px;
        margin-bottom: 14px;
        border-radius: 6px;
	    background:none;  
	    outline:none;  
	    border:1px solid #666;  
    }
    button{
        width: 100%;
        background: #e3574f;
        padding: 10px;
        color: #fff;
        border-radius: 6px;
        line-height: 2;
        border: none;
    }
}
</style>