<template>
  <div class="wrapper">
    <div class="titleWrapper" @click.stop='toggle'>
      <div class="title">{{ title }}</div>
      <div class="contentWrapper" v-if="visible">
        <div class="content">
          <component v-for="child in defaults" :is="child"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
import Dialog from "./Dialog.vue";

export default {
  name: "DropDown",
  components: {Dialog},
  props: {
    title: String
  },
  setup(props, context) {
    const defaults = context.slots.default()
    console.log(defaults)
    const visible = ref(true)
    const toggle = () => {
      visible.value = !visible.value
    }
    return {visible, toggle, defaults}
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  border: 1px solid red;

  .titleWrapper {
    border: 1px solid green;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;

    .title {
      font-size: 24px;
      color:#9f9d9e;
      padding: 4px 8px;
      display: inline-block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 12px;
    }

    .contentWrapper {
      box-shadow: 1px 1px 3px rgba(0, 0, 0, .3),
                  0 1px 3px rgba(0,0,0,.3);
      border-radius: 8px;
      display: inline-block;
      position: relative;
      margin-left: 160px;
      width:210px;
      height:120px;
      &::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 54px;
        right: 200px;
        border-bottom: 10px solid white;
        border-right: 10px solid white;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        transform: rotate(135deg);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
      }
      &::after{
        content: "";
        top:54px;
        width: 12px;
        height: 20px;
        position: absolute;
        background: white;
      }
      .content{
        max-height: 100px;
        overflow-y:auto;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>