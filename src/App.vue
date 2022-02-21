<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">


* {
  margin: 0;
  padding: 0;
}

.app {
  height: 100vh;
  overflow: hidden;
}

.bottle {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script lang="ts">
import Icon from "./components/Tool/Icon.vue";

export default {
  components: {Icon}
}
</script>