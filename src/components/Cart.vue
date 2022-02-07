<template>
  <div class="cart" v-if="visible">
    <Icon :name="name" class="cartIcon"/>
    <div class="line1"></div>
    <div class="cash">
      {{ price }}
    </div>
    <div class="line2"></div>
    <Icon name="delete" class="deleteIcon" @click.stop="touch"/>
  </div>
</template>

<script lang="ts">
import { deleteCar} from "../store/store";
import Icon from "./Tool/Icon.vue";
import {openDialog} from "./Tool/openDialog";
import { openToast } from "./Tool/openToast";
import {ref} from "vue";
export default {
  name: "Cart.vue",
  components: {Icon},
  props: {
    name: String,
    price: String,
  },
  setup(props,context) {
    const visible=ref(true)
    const touch = () => {
      openDialog({
        title: '确定要删除商品吗',
        leftIcon: 'cancel',
        rightIcon: 'confirm',
        leftFunc: () => {},
        rightFunc: (context) => {
          context.emit('update:visible',false)
          deleteCar(props.name)
          visible.value=false
          location.reload()
        }
      })
    }
    return {touch,visible,}
  }
}
</script>

<style scoped lang="scss">
.cart {
  border-radius: 12px;
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 12px 0;
  width: 92%;
  height: 50%;
  .cartIcon{
    padding-left: 6%;
  }

  .line1 {
    position: absolute;
    width: 1px;
    height: 52px;
    background: darkgrey;
    top: 50%;
    transform: translateY(-50%);
    left: 30%;
  }

  .cash {
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
  .line2 {
    position: absolute;
    width: 1px;
    height: 52px;
    background: darkgrey;
    top: 50%;
    transform: translateY(-50%);
    left: 70%;
  }
  .deleteIcon{
    padding-right: 6%;
  }
}
</style>