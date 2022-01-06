<template>
  <div>
    <div class="conter" @contextmenu.prevent="onContextmenu">
      <div class="mainshow">
        <div class="item" @click="handleClick('/Computer')">
          <i class="iconfont icon-diannao1" style="color: #46ebd5"></i>
          <span>此电脑</span>
        </div>
        <div class="item">
          <i class="iconfont icon-lajitong" style="color: #fff"></i>
          <span>回收站</span>
        </div>
        <div class="item" @click="handleClick('/Edge')">
          <i class="iconfont icon-bg-ie-browser" style="color: #0066ff"></i>
          <span>Microsoft</span>
          <span>Edge</span>
        </div>
        <div class="item" @click="handleClick('/GitHub')">
          <i class="iconfont icon-github" style="color: #000"></i>
          <span>GitHub</span>
        </div>
        <div class="item" @click="handleClick('/Google')">
          <i class="iconfont icon-chrome" style="color: #66cc66"></i>
          <span>Google</span>
          <span>Chrome</span>
        </div>

        <div class="item">
          <i class="iconfont icon-24gf-folderOpen" style="color: #ffe79e"></i>
          <span>文件资源</span>
          <span>管理器</span>
        </div>
        <div class="item">
          <i class="iconfont icon-ppt1" style="color: #ff6600"></i>
          <span>PPT</span>
        </div>
        <div class="item">
          <i class="iconfont icon-word" style="color: #2a5598"></i>
          <span>Word</span>
        </div>
        <div class="item" @contextmenu.prevent="onContextmenu">
          <i class="iconfont icon-excel" style="color: #1f7043"></i>
          <span>Excel</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenfullBut: false,
      message: "右键打开菜单",
      useCustomClass: false,
    };
  },
  methods: {
    //右键菜单
    onContextmenu(event) {
      this.$contextmenu({
        items: [
          {
            label: "查看",
            icon: "el-icon-menu",
            children: [
              { label: "大图标", icon: "el-icon-circle-plus" },
              { label: "中图标", icon: "el-icon-remove" },
              { label: "小图标", icon: "el-icon-menu" },
              { label: "自动排列图标", icon: "el-icon-news" },
              { label: "将图标与网格对齐", icon: "el-icon-crop" },
              { label: "显示桌面图标", icon: "el-icon-view" },
            ],
          },
          {
            label: "排序方式",
            icon: "el-icon-sort",
            children: [
              { label: "名称", minWidth: 1 },
              { label: "大小" },
              { label: "项目类型" },
              { label: "修改日期" },
            ],
          },
          {
            label: "刷新",
            icon: "el-icon-refresh-right",
            divided: true,
          },
          {
            label: "新建",
            icon: "el-icon-circle-plus-outline",
            divided: true,
            children: [
              { label: "文件夹", icon: "el-icon-folder-opened" },
              { label: "快捷方式", icon: "el-icon-top-right" },
              { label: "BMP图像", icon: "el-icon-picture-outline" },
              { label: "DOC文档", icon: "el-icon-tickets" },
              { label: "PPT演示文稿", icon: "el-icon-tickets" },
              { label: "WinRAR 压缩文件", icon: "el-icon-unlock" },
              { label: "RTF 文件", icon: "el-icon-document-remove" },
              { label: "文本文档", icon: "el-icon-s-order" },
              { label: "XLSX 工作表", icon: "el-icon-s-data" },
            ],
          },
          {
            label: "显示设置",
            icon: "el-icon-monitor",
          },
          {
            label: "个性化",
            icon: "el-icon-edit",
            divided: true,
          },
          {
            label: "打开命令行",
            icon: "el-icon-cpu",
            divided: true,
          },
          {
            label: "显示更多选项",
            icon: "el-icon-s-tools",
          },
        ],
        event,
        // x: event.clientX,
        // y: event.clientY,
        customClass: this.useCustomClass ? "custom-class" : "",
        zIndex: 3,
        minWidth: 230,
      });
      event.preventDefault();
    },
    handleClick(path) {
      console.log(path);
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.conter,
.conter-bg {
  width: 100vw;
  height: 100vh;
  padding: 30px;
  background: url("../assets/win11.jpeg") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
}
.mainshow {
  box-sizing: border-box;
  width: 100%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
}
.item {
  width: 120px;
  height: 120px;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 29px;
}
.item:hover {
  border: 1px solid #d8d8d8;
}
.item i {
  font-size: 50px;
  color: #2f92d9;
  margin-bottom: 10px;
}
#icon-PPT {
  font-size: 20px;
}
.item span {
  color: #fff;
  font-size: 14px;
}
.tabbar {
  width: 100%;
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #d8d8d8;
  opacity: 0.7;
}
</style>