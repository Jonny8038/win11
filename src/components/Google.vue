<template>
  <div class="Google">
    <div class="menu">
      <!-- 最小化 -->
      <i class="el-icon-minus"></i>
      <!-- 最大化 -->
      <i class="el-icon-document-copy"></i>
      <!-- 关闭 -->
      <i class="el-icon-close" id="close" @click="handleClose"></i>
    </div>
    <iframe class="iframe" src="https://www.hao123.com/"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClose() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.Google {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
.menu {
  width: 100%;
  height: 40px;
  background: #a7abb7;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.menu i {
  width: 20px;
  height: 40px;
  padding: 5px 15px;
  color: #000;
  line-height: 40px;
}
.menu i:hover {
  background: #d8d8d8;
}
#close:hover {
  background: #e81123;
}
.iframe {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}
</style>