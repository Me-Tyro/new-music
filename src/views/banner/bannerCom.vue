<template>
  <div class="banner-container">
    <!--  左侧导航栏  -->
    <banner-tab/>
    <!--  右侧渲染栏  -->
    <router-view />
  </div>
</template>

<script setup>
import BannerTab from "@/views/banner/components/find/bannerTab";
</script>

<style scoped lang="less">
.banner-container {
  flex: 1;
  //background-color: skyblue;
  display: flex;
  overflow: hidden;
}
</style>
