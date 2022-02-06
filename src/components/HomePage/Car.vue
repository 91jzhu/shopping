<template>
  <div class="carWrapper">
    <div class="header">购物车详情</div>
    <div class="settle">
      <div class="carList" ref="carList"></div>
    </div>
    <div class="btnWrapper">
      <button class="btn">结算</button>
    </div>
    <Navbar/>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue';
import Navbar from '../Navbar.vue'
import {carItem} from "../../store/store";
import {openCart} from "../Tool/openCart";
import Cart from '../Cart.vue'
import {Add, Car} from "../../type";

export default {
  components: {Cart, Navbar},
  setup() {
    const carList = ref(null)
    onMounted(() => {
      if (carList.value) {
        carItem.forEach(({name, price}: Partial<Add>) => {
          openCart(<Car>{name, ref: carList, price})
        })
      }
    })
    return {carList}
  }
}
</script>

<style scoped lang="scss">
.carWrapper {
  .header {
    width: 99%;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .settle {
    .carList {
      border: 1px solid red;
      margin-top: 8px;
      border-radius: 12px;
      display: flex;
      flex-wrap: wrap;
    }
  }

  .btnWrapper {
    position: fixed;
    bottom: 38px;
    left: 0;
    width: 100%;
    height: 64px;
    background: navajowhite;

    .btn {
      width: 102px;
      height: 36px;
      font-size: 18px;
      color: white;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      border: none;
      background: orange;
      border-radius: 20px;
    }
  }
}
</style>