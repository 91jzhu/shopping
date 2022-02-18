<template>
  <div class="itemWrapper">
    {{date}}
  </div>
</template>

<script lang="ts">
export default {
  name: "DropDown-Item",
  props:{
    date:String
  },
  setup(props){
    console.log(props.date)
  }
}
</script>

<style scoped lang="scss">
.itemWrapper {
  padding: 18px 26px;
  font-size: 20px;
  white-space: nowrap;
  position: relative;
  .line{
    position: absolute;
    width:320px;
    height:2px;
    transform: scale(0.5);
    background: grey;
    left:50%;
    margin-left: -160px;
    bottom:0;
  }
}
</style>