<script setup lang="ts">

</script>

<template>
  <div class="navWrapper">
    <router-link to="/goods">Go to Goods</router-link>
    <router-link to="/car">Go to Car</router-link>
    <router-link to="/info">Go to Info</router-link>
  </div>
</template>

<style lang="scss" scoped>
.navWrapper{
  display: flex;
  justify-content: space-between;
  a{
    border:1px solid red;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width:33.333333%;
    height:36px;
  }
}
</style>
