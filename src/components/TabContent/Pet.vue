<template>
  <div class="pet">
    <Good name="pethome">
      <template v-slot:describe>
        宠物也需要家
      </template>
      <template v-slot:price>
        $35
      </template>
    </Good>
    <Good name="petlove">
      <template v-slot:describe>
        介个就是爱情
      </template>
      <template v-slot:price>
        $20
      </template>
    </Good>
    <Good name="petfood">
      <template v-slot:describe>
        喜欢宠物就给它买零食
      </template>
      <template v-slot:price>
        $15
      </template>
    </Good>
    <Good name="petclothes">
      <template v-slot:describe>
        洗衣服显然比为宠物洗澡更简单
      </template>
      <template v-slot:price>
        $23
      </template>
    </Good>
    <Good name="cat">
      <template v-slot:describe>
        一位楚楚可怜的喵星人
      </template>
      <template v-slot:price>
        $49
      </template>
    </Good>
    <Good name="dog">
      <template v-slot:describe>
        一位呆呆的汪星人
      </template>
      <template v-slot:price>
        $49
      </template>
    </Good>
    <Good name="petvaccin">
      <template v-slot:describe>
        阻止病毒折磨我们的宠物
      </template>
      <template v-slot:price>
        $69
      </template>
    </Good>
    <Good name="petpicture">
      <template v-slot:describe>
        为宠物量身打造的摄像机
      </template>
      <template v-slot:price>
        $99
      </template>
    </Good>
    <Good name="petwash">
      <template v-slot:describe>
        洗澡后的宠物更有活力
      </template>
      <template v-slot:price>
        $59
      </template>
    </Good>
    <Good name="petbag">
      <template v-slot:describe>
        宠物的移动房车
      </template>
      <template v-slot:price>
        $39
      </template>
    </Good>
    <Good name="petnice">
      <template v-slot:describe>
        为爱美人士的宠物准备
      </template>
      <template v-slot:price>
        $39
      </template>
    </Good>
    <Good name="pettoy">
      <template v-slot:describe>
        您和宠物娱乐的最佳选择
      </template>
      <template v-slot:price>
        $15
      </template>
    </Good>
  </div>
</template>

<script lang="ts">
import Good from '../Good.vue'
export default {
  components:{Good}
}

</script>

<style lang="scss" scoped>
.pet {
  max-height: calc(100vh - 87px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>