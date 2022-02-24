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
      <Rac v-for="collect in collects"
           :key="collect.name"
           :name="collect.name"
           :price="collect.price"
           :button-func="()=>deleteCollect(collect.name)">
        <template v-slot:content>
          取消收藏
        </template>
      </Rac>
    </main>
    <div v-else class="replace">
      <Icon name="null"/>
      <span>收藏夹空空如也</span>
      <router-link to="/goods">
        去收藏几个宝贝
      </router-link>
    </div>
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
      deleteOne(name)
      collects.value.forEach((item: Partial<Car>, index: number) => {
        if (item.name === name) {
          collects.value.splice(index, 1)
        }
      })
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
.wrapper {
  height: 100vh;
  width: 100vh;
  overflow: hidden;

  header {
    border-bottom: 1px solid grey;
    display: flex;

    a {
      display: inline-block;
      padding: 4px 8px;
    }

    span {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 18vw;
      font-size: 20px;
    }
  }

  .replace {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80vw;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: 112px;
      height: 112px;
      margin-bottom: 12px;
    }

    a {
      text-decoration: none;
      color: sandybrown;
      border: 1px solid lightgrey;
      box-shadow: 1px 1px 2px lightgrey;
      margin-top: 8px;
      padding: 12px 18px;
      border-radius: 24px;
    }
  }
}
</style>