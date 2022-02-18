<template>
  <div class="toggleWrapper" @click="x">
    <component v-for="child in childs" :is="child" :ref="child.props.content===selected?childRef:null"/>
    <div class="border" ref="border"/>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
export default {
  props:{
    selected:String
  },
  setup(props, {slots}) {
    const childs = slots.default()
    const childRef=ref(null)
    const border=ref(null)
    const x = () => {
      console.log(childRef.value);
      console.log(border.value);
    }
    return {childs, x,childRef,border}
  }
}
</script>

<style scoped lang="scss">
.toggleWrapper {
  border: 1px solid grey;
  border-radius: 36px;
  position: relative;

  .border {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 36px;
    width: 64px;
    height: 50px;
    border: 1px solid red;
  }
}
</style>