<template>
  <!--  轮播图-->
  <div class="banner-carousel">
    <!--    令 bannerImg.length > 0 是为了解决图片加载时（异步请求）第一张图片显示不出来  -->
    <el-carousel :interval="5000" type="card" height="200px" v-if="bannerImg.length > 0">
      <el-carousel-item v-for="item in bannerImg" :key="item">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script setup>

const props = defineProps({
  bannerImg: {
    type: Array,
    required: true,
    default: () => {
      return []
    }
  }
})

</script>

<style scoped>
.el-carousel__item img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
