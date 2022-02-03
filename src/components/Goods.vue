<template>
  <div class="goodsWrapper">
<!--    <header>导航栏</header>-->
<!--    <main>商品</main>-->
    <Tabs :selected="selected" @update="update">
      <Tab title="tab1">content1</Tab>
      <Tab title="tab2">content2</Tab>
      <Tab title="tab3">content3</Tab>
    </Tabs>
<!--    <Navbar/>-->
  </div>
</template>

<script lang="ts">
import Navbar from './Navbar.vue'
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
import {ref} from 'vue'

export default {
  components:{Navbar,Tab,Tabs},
  setup(){
    let selected=ref('tab1')
    const update=val=>{
      selected.value=val
    }
    return {selected,update}
  }
}
</script>

<style scoped lang="scss">
.goodsWrapper{
  display: flex;
  flex-direction: column;
  height:100vh;
  header{
    border:1px solid red;

  }
  main{
    border:1px solid blue;
    flex:1;
  }
}

</style>