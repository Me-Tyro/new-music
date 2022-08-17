<template>
  <!-- 轮播图 -->
  <banner-carousel :banner-img="bannerImg"/>
  <!-- 内容 -->
  <reder-song-list :song-img="personalizedList">
    <template #recommend>
      <h2>推荐歌单&gt;</h2>
    </template>
  </reder-song-list>
</template>

<script setup>
import {banner, playList} from "@/api/find";
import {onMounted, ref} from "vue";
import BannerCarousel from "@/components/bannerCarousel/bannerCarousel";
import RederSongList from "@/components/renderSongList/rederSongList";

const bannerImg = ref([])

const personalizedList = ref([])

// onMounted(async () => {
//   const {data: res} = await banner()
//   console.log(res)
//   bannerImg.value = res.banners
// })

banner().then(({data}) => {
  bannerImg.value = data.banners
})

playList().then(({data}) => {
  personalizedList.value = data.result
})
</script>

<style scoped lang="less">
</style>
