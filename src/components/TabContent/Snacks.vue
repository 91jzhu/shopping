<template>
  <div class="snacks">
    <Good name="cake">
      <template v-slot:describe>
        一块美味的小蛋糕
      </template>
    </Good>
    <Good name="bread">
      <template v-slot:describe>
        刚烤熟的面包
      </template>
    </Good>
    <Good name="pizza">
      <template v-slot:describe>
        偶尔来点快餐
      </template>
    </Good>
    <Good name="pear">
      <template v-slot:describe>
        酸酸甜甜的梨
      </template>
    </Good>
    <Good name="bigcake">
      <template v-slot:describe>
        生日也不能亏待自己
      </template>
    </Good>
    <Good name="fish">
      <template v-slot:describe>
        海鲜来均衡营养
      </template>
    </Good>
    <Good name="banana">
      <template v-slot:describe>
        健身后恰一根香蕉，美滋滋
      </template>
    </Good>
    <Good name="sweet">
      <template v-slot:describe>
        趁身体没反应过来吃个甜甜圈
      </template>
    </Good>
    <Good name="beer">
      <template v-slot:describe>
        快乐就一起哈啤
      </template>
    </Good>
    <Good name="sugar">
      <template v-slot:describe>
        送女神一个她会很开心
      </template>
    </Good>
    <Good name="apple">
      <template v-slot:describe>
        一日一苹果，医生远离我
      </template>
    </Good>
    <Good name="watermelon">
      <template v-slot:describe>
        西瓜和夏天最配了
      </template>
    </Good>
  </div>
</template>

<script lang="ts">
import Good from '../Good.vue'
export default {
  components:{Good},
  setup(props,context){
    return {}
  }
}
</script>

<style scoped lang="scss">
.snacks {
  max-height: calc(100vh - 87px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>