<template>
  <div class="carWrapper">
    <div class="header">
      <span class="name">购物车</span>
      <span class="mount">({{ mount?mount:0 }})</span>
    </div>
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
              @update:amount="(name)=>updateAmount(name)"
              :expect="item['expect']"></Cart>
      </div>
      <div class="replace" v-else>
        <Icon name="empty" class="icon"/>
        <span>购物车空空如也</span>
      </div>
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
import {computed, onBeforeUpdate, onMounted, onUpdated, ref, watch, watchEffect} from 'vue';
import Navbar from '../Navbar.vue'
import Cart from '../Cart.vue'
import {changeCash, clearCar, fetchCar, modifyCount} from '../../store/carStore';
import {Car} from "../../type";
import {addReceive} from "../../store/receiveStore";
import Icon from "../Tool/Icon.vue";

export default {
  components: {Icon, Cart, Navbar},
  setup() {
    const carList = ref(null)
    const visible = ref(true)
    const amount = ref(0)
    const cars = ref(fetchCar())
    const mount=computed(()=>cars.value.length)
    const calcAmount = () => {
      amount.value=0
      cars.value.forEach((item: Partial<Car>) => {
        amount.value += Number(item.price!.slice(1)) * Number(item.count)
      })
    }
    onMounted(() => {
      watchEffect(()=>{
        if (carList.value) {
          calcAmount()
          if ((carList.value as HTMLDivElement).children.length === 0) {
            visible.value = false
          }
        }
      })
    })
    watch(()=>cars.value,()=>{
      if(cars.value.length===0){
        visible.value=false
      }
    },{deep:true})
    const settle = () => {
      if (!changeCash(amount.value))
        return
      addReceive(cars.value)
      cars.value = []
      clearCar()
    }
    const completeDelete = (val: string) => {
      cars.value.forEach((item: Partial<Car>, index: number) => {
        if (item.name === val) {
          cars.value.splice(index, 1)
        }
      })
    }
    const updateAmount = (name:string) => {
      cars.value.forEach((item:Partial<Car>,index:number)=>{
        if(item.name===name){
          cars.value.splice(index,1)
        }
      })
      calcAmount()
    }
    return {
      carList, visible, amount,mount,
      cars, modifyCount, settle, completeDelete, updateAmount,
    }
  }
}
</script>
<style scoped lang="scss">
.carWrapper {
  background: #f6f6f6;
  .header {
    background: rgb(217,228,224);
    background: radial-gradient(circle, rgba(217,228,224,1) 0%, rgba(239,232,222,1) 100%);
    height: 72px;
    display: flex;
    justify-content: flex-start;
    padding-left: 18px;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    .name{}
    .mount{
      margin-left: 4px;
      font-weight: 400;
      font-size: 18px;
    }
  }

  .settle {
    height: calc(100vh - 155px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .carList {
      background: #f2f2f2;
      margin-top: 8px;
      border-radius: 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .replace {
      background: #f6f6f6;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      .icon{
        width:112px;
        height:112px;
      }
      span{
        margin:12px 0 64px 0;
        border: 1px solid lightgrey;
        box-shadow: 2px 2px 10px lightgrey;
        border-radius: 32px;
        padding:10px 24px;
        animation: swing 1.5s;
        transform-origin: 30px 30px;
      }
      @keyframes swing {
        0%{}
        50%{transform: rotate(70deg)}
        70%{transform: rotate(90deg)}
        80%{transform: rotate(70deg)}
        100%{transform: rotate(90deg)}
      }
    }
  }

  .btnWrapper {
    position: fixed;
    bottom: 58px;
    left: 0;
    width: 100%;
    height: 64px;
    background: #ffffff;
    box-shadow: 0 -1px 1px #dee1e6;

    .amount {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 140px;

      .sum {
      }

      .money {
        margin-left: 4px;
        font-size: 28px;
        color:#fb4e02;
      }
    }

    .btn {
      font-size: 18px;
      color: white;
      position: absolute;
      padding:12px 36px;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      border: none;
      background: rgb(255,137,5);
      background: linear-gradient(90deg, rgba(255,137,5,1) 0%, rgba(255,85,4,1) 100%);
      font-weight: 600;
      border-radius: 32px;
    }
  }
}
</style>