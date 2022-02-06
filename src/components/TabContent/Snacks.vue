<template>
  <div class="snacks">
    <Good name="cake" price="$7">
      <template v-slot:describe>
        一块美味的小蛋糕
      </template>
    </Good>
    <Good name="bread" price="$5">
      <template v-slot:describe>
        刚烤熟的面包
      </template>
    </Good>
    <Good name="pizza" price="$12">
      <template v-slot:describe>
        偶尔来点快餐
      </template>
    </Good>
    <Good name="pear" price="$2">
      <template v-slot:describe>
        酸酸甜甜的梨
      </template>
    </Good>
    <Good name="bigcake" price="$56">
      <template v-slot:describe>
        生日也不能亏待自己
      </template>
    </Good>
    <Good name="fish" price="$28">
      <template v-slot:describe>
        海鲜来均衡营养
      </template>
    </Good>
    <Good name="banana" price="$2.5">
      <template v-slot:describe>
        健身后恰一根香蕉，美滋滋
      </template>
    </Good>
    <Good name="sweet" price="$3">
      <template v-slot:describe>
        趁身体没反应过来吃个甜甜圈
      </template>
    </Good>
    <Good name="beer" price="$3">
      <template v-slot:describe>
        快乐就一起哈啤
      </template>
    </Good>
    <Good name="sugar" price="$1.5">
      <template v-slot:describe>
        送女神一个她会很开心
      </template>
    </Good>
    <Good name="apple" price="$2">
      <template v-slot:describe>
        一日一苹果，医生远离我
      </template>
    </Good>
    <Good name="watermelon" price="$3">
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