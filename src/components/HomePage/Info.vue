<template>
  <div class="infoWrapper">
    <div class="user">
      <div class="photo">
        <Icon name="user" class="pic"/>
      </div>
      <pre>
        <div class="bless">我不会祝你今天开心
          我要祝你今天非常开心</div>
      </pre>
    </div>
    <div class="money">
      <span>开心币: $</span>
      <span>{{cash}}</span>
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
      <router-link to="/info/collection">
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

export default {
  name: "Info",
  components: {Icon, Navbar},
  setup(){
    const cash=ref(fetchCash())
    const touch=(type:String)=>{
      if(type==='receive'){

      }else{

      }
    }
    return {touch,cash}
  }
}
</script>

<style scoped lang="scss">
.infoWrapper {
  height: calc(100% - 38px);
  border: 1px solid red;

  .user {
    height: 40%;
    border: 1px solid red;
    position: relative;
    .photo {
      position: absolute;
      top:0;
      left:0;
      height: 60%;
      width:100%;
      border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      .pic {
        width: 70%;
        height: 90%;
      }
    }
    .bless {
      position: absolute;
      bottom: 0;
      left:0;
      width:100%;
      height:40%;
      border:1px solid red;
      font-size: 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  .money{
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid green;
    margin-top: 24px;
    padding:36px;
    font-size: 28px;
  }

  .function {
    border:1px solid blue;
    margin-top: 24px;
    height:16%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .receive{
      height:100%;
      border:1px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a{
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .collects{
      height:100%;
      border:1px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a{
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .record{
    height:10%;
    width:100%;
    border:none;
    margin-top: 24px;
    font-size: 24px;
    &:active{
      background: orange;
      opacity: 0.3;
    }
  }
}
</style>