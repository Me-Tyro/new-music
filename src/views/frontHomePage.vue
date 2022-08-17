<template>
  <!--  一级页面  -->
  <div class="front-home-page">
    <!--  头部-->
    <head-com/>
    <!--  内容-->
    <router-view />
    <!--  尾部-->
    <footer-com />
  </div>
</template>

<script setup>

import HeadCom from "@/views/head/headCom";
import FooterCom from "@/views/footer/footerCom";
</script>

<style scoped>
.front-home-page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
