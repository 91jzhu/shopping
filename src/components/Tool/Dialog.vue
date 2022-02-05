<template>
  <teleport to="body">
    <div class="diaWrapper" v-show="props.visible" @click.stop="close" ref="overload">
      <div class="content">
        <h3>放到购物车或者收藏</h3>
        <div class="select">
          <div class="toCar" @click.stop="addGood" ref="carIcon">
            <Icon name="car"/>
          </div>
          <div class="collect" @click.stop="collectGood" ref="collectIcon">
            <Icon name="collect"/>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
import {onMounted, ref} from "vue";

export default {
  name: "Dialog",
  components: {Icon},
  props: {
    visible: Boolean
  },
  setup(props, context) {
    const overload = ref(null)
    const carIcon = ref(null)
    const collectIcon = ref(null)
    const emitClose = () => {
      context.emit('update:visible', false)
    }
    const close = (e) => {
      if (overload.value && overload.value === e.target) {
        emitClose()
      }
    }
    const addGood = (e) => {
      if (carIcon.value && carIcon.value.contains(e.target)) {
        emitClose()
      }
    }
    const collectGood = (e) => {
      if (collectIcon.value && collectIcon.value.contains(e.target)) {
        emitClose()
      }
    }
    return {props, close, overload, carIcon,collectIcon, addGood, collectGood}
  }
}
</script>

<style scoped lang="scss">
.diaWrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(193, 193, 193, 0.3);
  z-index: 2;

  .content {
    position: absolute;
    height: 20%;
    width: 70%;
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ghostwhite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 1px 1px 1px grey;

    h3 {
      border-bottom: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 12px;
    }

    .select {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 6px;
      //border:1px solid red;
      .toCar {
      }

      .collect {
      }
    }

  }
}
</style>