<template>
  <div class="wrapper">
    <header>
      <router-link to="/info">
        <Icon name="back"/>
      </router-link>
      <span>
      待收货
    </span>
    </header>
    <main v-if="visible">
      <Rac v-for="receive in receives"
           :key="receive.name"
           :name="receive.name"
           :count="receive.count"
           :expect="receive.expect"
           :button-func="()=>deleteReceive(
               {
               name:receive.name,
               price:receive.price,
               count:receive.count,
               createdAt:receive.createdAt
               })"
           @update:receive="receivesChange">
        <template v-slot:content>
          确认收货
        </template>
      </Rac>
    </main>
    <div v-else class="replace">还没有商品，快去选购吧</div>
  </div>
</template>

<script lang="ts">
import Icon from "../Tool/Icon.vue";
import Rac from "../Rac.vue";
import {ref, watchEffect} from "vue";
import {deleteReceive, fetchReceive} from "../../store/receiveStore";
import {Car} from "../../type";

export default {
  components: {Icon, Rac},
  setup() {
    const receives = ref(fetchReceive())
    const visible = ref(true)
    const receivesChange = (val: string) => {
      receives.value.forEach((item: Partial<Car>, index: number) => {
        if (item.name === val) {
          receives.value.splice(index, 1)
        }
      })
    }
    watchEffect(() => {
      if (receives.value.length === 0) {
        visible.value = false
      }
    })
    return {receives, visible, receivesChange, deleteReceive}
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  height:100vh;
  width: 100vw;
  overflow: hidden;
  header {
    border-bottom: 1px solid grey;
    display: flex;

    a {
      display: inline-block;
      padding: 4px 8px;
      //border:1px solid red;
    }

    span {
      //border:1px solid red;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 22vw;
      font-size: 24px;
    }
  }

  main {

  }

  .replace {
    border: 1px solid red;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80vw;
    transform: translate(-50%, -50%);
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>