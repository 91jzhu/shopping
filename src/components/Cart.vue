<template>
  <div class="cart">
    <Icon name="name"/>
    <div class="line"></div>
    <div class="cash">
      <slot name="price"/>
    </div>
  </div>
</template>

<script>
import Icon from "./Tool/Icon.vue";
import {onMounted} from "vue";
import {openCart} from "./Tool/openCart";
export default {
  name: "Cart.vue",
  components: {Icon},
  props:{
    name:String,
    price:Number
  },
  setup(){

  }
}
</script>

<style scoped lang="scss">
.cart{
  width:45%;
  border:1px solid red;
  .line{}
  .cash{}
}
</style>