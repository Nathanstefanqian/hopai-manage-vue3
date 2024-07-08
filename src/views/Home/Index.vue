<template>
  <div>123</div>
</template>
<script lang="ts" setup>
import { set } from 'lodash-es'
import { EChartsOption } from 'echarts'

import { pieOptions, barOptions } from './echarts-data'
import { PieChart } from 'echarts/charts'
defineOptions({ name: 'Home' })

const { t } = useI18n()
const loading = ref(true)
const pieOptionsData = reactive<EChartsOption>(pieOptions) as EChartsOption

const picBtn = ref(1)
const picNumBtn = ref(1)
// 获取统计数
let totalSate = reactive<WorkplaceTotal>({
  project: 0,
  access: 0,
  todo: 0
})

const getCount = async () => {
  const data = {
    project: 40,
    access: 2340,
    todo: 10
  }
  totalSate = Object.assign(totalSate, data)
}

// 获取项目数
const getProject = async () => {
  const data = [
    {
      name: 'Github',
      icon: 'akar-icons:github-fill',
      message: 'workplace.introduction',
      personal: 'Archer',
      time: new Date()
    },
    {
      name: 'Vue',
      icon: 'logos:vue',
      message: 'workplace.introduction',
      personal: 'Archer',
      time: new Date()
    },
    {
      name: 'Angular',
      icon: 'logos:angular-icon',
      message: 'workplace.introduction',
      personal: 'Archer',
      time: new Date()
    },
    {
      name: 'React',
      icon: 'logos:react',
      message: 'workplace.introduction',
      personal: 'Archer',
      time: new Date()
    },
    {
      name: 'Webpack',
      icon: 'logos:webpack',
      message: 'workplace.introduction',
      personal: 'Archer',
      time: new Date()
    },
    {
      name: 'Vite',
      icon: 'vscode-icons:file-type-vite',
      message: 'workplace.introduction',
      personal: 'Archer',
      time: new Date()
    }
  ]
  projects = Object.assign(projects, data)
}

const getShortcut = async () => {
  const data = [
    {
      name: 'Github',
      icon: 'akar-icons:github-fill',
      url: 'github.io'
    },
    {
      name: 'Vue',
      icon: 'logos:vue',
      url: 'vuejs.org'
    },
    {
      name: 'Vite',
      icon: 'vscode-icons:file-type-vite',
      url: 'https://vitejs.dev/'
    },
    {
      name: 'Angular',
      icon: 'logos:angular-icon',
      url: 'github.io'
    },
    {
      name: 'React',
      icon: 'logos:react',
      url: 'github.io'
    },
    {
      name: 'Webpack',
      icon: 'logos:webpack',
      url: 'github.io'
    }
  ]
  shortcut = Object.assign(shortcut, data)
}

// 用户来源
const getUserAccessSource = async () => {
  const data = [
    { value: 335, name: '未解决' },
    { value: 310, name: '已解决' }
  ]
  set(
    pieOptionsData,
    'legend.data',
    data.map((v) => t(v.name))
  )
  pieOptionsData!.series![0].data = data.map((v) => {
    return {
      name: t(v.name),
      value: v.value
    }
  })
}
const barOptionsData = reactive<EChartsOption>(barOptions) as EChartsOption

// 周活跃量
const getWeeklyUserActivity = async () => {
  const data = [
    { value: 13253, name: '南京' },
    { value: 34235, name: '北京' },
    { value: 26321, name: '上海' },
    { value: 12340, name: '深圳' },
    { value: 24643, name: '广州' },
    { value: 1322, name: '杭州' },
    { value: 1324, name: '贵阳' },
    { value: 1234, name: '桂林' }
  ]
  set(
    barOptionsData,
    'xAxis.data',
    data.map((v) => t(v.name))
  )
  set(barOptionsData, 'series', [
    {
      name: '',
      data: data.map((v) => v.value),
      type: 'bar'
    }
  ])
}

const lineOptions = ref({
  title: {
    text: '每年营业额',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: ['2022', '2023', '2024', '2025'] // 时间数据
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [100, 200, 300, 150], // 数值数据
      type: 'line'
    }
  ]
})

const getAllApi = async () => {
  await Promise.all([
    getCount(),
    getProject(),
    getShortcut(),
    getUserAccessSource(),
    getWeeklyUserActivity()
  ])
  loading.value = false
}

getAllApi()
</script>
<style lang="scss">
.dashboard-layout {
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;

  &-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .dashboard-box {
    width: 50%;
    height: 520px;
    padding: 20px;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;

    &-border {
      border: 0;
    }

    &-first-top {
      width: 100%;
      margin-bottom: 20px;

      &-title {
        height: 40px;
        font-size: 18px;
      }

      &-block-layout {
        display: flex;
        flex-direction: row;
      }

      &-block {
        display: flex;
        width: 25%;
        flex-direction: column;
        margin-right: 20px;
        align-items: center;
      }
    }

    &-first-picture-title {
      margin-bottom: 20px;
      font-size: 18px;
    }

    &-first-picture-btn button {
      padding: 5px 20px;
      margin: 0;
      cursor: pointer;
      background-color: #fff;
      border: 1px solid #e0e0e6;
      transition: all ease 0.5s;

      &:hover {
        color: #ba2636;
        border: 1px solid #ba2636;
        transition: all ease 0.5s;
      }
    }

    &-first-picture-btn-active {
      color: #ba2636;
      border: 1px solid #ba2636 !important;
    }

    &-second-total {
      display: flex;
      flex-direction: column;
    }

    &-second-count {
      display: flex;
      width: 100%;

      .dashboard-box-second-count-block {
        display: flex;
        width: 250px;
        flex-direction: column;
        align-items: center;
      }
    }

    &-second-divider {
      width: 100%;
      border: 1px dashed #e0e0e0;
    }

    &-third-picture-title {
      margin-bottom: 20px;
      font-size: 18px;
    }

    &-third-picture-btn button {
      padding: 5px 20px;
      margin: 0;
      cursor: pointer;
      background-color: #fff;
      border: 1px solid #e0e0e6;
      transition: all ease 0.5s;

      &:hover {
        color: #ba2636;
        border: 1px solid #ba2636;
        transition: all ease 0.5s;
      }
    }

    &-third-picture-btn-active {
      color: #ba2636;
      border: 1px solid #ba2636 !important;
    }
  }
}
</style>
