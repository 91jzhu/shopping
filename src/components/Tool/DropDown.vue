<template>
  <div class="wrapper">
    <div class="titleWrapper">
      <div class="title" @click.stop='toggle'>{{ title }}</div>
      <div class="contentWrapper" v-if="visible">
        <div class="content" @click="changeChart">
          <component v-for="child in defaults"
                     :is="child" :data-date="child.props.date"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
import Dialog from "./Dialog.vue";

export default {
  components: {Dialog},
  props: {
    title: String
  },
  setup(props, {emit, slots}) {
    const defaults = slots.default()[0].children
    const visible = ref(true)
    const toggle = () => {
      visible.value = !visible.value
    }
    const changeChart = (e) => {
      const str = e.target.dataset.date
      let string = str
      if (str.includes('日')) {
        string = str.replace('年', '-').replace('月', '-').replace('日', '')
      }
      emit('update:title', string)
      emit('update:chart', str)
    }
    return {visible, toggle, defaults, changeChart}
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  flex: 1;

  .titleWrapper {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;

    .title {
      font-size: 22px;
      color: #9f9d9e;
      padding: 4px 2px;
      display: inline-block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 8px;
    }

    .contentWrapper {
      box-shadow: 1px 1px 3px rgba(0, 0, 0, .2),
      -1px 1px 3px rgba(0, 0, 0, .2),
      1px -1px 3px rgba(0, 0, 0, .2);
      border-radius: 8px;
      display: inline-block;
      position: relative;
      margin-left: 160px;
      padding: 8px 0;
      width: 180px;
      height: 120px;


      &::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 60px;
        left:-5%;
        border-bottom: 10px solid white;
        border-right: 10px solid white;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        transform: rotate(135deg);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
      }

      &::after {
        content: "";
        top: 60px;
        width: 12px;
        height: 20px;
        position: absolute;
        background: white;
      }

      .content {
        max-height: 120px;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>