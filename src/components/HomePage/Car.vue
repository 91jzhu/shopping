<template>
  <div class="carWrapper">
    <div class="header">购物车详情</div>
    <div class="settle">
      <div class="carList" ref="carList" v-if="visible"></div>
      <div class="replace" v-else>购物车空空如也</div>
    </div>
    <div class="btnWrapper">
      <button class="btn">结算</button>
    </div>
    <Navbar/>
  </div>
</template>

<script lang="ts">
import {computed, onMounted, onUpdated, ref, watch, watchEffect} from 'vue';
import Navbar from '../Navbar.vue'
import {openCart} from "../Tool/openCart";
import Cart from '../Cart.vue'
import {Add, Car} from "../../type";
import {carItem, fetchCar} from '../../store/store';

export default {
  components: {Cart, Navbar},
  setup() {
    const carList = ref(null)
    const visible=ref(true)
    onMounted(() => {
      if (carList.value) {
        fetchCar('carItem').forEach(({name, price}: Partial<Add>) => {
          openCart(<Car>{name, ref: carList, price})
        })
        if((carList.value as HTMLDivElement).children.length===0){
          visible.value=false
        }
      }
    })
    return {carList,visible,carItem}
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
      margin-top: 8px;
      border-radius: 12px;
      display: flex;
      flex-wrap: wrap;
    }
    .replace{

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