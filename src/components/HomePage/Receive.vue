<template>
  <header>
    <router-link to="/info">
      <Icon name="back"/>
    </router-link>
    <span>
      待收货
    </span>
  </header>
  <main>
    <Rac/>
  </main>
</template>

<script lang="ts">
import Icon from "../Tool/Icon.vue";
import Rac from "../Rac.vue";

export default {
  name: "Receive",
  components: {Icon,Rac}
}
</script>

<style scoped lang="scss">
header {
  border-bottom: 1px solid grey;
  display: flex;
  a {
    display: inline-block;
    padding: 4px 8px;
    //border:1px solid red;
  }
  span {
    //border:1px solid red;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 22vw;
    font-size: 24px;
  }
}

main {

}
</style>