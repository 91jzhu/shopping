<template>
  <div class="RacWrapper" v-if="visible">
    <div class="content">
      <Icon :name="name" class="icon"/>
      <div class="line"/>
      <div class="price" v-if="price">{{price}}</div>
      <div class="count" v-if="count">{{ count ? 'x' + count : 'x3' }}</div>
      <div class="countDown" v-if="time">
        <span>还有 {{ time }} 天送达</span>
        <div class="pointWrapper">
          <div class="point display"/>
          <div class="point" ref="second"/>
          <div class="point" ref="third"/>
        </div>
      </div>
      <div class="delivered" v-else>
        <button @click.stop="fun">
          <slot name="content"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from "./Tool/Icon.vue";
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
export default {
  name: "Rac.vue",
  components: {Icon},
  props: {
    name: String,
    count: Number,
    expect: Number,
    price:{
      type:String,
      required:false
    },
    buttonFunc:Function
  },
  setup(props,context) {
    const time = ref(props.expect)
    const visible=ref(true)
    const first = ref<HTMLDivElement>(null)
    const second = ref<HTMLDivElement>(null)
    const third = ref<HTMLDivElement>(null)
    const timeId = setInterval(() => {
      time.value--
    }, 900)
    const start=setInterval(()=>{
      setTimeout(() => {
        second.value&&second.value.classList.add('display')
      }, 300)
      setTimeout(() => {
        third.value&&third.value.classList.add('display')
      }, 600)
      setTimeout(() => {
        third.value&&third.value.classList.remove('display')
        second.value&&second.value.classList.remove('display')
      }, 900)
    },900)
    const over=setTimeout(()=>{
      clearInterval(start)
    },900*time.value)
    onBeforeUnmount(()=>{
      clearTimeout(over)
    })
    watch(() => time.value, () => {
      if (time.value === 0) {
        window.clearInterval(timeId)
      }
    })
    const fun=()=>{
      props.buttonFunc()
      context.emit('update:receive',props.name)
      visible.value=false
    }
    return {time, first, second, third,visible,fun}
  }
}
</script>

<style scoped lang="scss">
.RacWrapper {
  width:100vw;
  overflow: hidden;
  .content {
    border: 2px solid #fb6700;
    border-radius: 12px;
    margin: 8px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    position: relative;
    .icon {
      width: 72px;
      height: 72px;
      margin-left: 12px;
    }
    .line {
      position: absolute;
      height: 72px;
      top: 50%;
      margin-top: -36px;
      left: 88px;
      border: 1px solid grey;
      transform: scaleX(0.5);
    }
    .countDown {
      font-size: 18px;
      //border: 1px solid blue;
      display: flex;
      justify-content: center;
      align-items: center;
      height:72px;
      margin-right: 8px;
      margin-left: 20px;
      border-radius: 24px;
      padding:0 8px;
      span {

      }
      .pointWrapper{
        //border:1px solid red;
        padding-top: 10px;
        .point {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: black;
          border-radius: 50%;
          margin: 0 4px 4px;
          opacity: 0;
          &.display {
            opacity: 1;
          }
        }
      }
    }

    .delivered {
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      right:14px;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button{
        background: orangered;
        color:white;
        font-size: 22px;
        border:none;
        width:144px;
        height:64px;
        border-radius: 24px;
      }
    }

    .count {
      border: 1px solid #aeaeae;
      border-radius: 8px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 72px;
      width: 32px;
      margin-left: 24px;
      padding: 0 6px;
    }
    .price{
      border: 1px solid #aeaeae;
      border-radius: 8px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 72px;
      margin-left: 24px;
      padding: 0 6px;
    }
  }
}
</style>