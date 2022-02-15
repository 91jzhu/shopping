<template>
  <div class="wrapper">
    <header>
      <router-link to="/info">
        <Icon name="back"/>
      </router-link>
      <span>
      收藏夹
    </span>
    </header>
    <main v-if="visible">
      <Rac v-for="{name,price} in collects"
           :key="name"
           :name="name"
           :price="price"
           :button-func="()=>deleteCollect(name)">
        <template v-slot:content>
          取消收藏
        </template>
      </Rac>
    </main>
    <div v-else class="replace">收藏夹空空如也</div>
  </div>
</template>

<script lang="ts">
import Icon from "../Tool/Icon.vue";
import Rac from "../Rac.vue";
import {ref, watchEffect} from "vue";
import {deleteOne, fetchCollect} from "../../store/collectStore";
import {Car} from "../../type";

export default {
  name: "Collection.vue",
  components: {Icon, Rac},
  setup() {
    const collects = ref(fetchCollect())
    const visible = ref(true)
    const deleteCollect = (name: string) => {
      collects.value.forEach((item: Partial<Car>, index: number) => {
        collects.value.splice(index, 1)
      })
      deleteOne(name)
    }
    watchEffect(() => {
      if (collects.value.length === 0) {
        visible.value = false
      }
    })
    return {collects, deleteOne, deleteCollect, visible}
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  height:100vh;
  width:100vh;
  overflow: hidden;
  header {
    border-bottom: 1px solid grey;
    display: flex;

    a {
      display: inline-block;
      padding: 4px 8px;
      //border:1px solid red;
    }

    span {
      //border:1px solid red;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 22vw;
      font-size: 24px;
    }
  }

  .replace {
    border: 1px solid red;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80vw;
    transform: translate(-50%, -50%);
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>