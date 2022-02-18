<template>
  <div class="toggleWrapper">
    <component
      v-for="(child, index) in childs"
      :is="child"
      :ref="el => childrenRef[index] = el"
      @click="onClick(index)"
    />
    <div class="border" ref="border" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    selected: String
  },
  setup(props, { slots }) {
    const childs = slots.default()
    const childrenRef = ref([])
    const selectedChildRef = ref(null)
    const border = ref(null)
    const onClick = (index) => {
      selectedChildRef.value = childrenRef.value[index]
      console.log(selectedChildRef.value)
    }
    return { childs, onClick, childrenRef, border }
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
