<template>
  <div class="music-list">
    <!--  头部  -->
    <div class="music-list-img">
      <div class="big-img">
        <img :src="musiclistImg" alt="">
      </div>
      <div class="small-img-text">
        <img :src="musiclistImg" alt="">
        <div class="small-text">
          <p>
            <el-icon>
              <Pointer/>
            </el-icon>
            <span>精品歌单</span>
          </p>
          <h3>{{ smallText }}</h3>
        </div>
      </div>
    </div>
    <!-- 内容  -->
  </div>
</template>

<script setup>
import {highQuality} from "@/api/find";
import {ref} from "vue";

const musiclistImg = ref('')
const smallText = ref('')

highQuality().then(({data}) => {
  console.log(data.playlists[0])
  musiclistImg.value = data.playlists[0].coverImgUrl
  smallText.value = data.playlists[0].name
})
</script>

<style scoped lang="less">
.music-list {
  .music-list-img {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 200px;
    border-radius: 15px;

    .big-img {
      img {
        width: 100%;
        height: 100%;
        filter: blur(30px) brightness(70%);
      }
    }

    .small-img-text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      img {
        width: 160px;
        height: 160px;
        border-radius: 15px;
        margin-left: 15px;
      }

      .small-text {
        margin-left: 30px;

        p {
          width: 120px;
          height: 30px;
          border-radius: 35px;
          border: 1px solid gold;
          display: flex;
          justify-content: center;
          align-items: center;
          color: gold;
          margin-top: -50px;

          span {
            margin-left: 10px;
          }
        }

        h3 {
          color: #f6f6f7;
          font-weight: initial;
          margin: 25px 0 0 -10px;
        }
      }
    }
  }
}
</style>
