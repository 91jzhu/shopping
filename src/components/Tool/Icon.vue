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
  width: 4rem; height: 4rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>