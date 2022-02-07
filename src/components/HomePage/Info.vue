<template>
  <div class="infoWrapper">
    <div class="user">
      <div class="photo">
        <Icon name="user" class="pic"/>
      </div>
      <pre>
        <div class="bless">我不会祝你今天开心
          我要祝你今天非常开心</div>
      </pre>
    </div>
    <div class="function">
      <div>待收货</div>
      <div>我的收藏</div>
    </div>
    <button class="record">我的购买记录</button>
    <Navbar/>
  </div>
</template>

<script lang="ts">
import Navbar from "../Navbar.vue";
import Icon from "../Tool/Icon.vue";

export default {
  name: "Info",
  components: {Icon, Navbar}
}
</script>

<style scoped lang="scss">
.infoWrapper {
  height: calc(100% - 38px);
  border: 1px solid red;

  .user {
    height: 40%;
    border: 1px solid red;
    position: relative;
    .photo {
      position: absolute;
      top:0;
      left:0;
      height: 60%;
      width:100%;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      .pic {
        width: 70%;
        height: 90%;
      }
    }
    .bless {
      position: absolute;
      bottom: 0;
      left:0;
      width:100%;
      height:40%;
      border:1px solid red;
      font-size: 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  .function {
    border:1px solid blue;
    margin-top: 24px;
    height:16%;
  }
  .record{
    height:10%;
    width:100%;
    border:none;
    margin-top: 24px;
    font-size: 24px;
    &:active{
      background: orange;
      opacity: 0.3;
    }
  }
}
</style>