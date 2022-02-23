<template>
  <div class="goodsWrapper">
    <Tabs v-model:selected="selected" class="header">
      <Tab title="零食">
        <Snacks/>
      </Tab>
      <Tab title="宠物">
        <Pet/>
      </Tab>
      <Tab title="体育">
        <Sports/>
      </Tab>
    </Tabs>
    <Navbar/>
  </div>
</template>

<script lang="ts">
import Navbar from '../Navbar.vue'
import Tab from '../Tool/Tab.vue'
import Tabs from '../Tool/Tabs.vue'
import Snacks from '../TabContent/Snacks.vue'
import Pet from '../TabContent/Pet.vue'
import Sports from '../TabContent/Sports.vue'
import {ref} from 'vue'
import Toast from "../Tool/Toast.vue";

export default {
  name: 'Goods.vue',
  components: {Toast, Navbar, Tab, Tabs, Snacks, Pet, Sports},
  setup() {
    let selected = ref('零食')
    return {selected}
  }
}
</script>

<style scoped lang="scss">
.goodsWrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .header {
    width: 100%;

  }
}


</style>