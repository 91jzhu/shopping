<template>
  <teleport to="body">
    <div class="diaWrapper" v-if="props.visible" @click.stop="close" ref="overload">
      <div class="content">
        <h3>{{ title }}</h3>
        <div class="countWrapper">
          <Icon :name="good" class="good"/>
          <div class="line"/>
          <div class="count">
            <h4>购买数量</h4>
            <div class="countBtn">
              <Icon name="minus" class="icon" @click.stop="minus"/>
              <div>{{ count }}</div>
              <Icon name="plus" class="icon" @click.stop="plus"/>
            </div>
          </div>
        </div>
        <div class="select">
          <span class="collect" ref="carIcon" @click.stop="addGood">{{ leftWord }}</span>
          <span class="car" ref="collectIcon" @click.stop="collectGood">{{ rightWord }}</span>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
import {onMounted, ref} from "vue";
import {openToast} from "./openToast";

export default {
  components: {Icon},
  props: {
    title: String,
    visible: Boolean,
    leftFunc: Function,
    rightFunc: Function,
    leftWord: String,
    rightWord: String,
    good: String,
    count: Number
  },
  setup(props, context) {
    const overload = ref(null)
    const carIcon = ref(null)
    const collectIcon = ref(null)
    const minus = () => {
      if (props.count === 1) {
        context.emit('update:delete', false)
        emitClose()
        return
      }
      context.emit('update:count', props.count - 1)
    }
    const plus = () => {
      context.emit('update:count', props.count + 1)
    }
    const emitClose = () => {
      context.emit('update:visible', false)
    }
    const close = (e: PointerEvent) => {
      if (overload.value && (overload.value as HTMLDivElement) === (e.target as HTMLDivElement)) {
        emitClose()
      }
    }
    const addGood = (e: PointerEvent) => {
      if (carIcon.value && (carIcon.value as HTMLDivElement).contains(e.target as HTMLDivElement)) {
        emitClose()
        props.leftFunc(context)
      }
    }
    const collectGood = (e: PointerEvent) => {
      if (collectIcon.value && (collectIcon.value as HTMLDivElement).contains(e.target as HTMLDivElement)) {
        props.rightFunc(context, props.count)
        emitClose()
      }
    }
    return {
      props, close, overload, carIcon, collectIcon,
      addGood, collectGood, minus, plus
    }
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
    height: 240px;
    width: 70%;
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 1px grey;

    h3 {
      height: 56px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .countWrapper {
      border-top: 1px solid grey;
      padding: 12px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100px;

      .good {
        width: 72px;
        height: 72px;
        margin: 0 12px;
      }

      .line {
        position: absolute;
        height: 88px;
        top: 50%;
        margin-top: -44px;
        left: 88px;
        border: 1px solid grey;
        transform: scaleX(0.5);
      }

      .count {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        h4 {
          font-size: 18px;
          font-weight: 400;
          padding: 8px 0;
        }

        .countBtn {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding-bottom: 8px;

          div {
            border: 1px solid grey;
            border-radius: 8px;
            background: #f1f1f1;
            width: 40px;
            height: 40px;
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 4px;
          }

          .icon {
            width: 48px;
            height: 48px;
            color: grey;
          }
        }
      }
    }

    .select {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;

      span {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 19px;
        color: white;
        font-weight: 600;

        &.car {
          background: #ff7204;
          border-bottom-right-radius: 24px;
        }

        &.collect {
          background: #ffba05;
          border-bottom-left-radius: 24px;
        }
      }
    }
  }
}
</style>