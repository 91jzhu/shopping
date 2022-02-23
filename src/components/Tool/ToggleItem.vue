<template>
  <div class="toggleItemWrapper">
    {{ content }}
  </div>
</template>

<script lang="ts">
export default {
  name: "ToggleItem",
  props: {
    content: String
  },
}
</script>

<style scoped lang="scss">
.toggleItemWrapper {
  font-size: 20px;
  display: inline-block;
  padding: 12px;
}
</style>