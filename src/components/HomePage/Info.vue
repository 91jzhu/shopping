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
    <div class="function">
      <div class="receive">
        <router-link to="/info/receive">
          <span class="mount">{{receiveMount}}</span>
          <Icon name="receive"/>
          <span>待收货</span>
        </router-link>
      </div>
      <div class="collects">
        <router-link to="/info/collection">
          <span class="mount">{{collectMount}}</span>
          <Icon name="collects"/>
          <span>我的收藏</span>
        </router-link>
      </div>
    </div>
    <div class="money">
      <span>开心币: $</span>
      <span>{{ cash }}</span>
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
import {getReceiveMount} from "../../store/receiveStore";
import {getCollectMount} from "../../store/collectStore";
import Toast from "../Tool/Toast.vue";
export default {
  components: {Toast, DropDownItem, DropDown, Icon, Navbar},
  setup() {
    const cash = ref(fetchCash())
    const receiveMount=ref(getReceiveMount())
    const collectMount=ref(getCollectMount())
    return {cash,receiveMount,collectMount}
  }
}
</script>

<style scoped lang="scss">
.infoWrapper {
  height: calc(100% - 38px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(224,234,236);
  background: linear-gradient(0deg, rgba(224,234,236,1) 0%, rgba(231,223,221,1) 100%);;
  .user {
    .photo {
      width: 100%;
      padding: 16px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .pic {
        width:128px;
        height:128px;
      }
    }

    .bless {
      background: #ffffff;
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
    background: #ffffff;
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
    background: #ffffff;
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
        position: relative;
        .mount{
            border:1px solid red;
            position: absolute;
            top:-5%;
            right:-5%;
            width:24px;
            height:24px;
            background: #f87209;
            color:#fefbee;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
        }
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
        position: relative;
        .mount{
          border:1px solid red;
          position: absolute;
          top:-5%;
          right:-5%;
          width:24px;
          height:24px;
          display: flex;
          background: #f87209;
          color:#fefbee;
          font-size: 18px;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
        }
      }
    }
  }

  .record {
    background: #ffffff;
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
      color:black;
      span {

      }
    }
  }
}
</style>