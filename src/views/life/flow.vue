<template>
    <div class="flow above">
        <div id="container"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                map: null
            }
        },
        methods: {
            initMap() {
                var map = new BMap.Map('container');
                map.centerAndZoom(new BMap.Point(116.216456,40.221724),5);
                
                var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, 
                type: BMAP_NAVIGATION_CONTROL_ZOOM, offset: new BMap.Size(15, 30)})
                
                var marker = new BMap.Marker(new BMap.Point(116.216456,40.221724))  
                map.addOverlay(marker);
                var Label = new BMap.Label("信息工程学院学生流动党支部 支部书记: 高洋电话: 13526395586"
                ,{offset:new BMap.Size(20,-10)})
                marker.setLabel(Label);

                var marker = new BMap.Marker(new BMap.Point(114.011056,33.01470))
                map.addOverlay(marker);
                var Label = new BMap.Label("信息工程学院学生党支部 支部书记: 杨鑫电话: 0396-2853187",
                {offset: new BMap.Size(18,-22)})
                marker.setLabel(Label)
                var marker = new BMap.Marker(new BMap.Point(114.011058,33.01468))
                map.addOverlay(marker);
                var Label = new BMap.Label("信息工程学院党总支 总支书记: 柳晓阳电话: 0396-285032",
                {offset: new BMap.Size(18,-1)})
                marker.setLabel(Label)

                var geolocationControl = new BMap.GeolocationControl();
                map.addControl(geolocationControl);
               
                map.addControl(top_right_navigation);
            }
        },
        created() {
            this.$nextTick(() => {
                this.initMap();
            })
        }
    }
</script>

<style scoped>
.flow{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
#container{
    width: 100%;
    height: 100%;
}
</style>