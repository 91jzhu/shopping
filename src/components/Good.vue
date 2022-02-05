<template>
  <div class="good" @click.stop="touch">
    <Icon :name="name"/>
    <div class="line"/>
    <div class="slot">
      <slot name="describe"/>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from './Tool/Icon.vue'
import {openDialog} from "./Tool/openDialog";
import {addCar, addCollect} from "../store/store";
export default {
  components: {Icon},
  props: {
    name: String,
  },
  setup(props, context) {
    const touch = (e: PointerEvent) => {
      console.log(typeof props.name);
      openDialog({
        carFunc:()=>addCar(props.name),
        collectFunc:()=>addCollect(props.name)
      })
    }
    return {touch}
  }
}
</script>

<style lang="scss" scoped>
.good {
  border: 1px solid grey;
  width: 99%;
  overflow: hidden;
  height: 72px;
  display: flex;
  position: relative;

  .line {
    position: absolute;
    width: 1px;
    height: 52px;
    background: darkgrey;
    top: 50%;
    transform: translateY(-50%);
    left: 88px;
  }

  .slot {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>