<template>
  <div class="sports">
    <Good name="football">
      <template v-slot:describe>
        说不定你就是国足的荣光
      </template>
      <template v-slot:price>
        $89
      </template>
    </Good>
    <Good name="eight">
      <template v-slot:describe>
        训练专用服，提高运动表现
      </template>
      <template v-slot:price>
        $109
      </template>
    </Good>
    <Good name="iron">
      <template v-slot:describe>
        肌肉很帅有没有
      </template>
      <template v-slot:price>
        $59
      </template>
    </Good>
    <Good name="target">
      <template v-slot:describe>
        练习你的精准度
      </template>
      <template v-slot:price>
        $79
      </template>
    </Good>
    <Good name="basketball">
      <template v-slot:describe>
        你和樱木花道的差距
      </template>
      <template v-slot:price>
        $99
      </template>
    </Good>
    <Good name="baseball">
      <template v-slot:describe>
        MLB 比赛专用
      </template>
      <template v-slot:price>
        $119
      </template>
    </Good>
    <Good name="handle">
      <template v-slot:describe>
        强大的握力能震慑别人
      </template>
      <template v-slot:price>
        $69
      </template>
    </Good>
    <Good name="pingpong">
      <template v-slot:describe>
        许斤签名球拍
      </template>
      <template v-slot:price>
        $59
      </template>
    </Good>
    <Good name="fchess">
      <template v-slot:describe>
        国际象棋贼有牌面
      </template>
      <template v-slot:price>
        $39
      </template>
    </Good>
    <Good name="baoling">
      <template v-slot:describe>
        享受毁灭的快感
      </template>
      <template v-slot:price>
        $89
      </template>
    </Good>
    <Good name="tennis">
      <template v-slot:describe>
        网球，高雅的运动
      </template>
      <template v-slot:price>
        $109
      </template>
    </Good>
    <Good name="badminton">
      <template v-slot:describe>
        悄悄和你说，女生喜欢打羽毛球
      </template>
      <template v-slot:price>
        $79
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

<style scoped lang="scss">
.sports {
  max-height: calc(100vh - 87px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>