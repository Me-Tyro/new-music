<template>
  <!--  头部组件-->
  <div class="head-container">
    <div class="logo">
      <img src="../../assets/images/logo.png">
    </div>
    <h3>动听云音乐</h3>
    <div class="head-content">
      <div class="circle">&lt;</div>
      <div class="circle">&gt;</div>
      <input type="text" placeholder="请输入内容"/>
    </div>
    <div class="Login">
      <div class="img-login">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <span>点击头像登录</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.head-container {
  z-index: 9996;
  width: 100vw;
  height: 65px;
  background-color: #EC4141;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    width: 45px;
    height: 45px;
    margin: 0 5px 0 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    color: #fff;
  }

  .head-content {
    display: flex;
    margin-left: 70px;

    .circle {
      width: 30px;
      height: 30px;
      background-color: rgba(0, 0, 0, .1);
      margin: 0 5px;
      text-align: center;
      line-height: 30px;
      border-radius: 50%;
      color: white;
      cursor: pointer;
    }

    input {
      margin-left: 10px;
      border-radius: 15px;
      padding-left: 30px;
      border: 0;
      outline: none;
      background-color: rgba(0, 0, 0, .1);
      color: white;
      font-size: 14px;
    }

    input::-webkit-input-placeholder {
      color: white;
    }
  }

  .Login {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: rgba(255, 255, 255, .5);

    .img-login {
      width: 35px;
      height: 35px;
      margin-right: 5px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    span {
      margin-right: 50px;
    }
  }
}
</style>
