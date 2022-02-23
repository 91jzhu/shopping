<template>
  <teleport to="body">
    <div class="wrapper" v-if="active">
      <div class="slot">
        <slot name="tip"/>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import {watchEffect} from "vue";

export default {
  props: {
    active: Boolean,
    delay: {
      type: Number,
      required: false,
      default: 1200
    }
  },
  setup(props, context) {
    watchEffect(() => {
      if (props.active) {
        setTimeout(() => {
          context.emit('update:active', false)
        }, props.delay)
      }
    }, props.active)
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  z-index: 2;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(240, 240, 240, .7);
  font-size: 20px;

  .slot {

  }
}
</style>