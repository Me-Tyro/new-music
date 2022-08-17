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
    <reder-song-list :song-img="songList">
      <template #recommend>
        <div class="big-title">
          <el-popover placement="bottom-start" :width="420" trigger="click" :show-arrow="false" :visible="isPopover">
            <template #reference>
              <div class="title" @click="isPopover = true">{{ chooseMusic }}&gt;</div>
            </template>
            <ul class="small-title">
              <li :class="chooseMusic === item.name ? 'active': ''" v-for="(item, index) in cateList" :key="index"
                  @click="choose(item.name)">{{ item.name }}
              </li>
            </ul>
          </el-popover>

          <ul class="title-tab">
            <li v-for="(item, index) in cateSmallList" :class="chooseMusic === item.name? 'active' : ''"
                @click="choose(item.name)">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </template>
      <template #selectPagination>
        <el-pagination background layout="prev, pager, next" :total="300" v-model:current-page="numYeShu"
                       @click="paging(numYeShu)"/>
      </template>
    </reder-song-list>
  </div>
</template>

<script setup>
import {categoryList, highQuality, selectDisc} from "@/api/find";
import {ref} from "vue";
import RederSongList from "@/components/renderSongList/rederSongList";

const musiclistImg = ref('')
const smallText = ref('')

// 页数
const numYeShu = ref(1)

// 是否显示 Popover
const isPopover = ref(false)

// 分类语言
const chooseMusic = ref('华语')

// 歌单分类 --- 多
const cateList = ref([])
// 歌单分类 --- 少
const cateSmallList = ref([])

const choose = (value) => {
  chooseMusic.value = value
  resettingFun(chooseMusic.value)
  isPopover.value = false
  numYeShu.value = 1
}

const songList = ref([])

highQuality().then(({data}) => {
  musiclistImg.value = data.playlists[0].coverImgUrl
  smallText.value = data.playlists[0].name
})

categoryList().then(({data}) => {
  cateList.value = data.sub
  cateSmallList.value = data.sub.slice(3, 13)
})

function resettingFun(text, num) {
  selectDisc(text, num).then(({data}) => {
    songList.value = data.playlists
  })
}

resettingFun()

let timer = null
// 分页函数
const paging = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    resettingFun(chooseMusic.value, numYeShu.value)
  }, 500)
}
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

.big-title {
  display: flex;
  align-items: center;

  .title {
    height: 25px;
    border-radius: 25px;
    border: 1px solid #999999;
    font-size: 14px;
    padding: 0 10px;
    text-align: center;
    line-height: 25px;
    color: #666;
    cursor: pointer;
  }

  .title-tab {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    li {
      height: 25px;
      padding: 0 10px;
      margin-left: 5px;
      font-size: 14px;
      text-align: center;
      line-height: 25px;
      border-radius: 30px;
      cursor: pointer;
      color: #999999;

      &.active {
        background-color: #fdf5f5;
      }
    }
  }
}

.small-title {
  overflow: hidden;
  height: 190px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: linear-gradient(skyblue, hotpink, gold, aquamarine);
  }

  li {
    width: 25%;
    text-align: center;
    padding: 5px 0;
    margin: 5px 0;
    border-radius: 15px;
    cursor: pointer;

    &.active {
      background-color: #fdf5f5;
    }
  }
}
</style>
