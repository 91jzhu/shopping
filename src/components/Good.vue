<template>
  <div class="good" @touchstart="touch">
    <Icon :name="name"/>
    <div class="line"/>
    <div class="slot">
      <slot name="describe"/>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from './Icon.vue'

export default {
  components: {Icon},
  props: {
    name: String,
  },
  setup(props,context){
    const touch=(e)=>{
      setTimeout(()=>{
        console.log(e.target);
      },500)
    }
    return {touch}
  }
}
</script>

<style lang="scss" scoped>
.good {
  border: 1px solid grey;
  width: 99%;
  overflow: hidden;
  height: 72px;
  display: flex;
  position: relative;
  .line{
    position: absolute;
    width:1px;
    height:70px;
    background: red;
    left:88px;
  }
  .slot{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>