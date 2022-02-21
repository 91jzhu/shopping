<template>
  <div class="singleWrapper" v-if="visible">
    <DropDown v-model:title="title"
              @update:date="changeDate"
              @update:chart="changeChart">
      <DropDownItem v-for="date in dates" :date="date" :key="date"/>
    </DropDown>
    <div class="chartWrapper">
      <div class="chart" ref="chartRef"/>
    </div>
  </div>
  <div class="replace" v-else>
    <Icon name="chart"/>
    <span>买点东西再来吧</span>
  </div>
</template>

<script lang="ts">
import {onMounted, reactive, ref} from "vue";
import {EChartsType} from "echarts";
import {changeBuy, Data, fetchBuy, getDates} from "../store/data";
import * as echarts from "echarts";
import {Car} from "../type";
import DropDown from "../components/Tool/DropDown.vue";
import DropDownItem from "../components/Tool/DropDown-Item.vue";
import Icon from "../components/Tool/Icon.vue";
export default {
  components: {Icon, DropDownItem, DropDown},
  setup(){
    const chartRef = ref(null)
    const title=ref(fetchBuy()?.createdAt.replace('年','-').replace('月','-').replace('日',''))
    const source = reactive([])
    const text = ref('')
    const myChart = ref<EChartsType>(null)
    const dates = reactive<string[]>(getDates())
    const visible=ref(true)
    onMounted(() => {
      if(!fetchBuy()){
        visible.value=false
        return
      }
      text.value = fetchBuy().createdAt
      initSource()
      if (chartRef.value) {
        myChart.value = echarts.init(chartRef.value);
        setOption()
      }
    })
    const initSource = () => {
      fetchBuy().buyEd.forEach((item: Partial<Car>) => {
        source.push([item.name,item.price])
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
          bottom:'4%',
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
          name:'($)',
          nameLocation:'end',
          nameTextStyle:{
            fontSize:20,
            align:'right',
            verticalAlign:'bottom',
            padding:[0,4,8,0],
          },
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
    return {chartRef, changeDate, changeChart, dates,title,visible}
  }
}
</script>

<style scoped lang="scss">
.singleWrapper{
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .chartWrapper {
    .chart {
      border: 1px solid grey;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      padding-top: 12px;
      height: 64vh;
    }
  }
}
.replace{
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color:grey;
  .icon{
    width:112px;
    height:112px;
    margin-bottom: 12px;
  }
}
</style>