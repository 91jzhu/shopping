<template>
  <div class="infoWrapper">
    <div class="user">
      <div class="photo">
        <Icon name="user" class="pic"/>
      </div>
      <div class="bless">
        <span>我不会祝你今天开心</span>
        <span>我要祝你今天非常开心</span>
      </div>
    </div>
    <div class="money">
      <span>开心币: $</span>
      <span>{{ cash }}</span>
    </div>
    <div class="function">
      <div class="receive">
        <router-link to="/info/receive">
          <Icon name="receive"/>
          <span>待收货</span>
        </router-link>
      </div>
      <div class="collects">
        <router-link to="/info/collection">
          <Icon name="collects"/>
          <span>我的收藏</span>
        </router-link>
      </div>
    </div>
    <div class="record">
      <router-link to="/info/record">
        <span>我的购买记录</span>
      </router-link>
    </div>
    <Navbar/>
  </div>
</template>

<script lang="ts">
import Navbar from "../Navbar.vue";
import Icon from "../Tool/Icon.vue";
import {ref} from "vue";
import {fetchCash} from "../../store/carStore";
import DropDown from "../Tool/DropDown.vue";
import DropDownItem from "../Tool/DropDown-Item.vue";

export default {
  name: "Info",
  components: {DropDownItem, DropDown, Icon, Navbar},
  setup() {
    const cash = ref(fetchCash())
    const touch = (type: String) => {
      if (type === 'receive') {

      } else {

      }
    }
    return {touch, cash}
  }
}
</script>

<style scoped lang="scss">
.infoWrapper {
  height: calc(100% - 38px);
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .user {
    //border:1px solid blue;
    .photo {
      width: 100%;
      padding: 16px 0;
      //border: 1px solid grey;
      display: flex;
      justify-content: center;
      align-items: center;

      .pic {
        width:128px;
        height:128px;
      }
    }

    .bless {
      padding: 16px 0;
      border: 1px solid grey;
      border-radius: 24px;
      font-size: 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  .money {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    margin-top: 12px;
    padding: 36px;
    font-size: 28px;
    border-radius: 24px;
  }

  .function {
    border: 1px solid grey;
    margin-top: 12px;
    border-radius: 24px;
    padding: 18px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .receive {
      height: 100%;
      //border:1px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

    .collects {
      height: 100%;
      //border:1px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .record {
    height: 10%;
    width: 100%;
    border: 1px solid grey;
    border-radius: 24px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;

    a {
      text-decoration: none;

      span {

      }
    }
  }
}
</style>