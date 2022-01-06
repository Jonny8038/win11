<template>
  <div id="app">
    <Tarbar />
    <router-view />
  </div>
</template>

    
<script>
import Tarbar from "./views/Tarbar.vue";
export default {
  components: {
    Tarbar,
  },
};
</script>




<style>
* {
  margin: 0;
  padding: 0;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
