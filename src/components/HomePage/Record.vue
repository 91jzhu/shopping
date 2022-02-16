<template>
  <div class="wrapper">
    <header>
      <router-link to="/info">
        <Icon name="back"/>
      </router-link>
      <span>
      购买记录
    </span>
    </header>
    <div class="chart" ref="chartRef"/>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from "vue";
import * as echarts from 'echarts';
import {fetchBuyEd} from "../../store/data";
import {Car} from "../../type";
import Icon from "../Tool/Icon.vue";

export default {
  name: "Record.vue",
  components: {Icon},
  setup() {
    const chartRef = ref(null)
    const source = ref([])
    onMounted(() => {
      fetchBuyEd('2022年02月16日').forEach((item: Partial<Car>) => {
        source.value.push([item.name, item.price])
      })
      if (chartRef.value) {
        const myChart = echarts.init(chartRef.value);
        myChart.setOption({
          dataset: [
            {
              dimensions: ['name', 'score'],
              source: source.value,
            },
            {
              transform: {
                type: 'sort',
                config: {dimension: 'score', order: 'desc'}
              }
            }
          ],
          grid:{
            left:'2%',
            right:'1%',
            bottom:'10%',
            containLabel:true
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 30,
              margin:16,
              fontSize:20
            },
            axisTick:{
              show:false,
              alignWithLabel:true
            }
          },
          tooltip: {},
          legend: {},
          yAxis: {
            axisLabel:{
              fontSize:18,
              showMinLabel:false,
            }
          },
          series: {
            type: 'bar',
            encode: {x: 'name', y: 'score'},
            datasetIndex: 1,
            itemStyle: {
              normal: {
                label: {
                  show: true,		//开启显示
                  position: 'top',	//在上方显示
                  textStyle: {	    //数值样式
                    color: 'black',
                    fontSize: 16
                  }
                }
              }
            }
          }
        })
      }
    })
    return {chartRef}
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
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
      padding-left: 19vw;
      font-size: 24px;
    }
  }

  .chart {
    height: 80vh;
  }
}
</style>