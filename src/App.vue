<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<style>
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
