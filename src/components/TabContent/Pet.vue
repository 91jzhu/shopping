<template>
  <div class="pet">
    <Good name="pethome" price="$35">
      <template v-slot:describe>
        宠物也需要家
      </template>
    </Good>
    <Good name="petlove" price="$20">
      <template v-slot:describe>
        介个就是爱情
      </template>
    </Good>
    <Good name="petfood" price="$15">
      <template v-slot:describe>
        喜欢宠物就给它买零食
      </template>
    </Good>
    <Good name="petclothes" price="$23">
      <template v-slot:describe>
        洗衣服显然比为宠物洗澡更简单
      </template>
    </Good>
    <Good name="cat" price="$49">
      <template v-slot:describe>
        一位楚楚可怜的喵星人
      </template>
    </Good>
    <Good name="dog" price="$49">
      <template v-slot:describe>
        一位呆呆的汪星人
      </template>
    </Good>
    <Good name="petvaccin" price="$69">
      <template v-slot:describe>
        阻止病毒折磨我们的宠物
      </template>
    </Good>
    <Good name="petpicture" price="$99">
      <template v-slot:describe>
        为宠物量身打造的摄像机
      </template>
    </Good>
    <Good name="petwash" price="$59">
      <template v-slot:describe>
        洗澡后的宠物更有活力
      </template>
    </Good>
    <Good name="petbag" price="$39">
      <template v-slot:describe>
        宠物的移动房车
      </template>
    </Good>
    <Good name="petnice" price="$39">
      <template v-slot:describe>
        为爱美人士的宠物准备
      </template>
    </Good>
    <Good name="pettoy" price="$15">
      <template v-slot:describe>
        您和宠物娱乐的最佳选择
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