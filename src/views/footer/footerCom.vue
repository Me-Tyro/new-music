<template>
  <!--  尾部-->
  <div class="footer-container">
    <div class="titles">
      <!-- 图标 -->
      <div class="titles-img">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="titles-text">
        <!-- 歌名 -->
        <div class="umusic">获取用户粉丝列表年后大厦是</div>
        <!-- 作者 -->
        <div class="authors">用户粉丝列表获取用户粉丝列表年后大厦是</div>
      </div>
    </div>
    <div class="org-download">
      <el-icon size="20px">
        <Download/>
      </el-icon>
    </div>

    <div class="fields">
      <div class="fields-icon">
        <el-icon size="25px" style="cursor: pointer;">
          <RefreshRight/>
        </el-icon>
        <el-icon size="25px" style="margin-left: 60px; cursor: pointer;">
          <Back/>
        </el-icon>
        <el-icon size="25px" style="margin-left: 60px; cursor: pointer;">
          <VideoPlay/>
        </el-icon>
        <el-icon size="25px" style="margin-left: 60px; cursor: pointer;">
          <Right/>
        </el-icon>
        <el-icon size="25px" style="margin-left: 60px; cursor: pointer;">
          <Star/>
        </el-icon>
      </div>
      <div class="fields-slider">
        <span>00:00</span>
        <div class="slider-demo-block">
          <el-slider v-model="value" input-size="large"/>
        </div>
        <span>00:00</span>
      </div>
    </div>

    <div class="classes">
      <div class="classes-icon">
        <el-icon size="24px" style="cursor: pointer">
          <Microphone/>
        </el-icon>
        <div class="slider-demo-block">
          <el-slider v-model="musicValue" :show-tooltip="false"/>
        </div>
        <el-icon size="24px" style="cursor: pointer">
          <Expand/>
        </el-icon>
      </div>
      <div class="instruction-set">免责声明</div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const value = ref(0)
const musicValue = ref(0)
</script>

<style scoped lang="less">
.footer-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 75px;
  display: flex;
  border-top: 1px solid #999;

  .titles {
    width: 200px;
    display: flex;
    align-items: center;

    .titles-img {
      width: 45px;
      height: 45px;
      margin: 0 15px 0 15px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .titles-text {
      flex: 1;
      display: flex;
      padding-left: 5px;
      flex-direction: column;
      justify-content: center;

      div {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 70px;
        margin: 2px 0;
        font-size: 14px;

        &.umusic {
          width: 100px;
          font-size: 16px;
        }
      }
    }
  }

  .org-download {
    cursor: pointer;
    margin-top: 40px;
    margin-left: -20px;
  }

  .fields {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .fields-slider {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .slider-demo-block {
        width: 50%;
        margin: 0 15px;
      }
    }
  }

  .classes {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .classes-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 3px;

      .slider-demo-block {
        width: 40%;
        margin: 0 10px;
      }
    }

    .instruction-set {
      font-size: 12px;
      text-align: center;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
