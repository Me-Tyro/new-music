<template>
  <!--  渲染的歌单-->
  <div class="reder-song-list">
    <!-- 头部 -->
    <div class="song-list-header">
      <slot name="recommend"></slot>
    </div>
    <!-- 内容 -->
    <div class="song-list-counter">
      <ul class="counter-ul">
        <li v-for="item in props.songImg" :key="item.id">
          <img :src="(item.picUrl || item.coverImgUrl)" alt=""/>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <div class="paging">
      <slot name="selectPagination"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  songImg: {
    type: Array,
    required: true,
    default: () => {
      return []
    }
  }
})
</script>

<style scoped lang="less">
.reder-song-list {
  margin-top: 35px;

  .song-list-header {

  }

  .song-list-counter {
    .counter-ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        display: flex;
        flex-direction: column;
        width: 18%;
        margin-top: 15px;

        img {
          width: 100%;
          height: 180px;
          border-radius: 15px;
        }

        span {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
  }

  .paging {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
}
</style>
