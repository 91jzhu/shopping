<template>
  <div class="tabsWrapper">
    <div class="title" v-for="child in children">
      {{ child.props.title }}
    </div>
    <div class="content">
      <component v-for="(child, index) in children" :is="child"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name:'Tabs',
  setup(props, context) {
    const children = context.slots.default()
    return {children, props}
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
