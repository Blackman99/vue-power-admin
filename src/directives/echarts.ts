import type { ObjectDirective } from 'vue'
import echarts, { ChartDataset, ECOption, initChart, setData } from '@/components/ECharts/src/useECharts'

interface ChartOption {
  option: ECOption
  data?: ChartDataset
}

export const vChart: ObjectDirective<HTMLDivElement, ChartOption> = {
  mounted(el, { value: { option, data } }) {
    const instance = initChart(el, option)
    if (data) {
      watch(data, v => {
        setData(instance, v)
      }, {
        deep: true,
        immediate: true
      })
    }
  },

  unmounted(el) {
    echarts.dispose(el)
  }
}
