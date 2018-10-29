<template>
    <div class="tich above">
        <div id="box" v-html="content">

        </div>
    </div>
</template>

<script>
import getUrl from '../../utils/getUrl'
import axios from 'axios'
import cheerio from 'cheerio'
    export default {
        data(){
            return{
                content: ''
            }
        },
        methods: {
            getData(){
                let url = `http://211.67.177.56:8080/hhdj/proxy/proxy.do`
                let day = new Date().getDate()
                let  month = new Date().getMonth() + 1
                day = day >= 10 ? day + "" : "0" + day
                month = month >= 10 ? month + "" : "0" + month
                axios.get(url,{params: {url: getUrl(month, day)}}).then(res => {
                    const $ = cheerio.load(res.data)
                    this.content = $ ('.p1_02').html()
                })
            }
        },
        created() {
            this.getData()
        },
    }
</script>

<style>
.tich{
    width: 100%;
    height: 100%;
}
#box{
    padding: 10px;
}
h1{
    font-size: 28px;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 10px;
}
h2{
    font-size: 20px;
    line-height: 1.2;
    font-weight: 550;
    margin-bottom: 10px
}
p{
    line-height: 2;
}
</style>