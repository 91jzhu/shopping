<template>
  <div class="tabsWrapper">
    <div class="titleWrapper">
      <div class="title" v-for="child in children"
           :class="{selected:selected===child.props.title}"
           @click="()=>show(child.props.title)">
        {{ child.props.title }}
      </div>
    </div>
    <div class="contentWrapper">
      <component class="content"
                 v-for="(child,index) in children"
                 :class="{selected:child.props.title===selected}"
                 :is="child"
                 :key="index"/>
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
    const show = (title) => {
      context.emit('update:selected', title)
    }
    return {children, show}
  }
}
</script>
<style  scoped lang="scss">
.tabsWrapper {
  width: 33.33333%;
  .titleWrapper {
    width: 100%;
    position: relative;
    .title {
      cursor: pointer;
      display: inline-block;
      text-align: center;
      color:grey;
      width:33.33333%;
      padding: 8px 0;
      font-size: 24px;
      position: relative;
      &.selected {
        color:black;
        font-weight: 600;
        transform: translateY(4%);
        &::after{
          display: block;
          content: "";
          position: absolute;
          width:60px;
          height:2px;
          left:50%;
          margin-left: -30px;
          background: black;
        }
      }
    }
  }

  .contentWrapper {
    ::v-deep .content {
      display: none;
      &.selected{
        display: block;
      }
    }
  }
}

</style>