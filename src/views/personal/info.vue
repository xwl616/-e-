<template>
    <div class="info above">
        
    </div>
</template>

<script>
    export default {
        methods: {
            getData(){
                this.$axios.fetch('get','/carousel/carouselList.do?type=0').then(res => {
                    
                })
            }
        },
        created() {
            this.getData()
        },
    }
</script>

<style scoped lang="scss">
// .info-wrap{
//     width: 100%;
//     height: 50px;
//     display: flex;
//     justify-content:space-between;
//     span{
//         font-size: 14px;
//         text-align: center;
//     }
//     img{
//         width: 28px;
//         height: 28px;
//     }
// }
</style>