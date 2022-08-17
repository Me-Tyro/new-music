<template>
  <div class="banner-video">
    <banner-header-tab :text="text"/>

  </div>
</template>

<script setup>
import BannerHeaderTab from "@/components/bannerHeaderTab/bannerHeaderTab";
import {ref} from "vue";

const text = ref([
  {id: 0, name: '视频'},
  {id: 1, name: 'MV'}
])
</script>

<style scoped lang="less">
.banner-video {
  flex: 1;
}
</style>
