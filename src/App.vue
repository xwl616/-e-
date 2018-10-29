<template>
  <div id="app">
    <router-view/>
    <upper></upper>
  </div>
</template>
<script>
import upper from "@/components/upper"
export default {
  components: {
    upper
  },
  computed: {
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.fll{
  float: left;
}
.flr{
  float: right;
}
.cleanfix::after{
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
.above{
  margin-top: 48px;
}
.above1{
  margin-top: 250px;
}
.herder-a{
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  margin-right: 10px;
  text-decoration: none;
}
</style>
