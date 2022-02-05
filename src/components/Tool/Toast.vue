<template>
  <div class="wrapper" v-if="active">
    <div class="slot">
      <slot name="tip"/>
    </div>
  </div>
</template>

<script lang="ts">

import {onMounted, watchEffect} from "vue";

export default {
  name: "Toast.vue",
  props: {
    active: Boolean,
    delay: {
      type: Number,
      required: false,
      default: 2000
    }
  },
  setup(props, context) {
      watchEffect(()=>{
        if(props.active){
          setTimeout(()=>{
            context.emit('update:active',false)
          },props.delay)
        }
      },props.active)
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  z-index: 2;
  bottom: 60px;
  left: 50%;
  width: 32%;
  height: 6%;
  transform: translateX(-50%);
  background: white;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  .slot {
  }
}
</style>