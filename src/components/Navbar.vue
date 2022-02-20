<script setup lang="ts">

import Icon from "./Tool/Icon.vue";
</script>

<template>
  <div class="navWrapper">
    <router-link to="/goods">
      <Icon name="goods" class="icon"/>
      <Icon name="goods-active" class="active"/>
      <span>商品</span>
    </router-link>
    <router-link to="/car">
      <Icon name="car" class="icon"/>
      <Icon name="car-active" class="active"/>
      <span>购物车</span>
    </router-link>
    <router-link to="/info">
      <Icon name="info" class="icon"/>
      <Icon name="info-active" class="active"/>
      <span>我的</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navWrapper {
  z-index: 10;
  position: fixed;
  left: 0;
  bottom: 0;
  width:100vw;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid grey;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.3333%;
    height: 48px;
    padding:4px 0;
    background:white;
    color:grey;
    .active{
      display: none;
    }
    &.router-link-active{
      color: #fc5a00;
      .icon{
        display: none;
      }
      .active{
        display: block;
      }
    }
  }
}
</style>
