<template>
  <div class="goodsWrapper">
    <Tabs :selected="selected" @update="update" class="header">
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
import Navbar from './Navbar.vue'
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
import Snacks from './TabContent/Snacks.vue'
import Pet from './TabContent/Pet.vue'
import Sports from './TabContent/Sports.vue'
import {ref} from 'vue'

export default {
  components: {Navbar, Tab, Tabs, Snacks,Pet,Sports},
  setup() {
    let selected = ref('零食')
    const update = val => {
      selected.value = val
    }
    return {selected, update}
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