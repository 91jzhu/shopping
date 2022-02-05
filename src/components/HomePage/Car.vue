<template>
  <div class="carWrapper">
    <div class="header">购物车详情</div>
    <div class="settle">
      <ul class="carList">
        <li>good1</li>
        <li>good2</li>
        <li>good3</li>
      </ul>
    </div>
<!--    <Dialog v-model:visible="visible"/>-->
<!--    <Toast v-model:active="active">-->
<!--      <template v-slot:tip>-->
<!--        已收藏-->
<!--      </template>-->
<!--    </Toast>-->
    <button @click="openDialog">dialog</button>
    <button @click="open">toast</button>
    <div class="btnWrapper"><button class="btn">结算</button></div>
    <Navbar/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Navbar from '../Navbar.vue'
import Dialog from "../Tool/Dialog.vue";
import {openDialog} from "../Tool/openDialog";
import { openToast } from '../Tool/openToast';
import Toast from '../Tool/Toast.vue'
export default {
  components:{Toast, Dialog, Navbar},
  setup(){
    const visible=ref(false)
    const show=()=>{
      if(!visible.value){
        visible.value=true
      }
    }
    const open=()=>{
        openToast()
    }
    const active=ref(false)
    return {visible,show,openDialog,active,open}
  }
}
</script>

<style scoped lang="scss">
.carWrapper{
  .header{
    width:99%;
    height:49px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid red;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  .settle{
    .carList{
      list-style: none;
      border:1px solid red;
      margin-top: 8px;
      border-radius: 12px;
      li{

      }
    }
  }
  .btnWrapper{
    position: fixed;
    bottom:38px;
    left:0;
    width:100%;
    height:64px;
    background: navajowhite;
    .btn{
      width:102px;
      height:36px;
      font-size: 18px;
      color:white;
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      right:20px;
      border:none;
      background: orange;
      border-radius: 20px;
    }
  }
}
</style>