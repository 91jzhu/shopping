<template>
  <div class="wrapper">
    <header>
      <router-link to="/info">
        <Icon name="back"/>
      </router-link>
      <span>
      购买记录
      </span>
      <Toggle v-model:selected="selected">
        <ToggleItem content="单日"/>
        <ToggleItem content="总览"/>
      </Toggle>
    </header>
    <Single v-if="selected==='单日'"/>
    <Overview v-if="selected==='总览'"/>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
import Icon from "../Tool/Icon.vue";
import DropDown from "../Tool/DropDown.vue";
import DropDownItem from "../Tool/DropDown-Item.vue";
import Toggle from "../Tool/Toggle.vue";
import ToggleItem from "../Tool/ToggleItem.vue";
import Single from "../../display/Single.vue";
import Overview from "../../display/Overview.vue";

export default {
  components: {Overview, Single, ToggleItem, Toggle, DropDownItem, DropDown, Icon},
  setup() {
    const selected = ref('单日')
    return {selected}
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: inline-block;
      padding: 4px 8px;
      margin-right: 48px;
    }

    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 20px;
    }
  }
}
</style>