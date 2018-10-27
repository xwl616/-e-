<template>
    <div class="tich above">
        <div v-html="content">

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

<style scoped lang='scss'>

</style>