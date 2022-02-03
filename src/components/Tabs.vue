<template>
  <div class="tabsWrapper">
    <div class="title" v-for="t in titles">
      {{ t }}
    </div>
    <div class="content">
      <component v-for="c in defaults" :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name:'Tabs.vue',
  setup(props, context) {
    console.log(12);
    const defaults = context.slots.default()
    const titles = context.attrs
    console.log(context);
    return {defaults, titles,props}
  },
}
</script>

<style scoped lang="scss">
.tabsWrapper {
  width: 33.33333%;

  .title {
    border-bottom: 1px solid grey;
    cursor: pointer;

    &.selected {
      background: black;
      color: deepskyblue;
    }
  }

  .content {
    display: block;

    &.selected {
    }
  }
}
</style>