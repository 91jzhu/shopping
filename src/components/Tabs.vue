<template>
  <div class="tabsWrapper">
    <div class="titleWrapper">
      <div class="title" v-for="child in children"
           :class="{selected:selected===child.props.title}"
           @click="()=>show(child.props.title)">
        {{ child.props.title }}
      </div>
      <div class="line"/>
    </div>
    <div class="contentWrapper">
      <component class="content"
                 v-for="child in children"
                 :is="child"
                 v-show="child.props.title===selected"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    selected: String
  },
  setup(props, context) {
    const children = context.slots.default()
    children.forEach(child => {
      console.log(child);
    })
    const show = (title) => {
      context.emit('update', title)
    }
    return {children, show}
  },
}
</script>

<style scoped lang="scss">
.tabsWrapper {
  width: 33.33333%;

  .titleWrapper {
    border-bottom: 1px solid grey;
    width: 100%;

    .line{

    }

    .title {
      cursor: pointer;
      display: inline-block;
      width: 33.33333%;
      text-align: center;

      &.selected {
        color: deepskyblue;
      }
    }
  }

  .contentWrapper {
    border: 1px solid red;

    .content {
      background: black;
      display: none;
    }
  }
}

</style>