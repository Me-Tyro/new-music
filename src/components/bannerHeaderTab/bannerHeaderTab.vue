<template>
  <!-- banner层头部组件 -->
  <div class="banner-header-tab">
    <ul>
      <li :class="route.path === '/discover/personality/recommend' ? 'active' : ''">
        <span><slot name="one"></slot></span>
      </li>
      <li :class="route.path === '/discover/personality/musiclist' ? 'active' : ''">
        <span><slot name="two"></slot></span>
      </li>
      <li :class="num === 2 ? 'active' : ''" @click="clickActive(2)">
        <span><slot name="three"></slot></span>
      </li>
      <li :class="num === 3 ? 'active' : ''" @click="clickActive(3)">
        <span><slot name="four"></slot></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {useRoute} from "vue-router";

const route = useRoute()

const num = ref(0)

const clickActive = (id) => {
  num.value = id
}

</script>

<style scoped lang="less">
.banner-header-tab {
  height: 65px;
  padding-left: 35px;

  ul {
    height: 100%;
    display: flex;
    align-items: center;

    li {
      padding: 0 10px;
      font-size: 14px;
      cursor: pointer;

      &.active {

        span {
          width: 100%;
          font-size: 18px;
          font-weight: bold;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #ff0000;
          }

        }
      }

    }
  }
}
</style>
