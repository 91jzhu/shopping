<template>
  <Dialog v-model:visible="dialogVisible"
          :count="count"
          :title="params.title"
          :good="name"
          :left-word="params.leftWord"
          :right-word="params.rightWord"
          :left-func="params.leftFunc"
          :right-func="params.rightFunc"
          @update:count="countChange"
          @update:delete="deleteCart"/>
  <div class="cart" v-if="visible" @click.stop="touch">
    <Icon :name="name" class="cartIcon"/>
    <div class="wrapper">
      <div class="display">
        <div class="expect">您的宝贝预计 {{ expect }} 天送达</div>
      </div>
      <div class="pc">
        <div class="price">{{ price }}</div>
        <div class="count">{{ count ? 'x' + count : '' }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "./Tool/Icon.vue";
import {ref} from "vue";
import Dialog from "./Tool/Dialog.vue";
import {deleteCar} from "../store/carStore";

export default {
  name: "Cart.vue",
  components: {Dialog, Icon},
  props: {
    name: String,
    price: String,
    count: Number,
    expect: Number
  },
  setup(props, Context) {
    const visible = ref(true)
    const countChange = (val) => {
      Context.emit('update:count', val)
    }
    const dialogVisible = ref(false)
    const params = ref({
      title: '删除或增加商品',
      leftWord: '删除',
      rightWord: '完成',
      leftFunc: (context) => {
        context.emit('update:visible', false)
        visible.value = false
        deleteCar({name: props.name, count: props.count})
        Context.emit('update:delete', props.name)
      },
      rightFunc: (context) => {
        context.emit('update:visible', false)
      }
    })
    const touch = () => {
      dialogVisible.value = true
    }
    const deleteCart = () => {
      deleteCar({name: props.name})
      visible.value = false
      Context.emit('update:amount', props.name)
    }
    return {touch, visible, countChange, dialogVisible, params, deleteCart}
  }
}
</script>
<style scoped lang="scss">
.cart {
  background: white;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 18px 0;
  width: 92%;
  height: 50%;
  margin-bottom: 12px;

  .cartIcon {
    width: 112px;
    height: 88px;
  }

  .wrapper {
    width: 70%;
    height: 88px;
    display: flex;
    flex-direction: column;

    .display {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;

      .expect {
        font-size: 20px;
        display: flex;
        justify-content: center;
        padding: 4px 0;
        align-items: center;
      }
    }

    .pc {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        font-size: 24px;
      }

      .count {
        border: 1px solid #aeaeae;
        border-radius: 8px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 38px;
        padding: 8px;
      }
    }
  }
}
</style>