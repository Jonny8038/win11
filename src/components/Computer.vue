<template>
  <div class="computer">
    <div class="header">
      <div class="operation">
        <div class="operation-left">
          <i class="el-icon-s-platform"></i>
          <span>此电脑</span>
        </div>
        <div class="operation-right">
          <!-- 最小化 -->
          <i class="el-icon-minus"></i>
          <!-- 最大化 -->
          <i class="el-icon-document-copy"></i>
          <!-- 关闭 -->
          <i class="el-icon-close" id="close" @click="handleClose"></i>
        </div>
      </div>
      <div class="header-menu">
        <div class="header-menu-base">
          <i class="el-icon-circle-plus-outline"></i>
          <span>新建</span>
        </div>
        <span class="divider">|</span>
        <div class="header-menu-icon">
          <i class="el-icon-scissors"></i>
          <i class="el-icon-copy-document"></i>
          <i class="el-icon-s-order"></i>
          <i class="el-icon-s-ticket"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-delete"></i>
        </div>
        <span class="divider">|</span>
        <div class="header-menu-base header-menu-base-sort">
          <i class="el-icon-sort"></i>
          <span>排序</span>
        </div>
        <div class="header-menu-base">
          <i class="el-icon-set-up"></i>
          <span>查看</span>
        </div>
        <span class="divider">|</span>
        <div>
          <i class="el-icon-more"></i>
        </div>
      </div>
    </div>
    <div class="conter"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.computer {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  /* background: burlywood; */
}
.header {
  width: 100%;
  height: 100px;
  background: #dce5f3;
}
.operation {
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
  margin-bottom: 15px;
}
.operation-left i {
  color: #3071a7;
  font-size: 20px;
}
.operation-left span {
  color: #000;
  font-size: 16px;
}
.operation-right {
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.operation-right i {
  width: 20px;
  height: 40px;
  line-height: 40px;
  padding: 5px 15px;
  color: #000;
}
.operation-right i:hover {
  background: #d8d8d8;
}
#close:hover{
  background: #e81123;
}
.header-menu {
  user-select: none;
  display: flex;
  flex-direction: row;
  padding: 0 30px;
  box-sizing: border-box;
  font-size: 18px;
}
.header-menu i {
  color: gray;
}
.header-menu-base i {
  margin-right: 5px;
  box-sizing: border-box;
}
.header-menu-base:hover {
  border-radius: 5px;
  background: #d8d8d8;
}
.header-menu-base-sort {
  margin-right: 20px;
}
.header-menu-icon i {
  font-size: 26px;
  color: gray;
  margin: 0 18px;
}
.divider {
  margin: 0 20px;
}
.el-icon-more {
  padding: 5px;
  box-sizing: border-box;
}
.el-icon-more:hover {
  background: #d8d8d8;
  border-radius: 5px;
}
</style>