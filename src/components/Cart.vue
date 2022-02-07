<template>
  <div class="cart" @click.stop="touch">
    <Icon :name="name" class="cartIcon"/>
    <div class="line"></div>
    <div class="cash">
      {{ price }}
    </div>
  </div>
</template>

<script lang="ts">
import { deleteCar ,fetch} from "../store/store";
import Icon from "./Tool/Icon.vue";
import {openDialog} from "./Tool/openDialog";
import {Car} from "../type";
import { openToast } from "./Tool/openToast";
export default {
  name: "Cart.vue",
  components: {Icon},
  props: {
    name: String,
    price: String
  },
  setup(props,context) {
    const touch = () => {
      openDialog({
        title: '确定要删除商品吗',
        leftIcon: 'delete',
        rightIcon: 'confirm',
        leftFunc: () => {
          openToast({})
        },
        rightFunc: (context) => {
          context.emit('update:visible',false)
          deleteCar(props.name)
        }
      })//todo
    }
    return {touch}
  }
}
</script>

<style scoped lang="scss">
.cart {
  border-radius: 12px;
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 12px 0;
  width: 92%;
  height: 50%;

  .line {
    position: absolute;
    width: 1px;
    height: 52px;
    background: darkgrey;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
  }

  .cash {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
}
</style>