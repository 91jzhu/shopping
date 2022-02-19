<template>
  <div class="toggleWrapper"
       @click="toggle"
       ref="wrapper">
    <component v-for="child in childs" :is="child"/>
    <div class="border" ref="border"/>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
export default {
  props: {
    selected: String
  },
  setup(props, {slots,emit}) {
    const childs = slots.default()
    const border = ref<HTMLDivElement>(null)
    const wrapper=ref<HTMLDivElement>(null)
    const checked=ref(false)
    const toggle = (e) => {
      const {left:Eleft,width}=e.target.getBoundingClientRect()
      const {left:Wleft}=wrapper.value.getBoundingClientRect()
      const lastLeft=Eleft-Wleft
      border.value.style.left=lastLeft+'px'
      border.value.style.width=width+'px'
      emit('update:selected',e.target.textContent)
    }
    return {childs, toggle, border,wrapper,checked}
  }
}
</script>

<style scoped lang="scss">
.toggleWrapper {
  border: 1px solid grey;
  border-radius: 36px;
  position: relative;
  margin-right: 8px;
  .border {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 36px;
    width: 64px;
    height: 50px;
    border: 1px solid green;
    background: sandybrown;
    transition: left 250ms;
  }
}
</style>