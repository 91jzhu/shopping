<script setup lang="ts">

import Icon from "./Tool/Icon.vue";
</script>

<template>
  <div class="navWrapper">
    <router-link to="/goods">
      <Icon name="goods"/>
      <span>商品</span>
    </router-link>
    <router-link to="/car">
      <Icon name="car"/>
      <span>购物车</span>
    </router-link>
    <router-link to="/info">
      <Icon name="info"/>
      <span>我的</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navWrapper {
  z-index: 2;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    border: 1px solid red;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.333333%;
    height: 48px;
  }
}
</style>
