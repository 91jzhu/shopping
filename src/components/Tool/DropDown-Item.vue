<template>
  <div class="itemWrapper">
    {{date}}
    <div class="line"/>
  </div>
</template>

<script lang="ts">
export default {
  name: "DropDown-Item",
  props:{
    date:String
  },
}
</script>

<style scoped lang="scss">
.itemWrapper {
  padding: 20px 26px;
  font-size: 20px;
  white-space: nowrap;
  position: relative;
  .line{
    position: absolute;
    width:300px;
    height:2px;
    transform: scale(0.5);
    background: grey;
    left:50%;
    margin-left: -150px;
    bottom:0;
  }
}
</style>