<template>
  <div class="carWrapper">
    <div class="header">购物车{{ 3 }}</div>
    <div class="settle">
      <div class="carList" ref="carList" v-if="visible">
        <Cart v-for="item in cars"
              :key="item.name"
              :name="item.name"
              :price="item['price']"
              :count="item.count"
              @update:count="(val)=>{
                item.count=val
                modifyCount({name:item.name,count:val})
              }"
              @update:delete="completeDelete"
              @update:amount="updateAmount"
              :expect="item['expect']"></Cart>
      </div>
      <div class="replace" v-else>购物车空空如也</div>
    </div>
    <div class="btnWrapper">
      <div class="amount">
        <span class="sum">合计:</span>
        <span class="money">{{ '$' + amount }}</span>
      </div>
      <button class="btn" @click.stop="settle">结算</button>
    </div>
    <Navbar/>
  </div>
</template>

<script lang="ts">
import {onBeforeUpdate, onMounted,  ref} from 'vue';
import Navbar from '../Navbar.vue'
import Cart from '../Cart.vue'
import {changeCash, clearCar, fetchCar, modifyCount} from '../../store/carStore';
import {Car} from "../../type";
import {addReceive} from "../../store/receiveStore";

export default {
  components: {Cart, Navbar},
  setup() {
    const carList = ref(null)
    const visible = ref(true)
    const amount = ref(0)
    const cars = ref(fetchCar())
    const calcAmount = () => {
      cars.value.forEach((item: Partial<Car>) => {
        amount.value += Number(item.price!.slice(1)) * Number(item.count)
      })
    }
    const reCalcAmount=()=>{
      amount.value = 0
      calcAmount()
    }
    onMounted(() => {
      if (carList.value) {
        calcAmount()
        if ((carList.value as HTMLDivElement).children.length === 0) {
          visible.value = false
        }
      }
    })
    onBeforeUpdate(() => {
      reCalcAmount()
    })
    const settle = () => {
      if (!changeCash(amount.value))
        return
      addReceive(cars.value)
      cars.value = []
      visible.value = false
      clearCar()
    }
    const completeDelete = (val: string) => {
      cars.value.forEach((item: Partial<Car>, index: number) => {
        if (item.name === val) {
          cars.value.splice(index, 1)
        }
      })
      if (cars.value.length === 0) {
        visible.value = false
      }
    }
    const updateAmount = () => {
      reCalcAmount()
      visible.value = false
    }
    return {
      carList, visible, amount,
      cars, modifyCount, settle, completeDelete, updateAmount
    }
  }
}
</script>
<style scoped lang="scss">
.carWrapper {
  background: #efe8de;

  .header {
    width: 99%;
    height: 49px;
    display: flex;
    justify-content: flex-start;
    padding-left: 18px;
    align-items: center;
    border: 1px solid red;
    font-size: 20px;
    font-weight: 600;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .settle {
    border: 1px solid red;
    height: calc(100vh - 155px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .carList {
      margin-top: 8px;
      border-radius: 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .replace {
      border: 1px solid red;
      background: lightgrey;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
    }
  }

  .btnWrapper {
    position: fixed;
    bottom: 58px;
    left: 0;
    width: 100%;
    height: 64px;
    background: navajowhite;

    .amount {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 140px;

      .sum {
      }

      .money {
        font-size: 20px;
      }
    }

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