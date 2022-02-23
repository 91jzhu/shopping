<template>
  <div class="start">
    <div class="logo">
      <Icon name="shopping" class="icon"/>
      <span>开心商店</span>
    </div>
    <router-link to="/goods" class="go">逛一逛</router-link>
  </div>
</template>

<script lang="ts">
import Icon from "./components/Tool/Icon.vue";
export default {
  name: "Front",
  components: {Icon}
}
</script>

<style scoped lang="scss">
.start {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .logo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 148px;
      height: 148px;
      margin-bottom:32px;
      animation: logo-into 900ms linear;
    }
    @keyframes logo-into {
      0%{margin-right: 100vw}
      50%{margin-right: 50vw}
      100%{margin-right: 0}
    }
    span{
      letter-spacing: 2px;
      white-space: nowrap;
      color:sandybrown;
      font-size: 42px;
      font-weight: 700;
      text-shadow: 1px 1px 1px white;
      animation: span-into 900ms linear;
    }
    @keyframes span-into {
      0%{margin-left: 100vw}
      50%{margin-left: 50vw}
      100%{margin-left: 0}
    }
  }
  .go{
    text-decoration: none;
    display: block;
    color:white;
    background: #fb6400;
    font-size: 32px;
    padding:12px 36px;
    border-radius: 36px;
    animation: scale 2s linear infinite;
  }
  @keyframes scale {
    0%{transform: scale(1.3)}
    50%{transform: scale(0.9)}
    100%{transform: scale(1.3)}
  }
}
</style>