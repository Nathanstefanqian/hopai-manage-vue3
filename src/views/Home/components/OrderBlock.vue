<template>
  <div class="order">
    <div class="order-box" v-for="(item, index) in boxConfig" :key="index">
      <div class="order-box-info">
        <div class="desc">
          <span class="title">{{ item.name }}</span>
          <CountTo
            class="text-30px"
            :class="item.color"
            :start-val="0"
            :end-val="getNumber(item.key)"
            :duration="2600"
          />
        </div>
        <div class="icon">
          <el-image :src="item.url" class="w-20" />
        </div>
      </div>
      <div class="order-box-change mt-5">
        <div class="inc">
          <el-image :src="getDiff(item.key) >= 0 ? '/increase.svg' : '/decline.svg'" />
          <span class="ml-2" :class="getDiff(item.key) >= 0 ? 'c-#00B692' : 'c-#F93C65'">{{
            getDiff(item.key) >= 0 ? '+' + getDiff(item.key) : getDiff(item.key)
          }}</span>
          <span class="ml-4 c-#606060">较昨日{{getDiff(item.key) >= 0 ? '增加' : '减少'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getNum } from '@/api/dashboard'

const todayData = ref<any>({})
const yesterdayData = ref<any>({})

const boxConfig = [
  {
    name: '总订单数',
    key: 'totalOrders',
    color: 'c-#ba2636',
    url: '/order-red.svg'
  },
  {
    name: '进行中',
    key: 'inProgressOrders',
    color: 'c-#00b69b',
    url: '/order-green.svg'
  },
  {
    name: '待支付',
    key: 'toPayOrders',
    color: 'c-#5088ff',
    url: '/order-blue.svg'
  },
  {
    name: '异常订单',
    key: 'exceptionOrders',
    color: 'c-#848484',
    url: '/order-grey.svg'
  }
]

const getNumber = (key: string) => {
  return todayData.value?.todayOrderNum?.[key] || 0
}

const getDiff = (key: string) => {
  const today = todayData.value?.todayOrderNum?.[key] || 0
  const yesterday = yesterdayData.value?.yesterdayOrderNum?.[key] || 0
  return today - yesterday
}

onMounted(async () => {
  const res = await getNum()
  todayData.value = res
  yesterdayData.value = res
})
</script>

<style lang="scss" scoped>
.order {
  display: flex;
  justify-content: space-between;
  min-width: 1250px;

  &-box {
    width: 22.5%;
    height: 180px;
    padding: 15px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    transition: all ease 0.5s;

    &:hover {
      box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);
      transition: all ease 0.5s;
    }

    &-info {
      display: flex;
      justify-content: space-between;

      .desc {
        display: flex;
        flex-direction: column;

        .title {
          margin-bottom: 10px;
          font-size: 18px;
          color: #202224;
        }
      }
    }

    &-change {
      display: flex;
      align-items: center;
    }
  }
}
</style>
