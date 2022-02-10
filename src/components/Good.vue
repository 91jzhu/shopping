<template>
  <div class="good" @click.stop="touch">
    <div class="wrapper">
      <Icon :name="name" class="goodIcon"/>
      <div class="describe">
        <slot name="describe"/>
      </div>
      <div class="cash">
        <div class="price">{{ price }}</div>
        <div class="customer">
          <slot name="customer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from './Tool/Icon.vue'
import {openDialog} from "./Tool/openDialog";
import {addCar} from "../store/store";
import {ref} from "vue";

export default {
  components: {Icon},
  props: {
    name: String,
    price: String
  },
  setup(props, context) {
    // const active=ref(false)
    const touch = (e: PointerEvent) => {
      // active.value=true
      openDialog({
        title: '放到购物车或收藏',
        leftIcon: 'collect',
        rightIcon: 'car',
        leftFunc: () => addCar({name: props.name, price: props.price}),//todo
        rightFunc: () => {}
      })
    }
    return {touch}
  }
}
</script>

<style lang="scss" scoped>
.good {
  width:50%;
  overflow: hidden;
  height:64vw;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    box-shadow: inset 2px 2px 1px #888888;
  }

  .wrapper {
    width: 92%;
    height:224px;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    //box-shadow: 1px 1px 1px grey;
    .goodIcon {
      width:100%;
      height:150px;
      background: #f5f5f5;
      border-radius: 24px;
    }
    .describe {
      flex:1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 20px;
      margin: 6px 0;
      font-size: 4vw;
    }
    .cash {
      font-size: 24px;
      height:36px;
      display: flex;
      justify-content: flex-start;
      .price{
        //border:1px solid red;
        width:26%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 5vw;
        font-weight: 500;
      }
      .customer{
        //border:1px solid red;
        color:darkgrey;
        flex:1;
        font-size: 16px;
        line-height: 40px;
        padding-bottom: 6px;
        padding-left:8px;
      }
    }
  }
}
</style>