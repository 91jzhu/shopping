<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">
export default {
  props:{
    name:String
  },
}
</script>

<style>
.icon {
  padding:0 12px;
  width: 64px; height: 64px;
  fill: currentColor;
  overflow: hidden;
}
</style>