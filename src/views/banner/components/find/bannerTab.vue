<template>
  <div class="banner-tab">
    <ul>
      <li :class="removeStrRoute() === 'personality'? 'active' : ''">
        <el-icon>
          <Headset/>
        </el-icon>
        <router-link to="/">发现音乐</router-link>
      </li>
      <li :class="removeStrRoute() === 'video' ? 'active' : ''">
        <el-icon>
          <VideoCamera/>
        </el-icon>
        <router-link to="/discover/video">视频</router-link>
      </li>
      <li :class="num === 2 ? 'active' : ''" @click="clickLi(2)">
        <el-icon>
          <More/>
        </el-icon>
        <router-link to="/">收藏</router-link>
      </li>
      <li :class="num === 3 ? 'active' : ''" @click="clickLi(3)">
        <el-icon>
          <Position/>
        </el-icon>
        <router-link to="/">每日推荐</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const removeStrRoute = () => {
  return route.path.split('/')[2]
}

const num = ref(0)

const clickLi = (value) => {
  num.value = value
}
</script>

<style scoped lang="less">
.banner-tab {
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #ccc;

  ul {
    li {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 45px;
      cursor: pointer;
      padding-left: 20px;
      margin-top: 5px;

      &:hover {
        background-color: #f6f6f7;
      }

      &.active {
        background-color: #f6f6f7;
        font-weight: 700;
      }

      a {
        margin-left: 5px;
        width: 100%;
      }

    }
  }
}
</style>
