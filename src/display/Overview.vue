<template>
  <div class="overviewWrapper" v-if="visible">
    <DropDown v-model:title="months[0]"
              @update:chart="changeChart">
      <DropDownItem v-for="month in months" :date="month" :key="month"/>
    </DropDown>
    <div class="chart-Wrapper">
      <div class="overviewChart" ref="chartRef"/>
    </div>
  </div>
  <div class="replace" v-else>
    <Icon name="chart"/>
    <span>买点东西再来吧</span>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import {onMounted, onUpdated, reactive, ref, watchEffect} from "vue";
import dayjs from "dayjs";
import DropDown from "../components/Tool/DropDown.vue";
import DropDownItem from "../components/Tool/DropDown-Item.vue";
import {Data, getDates, getMonth, getMonths, getPrice, initPrice} from "../store/data";
import Icon from "../components/Tool/Icon.vue";

export default {
  components: {Icon, DropDownItem, DropDown},
  setup() {
    const chartRef = ref(null)
    const months = reactive([...new Set(getMonths())])
    const visible = ref(true)
    const text = ref('')
    const data = reactive(initPrice(months[0]))
    const xAxis = reactive([])
    const changeChart = (val) => {
      const tmp = getMonth(val)
      tmp.sort((a: Data, b: Data) => a.createdAt > b.createdAt ? 1 : -1)
      xAxis.length = 0
      data.length = 0
      tmp.forEach((item) => {
        xAxis.push(item.createdAt.slice(8, 10).replace('月', '-'))
        data.push(getPrice(item.createdAt))
      })
      text.value = val
    }
    changeChart(months[0])
    onMounted(() => {
      watchEffect(() => {
        if (months.length === 0 || data?.every(item => !item)) {
          visible.value = false
        }
        if (chartRef.value) {
          const myChart = echarts.init(chartRef.value)
          myChart.setOption({
            title: {
              show: true,
              text: text.value+'消费情况',
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
              containLabel: true,
              top:'20%',
              left: '4%',
              right: '4%',
              bottom: '4%',
            },
            xAxis: {
              type: 'category',
              data: xAxis,
              axisLabel: {
                color: '#7c7e86',
                fontSize: 16,
                showMinLabel: true,
                showMaxLabel: true,
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
                name: 'bar',
                type: 'bar',
                barWidth: 12,
                barCategoryGap:'40%',
                data,
                itemStyle: {
                  normal: {
                    barBorderRadius: 16,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {offset: 0, color: '#83bff6'},
                      {offset: 0.5, color: '#188df0'},
                      {offset: 1, color: '#188df0'}
                    ]),
                    label: {
                      show: true,
                      position: 'top',
                      color: 'orange',
                      fontSize: 18,
                      fontWeight: 'bold',
                      backgroundColor: '#eee',
                      borderColor: '#777',
                      borderWidth: 1,
                      borderRadius: 12,
                      padding: [10,3,4,3],
                      formatter: [
                        '{a|支出}',
                        '{c|{c}}'
                      ].join('\n'),
                      rich: {
                        a: {
                          align: 'center',
                          color: 'black',
                          fontSize: 18,
                        },
                        hr: {
                          borderColor: 'black',
                          width: '100%',
                          borderWidth: 0.5,
                          height: 1
                        },
                        c: {
                          align: 'center',
                          color: '#ff8811',
                          textBorderColor: '#000',
                          textBorderWidth: 1,
                          fontSize: 22,
                          lineHeight:32
                        }
                      }
                    },
                  },
                },
              },
            ]
          })
        }
      })
    })
    return {chartRef, months, visible, changeChart}
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
    width:100vw;
    overflow: auto;
    .overviewChart {
      border: 1px solid grey;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      padding-top: 12px;
      height: 64vh;
    }
  }
}

.replace {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: grey;

  .icon {
    width: 112px;
    height: 112px;
    margin-bottom: 12px;
  }
}
</style>