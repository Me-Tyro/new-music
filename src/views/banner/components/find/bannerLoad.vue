<template>
  <div class="banner-load">
    <!-- 头部 -->
    <banner-header-tab>
      <template #one>
        <router-link to="/discover/personality/recommend">个性推荐</router-link>
      </template>
      <template #two>
        <router-link to="/discover/personality/musiclist">歌单</router-link>
      </template>
      <template #three>
        <router-link to="/">排行榜</router-link>
      </template>
      <template #four>
        <router-link to="/">歌手</router-link>
      </template>
    </banner-header-tab>
    <!-- 内容 -->
    <div class="banner-body">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import BannerHeaderTab from "@/components/bannerHeaderTab/bannerHeaderTab";
</script>

<style scoped lang="less">
.banner-load {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.banner-body {
  height: 100%;
  padding: 10px 35px 30px;
  overflow-y: scroll;
}

.banner-body::-webkit-scrollbar {
  width: 5px;
  border-radius: 10px;

}

.banner-body::-webkit-scrollbar-thumb {
  background-image: linear-gradient(#e66465, #9198e5, #ff0000, gold);
  border-radius: 10px;
}
</style>
