<template>
  <div class="sports">
    <Good name="football" price="$89">
      <template v-slot:describe>
        说不定你就是国足的荣光
      </template>
    </Good>
    <Good name="eight" price="$109">
      <template v-slot:describe>
        训练专用服，提高运动表现
      </template>
    </Good>
    <Good name="iron" price="$59">
      <template v-slot:describe>
        肌肉很帅有没有
      </template>
    </Good>
    <Good name="target" price="$79">
      <template v-slot:describe>
        练习你的精准度
      </template>
    </Good>
    <Good name="basketball" price="$99">
      <template v-slot:describe>
        你和樱木花道的差距
      </template>
    </Good>
    <Good name="baseball" price="$119">
      <template v-slot:describe>
        MLB 比赛专用
      </template>
    </Good>
    <Good name="handle" price="$69">
      <template v-slot:describe>
        强大的握力能震慑别人
      </template>
    </Good>
    <Good name="pingpong" price="$59">
      <template v-slot:describe>
        许斤签名球拍
      </template>
    </Good>
    <Good name="fchess" price="$39">
      <template v-slot:describe>
        国际象棋贼有牌面
      </template>
    </Good>
    <Good name="baoling" price="$89">
      <template v-slot:describe>
        享受毁灭的快感
      </template>
    </Good>
    <Good name="tennis" price="$109">
      <template v-slot:describe>
        网球，高雅的运动
      </template>
    </Good>
    <Good name="badminton" price="$79">
      <template v-slot:describe>
        悄悄和你说，女生喜欢打羽毛球
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