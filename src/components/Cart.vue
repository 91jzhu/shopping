<template>
  <Dialog v-model:visible="dialogVisible"
          :count="count"
          :title="params.title"
          :left-icon="params.leftIcon"
          :right-icon="params.rightIcon"
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
import {deleteCar} from "../store/store";

export default {
  name: "Cart.vue",
  components: {Dialog, Icon},
  props: {
    name: String,
    price: String,
    count: Number,
    expect: Number
  },
  setup(props, context) {
    const visible = ref(true)
    const countChange = (val) => {
      context.emit('update:count', val)
    }
    const dialogVisible = ref(false)
    const params = ref({
      title: '确定要删除商品吗',
      leftIcon: 'delete',
      rightIcon: 'confirm',
      leftFunc: (context) => {
        context.emit('update:visible', false)
        visible.value = false
        deleteCar({name: props.name, count: props.count})
        location.reload()
      },
      rightFunc: () => {
      }
    })
    const touch = () => {
      dialogVisible.value = true
    }
    const deleteCart = () => {
      deleteCar({name: props.name})
      location.reload()
    }
    return {touch, visible, countChange, dialogVisible, params, deleteCart}
  }
}
</script>
<style scoped lang="scss">
.cart {
  background: white;
  border-radius: 12px;
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 18px 0;
  width: 92%;
  height: 50%;

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