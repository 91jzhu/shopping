<template>
  <teleport to="body">
    <div class="diaWrapper" v-show="props.visible" @click.stop="close" ref="overload">
      <div class="content">
        <h3>{{title}}</h3>
        <div class="count">
          <h4>购买数量</h4>
          <Icon name="minus" class="icon"/>
          <div>{{count}}</div>
          <Icon name="plus" class="icon"/>
        </div>
        <div class="select">
          <div class="collect" @click.stop="addGood" ref="carIcon">
            <Icon :name="leftIcon"/>
          </div>
          <div class="toCar" @click.stop="collectGood" ref="collectIcon">
            <Icon :name="rightIcon"/>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
import {ref} from "vue";
export default {
  components: {Icon},
  props: {
    title:String,
    visible: Boolean,
    leftFunc:Function,
    rightFunc:Function,
    leftIcon:String,
    rightIcon:String
  },
  setup(props, context) {
    const overload = ref(null)
    const carIcon = ref(null)
    const collectIcon = ref(null)
    const count=ref(1)
    const emitClose = () => {
      context.emit('update:visible', false)
    }
    const close = (e:PointerEvent) => {
      if (overload.value && (overload.value as HTMLDivElement)===(e.target as HTMLDivElement)){
        emitClose()
      }
    }
    const addGood = (e:PointerEvent) => {
      if (carIcon.value && (carIcon.value as HTMLDivElement).contains(e.target as HTMLDivElement)) {
        emitClose()
        props.leftFunc()
      }
    }
    const collectGood = (e:PointerEvent) => {
      if (collectIcon.value && (collectIcon.value as HTMLDivElement).contains(e.target as HTMLDivElement)) {
        props.rightFunc(context)
        emitClose()
      }
    }
    return {props, close, overload, carIcon,collectIcon, addGood, collectGood,count}
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
    height: 30%;
    width: 70%;
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 1px 1px 1px grey;
    .count{
      border:1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon{
        width:48px;
        height:48px;
        color:grey;
      }
      h4{
        padding-right: 4px;
        font-size:18px;
      }
      div{
        border:1px solid grey;
        border-radius: 8px;
        background: #f1f1f1;
        width:40px;
        height:40px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 4px;
      }
    }
    h3 {
      border-bottom: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 12px;
    }
    .select {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding:6px 14px 0 14px;
      .toCar {}
      .collect {}
    }
  }
}
</style>