<template>
  <div class="overviewWrapper">
    <DropDown v-model:title="months[0]">
      <DropDownItem v-for="month in months" :date="month" :key="month"/>
    </DropDown>
    <div class="chart-Wrapper">
      <div class="overviewChart" ref="chartRef"/>
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import {onMounted, ref} from "vue";
import dayjs from "dayjs";
import DropDown from "../components/Tool/DropDown.vue";
import DropDownItem from "../components/Tool/DropDown-Item.vue";
import {getMonths} from "../store/data";

const produceDate=()=>{
  const res=[]
  const oneDay=86400000
  for(let i=0;i<6;i++){
    res.push(dayjs(Date.now()-i*oneDay).format('YYYY-MM-DD'))
  }
  res.sort((a,b)=>a>b?1:-1)
  return res
}
export default {
  components: {DropDownItem, DropDown},
  setup() {
    const chartRef = ref(null)
    const months=ref([...new Set(getMonths())])
    console.log(months.value);
    onMounted(() => {
      if (chartRef.value) {
        const myChart = echarts.init(chartRef.value)
        myChart.setOption({
          title: {
            show: true,
            text: '2022年2月消费情况',
            top: 'top',
            left: 'center',
            textStyle: {
              color: 'grey',
              fontSize: 22,
              fontStyle: 'oblique',
              width: 100
            }
          },
          grid:{
            containLabel:true,
            left:'4%',
            right:'-10%',
            bottom:'4%',
          },
          xAxis: {
            type: 'category',
            data:produceDate(),
            axisLabel: {
              color: '#7c7e86',
              fontSize: 16,
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          yAxis: {
            splitLine: {show: true},
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLabel: {
              showMinLabel: false,
              color: '#7c7e86',
              fontSize: 18,
            },
          },
          series: [
            {
              name: 'line',
              type: 'line',
              smooth: true,
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 15,
              data: [8, 6, 9, 7, 11]
            },
            {
              name: 'bar',
              type: 'bar',
              barWidth: 16,
              itemStyle: {
                borderRadius: 12,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {offset: 0, color: '#83bff6'},
                  {offset: 0.5, color: '#188df0'},
                  {offset: 1, color: '#188df0'}
                ])
              },
              label: {
                show: true,		//开启显示
                position: 'top',	//在上方显示
                distance:12,
                formatter:'${c}',
                textStyle: {	    //数值样式
                  color: 'black',
                  fontSize: 20
                }
              },
              data: [8, 6, 9, 7, 11]
            },
          ]
        })
      }
    })
    return {chartRef,months}
  }
}
</script>

<style scoped lang="scss">
.overviewWrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .chart-Wrapper {
    .overviewChart {
      border: 1px solid grey;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      padding-top: 12px;
      height: 64vh;
    }
  }
}
</style>