<template>
  <div>
    <div class="tabbar">
      <div class="tarbar-left">
        <i class="el-icon-menu" style="color: #0289fe"></i>
        <i class="el-icon-search" style="color: #a7abb7"></i>
        <i class="el-icon-copy-document" style="color: #5c5c66"></i>
        <i class="el-icon-files" style="color: #33ccff"></i>
        <i class="el-icon-discover" style="color: #0066ff"></i>
        <i class="el-icon-folder-opened" style="color: #ffcc33"></i>
      </div>
      <div class="tarbar-right">
        <i class="el-icon-arrow-up" style="height: 50px"></i>
        <i class="el-icon-cloudy" style="height: 50px"></i>
        <i class="">中</i>
        <i class="iconfont icon-shurufa"></i>
        <i class="iconfont icon-wifi"></i>
        <i class="iconfont icon-laba"></i>
        <i class="iconfont icon-dianchi"></i>
      </div>
      <div class="tarbar-time">
        <span>{{ nowtime | updatetime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"; //时间插件
import "moment/locale/zh-cn"; //标准时间

export default {
  data() {
    return {
      nowtime: new Date(),
    };
  },
  filters: {
    updatetime: function (value) {
      return moment(value).format("YYYY年MM月DD日HH点mm分");
    },
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(() => {
      _this.nowtime = new Date();
    }, 1000);
  },
  beforeCreate() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style scoped>
.icon-shitu {
  font-size: 10px;
}
.tabbar {
  user-select: none;
  width: 100%;
  height: 50px;
  position: absolute;
  line-height: 50px;
  left: 0;
  bottom: 0;
  background: #dce5f3;
  opacity: 0.9;
  display: flex;
  flex-direction: row;
}
.tarbar-left {
  width: 55%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.tarbar-left i {
  height: 30px;
  font-size: 30px;
  margin: 0 18px;
}
.tarbar-left i:hover {
  border-bottom: 2px solid #0066ff;
}
.tarbar-right {
  width: 40%;
  height: 50px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.tarbar-right i {
  line-height: 50px;
  font-size: 20px;
  font-weight: 520;
  padding: 0 2px;
  margin: 0 8px;
}
.tarbar-right i:hover {
  background: #d8d8d8;
}
.tarbar-time {
  width: 5%;
  height: 50px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tarbar-time:hover{
  background: #d8d8d8;
}
.tarbar-time span {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  height: 50px;
  line-height: 16px;
}
</style>