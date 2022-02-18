<template>
  <div class="wrapper">
    <header>
<!--      <DropDownItem :date="'2022年02月17日'"/>-->
<!--      <DropDownItem :date="'2022年02月16日'"/>-->
<!--      <DropDownItem :date="'2022年02月15日'"/>-->
<!--      <DropDownItem :date="'2022年02月14日'"/>-->
<!--      <DropDownItem :date="'2022年02月13日'"/>-->
<!--      <DropDownItem :date="'2022年02月12日'"/>-->
      <router-link to="/info">
        <Icon name="back"/>
      </router-link>
      <span>
      购买记录
      </span>
    </header>

    <DropDown @update:date="changeDate"
              @update:chart="changeChart">
      <DropDownItem v-for="date in dates" :date="date" :key="date"/>
    </DropDown>

    <div class="chartWrapper">
      <div class="chart" ref="chartRef"/>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, reactive, ref} from "vue";
import * as echarts from 'echarts';
import {changeBuy, Data, fetchBuy, getDates} from "../../store/data";
import {Car} from "../../type";
import Icon from "../Tool/Icon.vue";
import DropDown from "../Tool/DropDown.vue";
import DropDownItem from "../Tool/DropDown-Item.vue";
import {EChartsType} from "echarts";

export default {
  components: {DropDownItem, DropDown, Icon},
  setup() {
    const chartRef = ref(null)
    const source = reactive([])
    const text = ref('')
    const myChart = ref<EChartsType>(null)
    const dates = reactive<string[]>(getDates())
    console.log(dates);
    onMounted(() => {
      text.value = fetchBuy().createdAt
      initSource()
      if (chartRef.value) {
        myChart.value = echarts.init(chartRef.value);
        setOption()
      }
    })
    const initSource = () => {
      fetchBuy().buyEd.forEach((item: Partial<Car>) => {
        source.push([item.name, item.price])
      })
    }
    const changeText = (newText: string) => {
      text.value = newText
    }
    const changeSource = (arr) => {
      source.length = 0
      arr.forEach((item: Data) => {
        source.push([item.name, item.price])
      })
    }
    const setOption = () => {
      myChart.value.setOption({
        dataset: [
          {
            dimensions: ['name', 'price'],
            source,
          },
          {
            transform: {
              type: 'sort',
              config: {dimension: 'price', order: 'desc'}
            }
          }
        ],
        title: {
          show: true,
          text: `${text.value}消费情况`,
          top: 'top',
          left: 'center',
          textStyle: {
            color: 'grey',
            fontSize: 22,
            fontStyle: 'oblique',
            width: 100
          }
        },
        grid: {
          left: '2%',
          right: '1%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: 30,
            margin: 16,
            fontSize: 20
          },
          axisTick: {
            show: false,
            alignWithLabel: true
          }
        },
        tooltip: {},
        legend: {},
        yAxis: {
          axisLabel: {
            fontSize: 18,
            showMinLabel: false,
          }
        },
        label: {
          show: true,		//开启显示
          position: 'top',	//在上方显示
          fontSize: 18,
          textStyle: {	    //数值样式
            color: 'black',
            fontSize: 18
          }
        },
        series: {
          type: 'bar',
          encode: {x: 'name', y: 'price'},
          datasetIndex: 1,
        }
      })
    }
    const changeDate = (val: string) => {
      console.log('changeDate');
    }
    const changeChart = (val: string) => {
      changeSource(changeBuy(val))
      changeText(val)
      setOption()
    }
    return {chartRef, changeDate, changeChart, dates}
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
      padding-left: 19vw;
      font-size: 24px;
    }
  }

  .chartWrapper {
    //border:1px solid blue;
    .chart {
      border: 1px solid grey;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      padding-top: 12px;
      height: 72vh;
    }
  }

}
</style>