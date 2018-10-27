<template>
    <div class="teas">
       <router-link to="/" class="tea-item" :class="{active: $route.name === 'index'}">
            <i class="iconfont icon-dangwugongkai"></i>
            <div class="tea-title">
               首页
            </div>
       </router-link>
       <router-link to="/notice" class="tea-item" :class="{active: $route.name === 'notice'}">
            <i class="iconfont icon-tongzhi"></i>
            <div class="tea-title">
               通知早知道
            </div>
       </router-link>
       <router-link to="/personal" class="tea-item" :class="{active: $route.name === 'personal'}">
            <i class="iconfont  icon-wode1"></i>
            <div class="tea-title">
               我的党建
            </div>
       </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.teas{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #fafbfe;
    display: flex;
    height: 46px;
    .tea-item{
        flex: 1;
        text-align: center;
        text-decoration: none;
        color: #808080;
        .iconfont{
            font-size: 22px;
        }
    }
    .active{
        border-top: 2px solid #a7000a;
        color: #a7000a;
    }
    
}
</style>