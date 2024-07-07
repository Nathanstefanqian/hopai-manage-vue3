<template>
  <div v-loading="loading" v-if="order">
    <el-row :gutter="10">
      <el-col class="detail-info-item">
        <OrderBasicInfo :order="order">
          <template #header>
            <div class="card-header">
              <CardTitle title="订单信息" />
            </div>
          </template>
        </OrderBasicInfo>
      </el-col>
    </el-row>
    <el-row :gutter="5" class="mt-5">
      <el-col :span="12" class="detail-info-item">
        <PhotographerBasicInfo :order="order">
          <template #header>
            <div class="card-header-layout">
              <div class="card-header">
                <CardTitle title="摄影师信息" />
              </div>
              <el-button link type="primary" @click="openDetail(order?.photographerId, 0)"
                >更多信息</el-button
              >
            </div>
          </template>
        </PhotographerBasicInfo>
      </el-col>
      <el-col :span="12" class="detail-info-item">
        <MemberInfo :order="order">
          <template #header>
            <div class="card-header-layout">
              <div class="card-header">
                <CardTitle title="顾客信息" />
              </div>
              <el-button link type="primary" @click="openDetail(order?.memberId, 1)"
                >更多信息</el-button
              >
            </div>
          </template>
        </MemberInfo>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mt-5">
      <el-col class="detail-info-item">
        <PayInfo :order="order">
          <template #header>
            <div class="card-header">
              <CardTitle title="财务信息" />
            </div>
          </template>
        </PayInfo>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mt-5">
      <el-col class="detail-info-item">
        <TimeInfo :order="order">
          <template #header>
            <div class="card-header">
              <CardTitle title="时间信息" />
            </div>
          </template>
        </TimeInfo>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import * as OrderApi from '@/api/pay/order'
import { OrderVO } from '@/api/pay/order'
import { CardTitle } from '@/components/Card/index'
import OrderBasicInfo from './OrderBasicInfo.vue'
import PhotographerBasicInfo from './PhotographerBasicInfo.vue'
import MemberInfo from './MemberInfo.vue'
import PayInfo from './PayInfo.vue'
import TimeInfo from './TimeInfo.vue'

defineOptions({ name: 'PayOrderDetail' })
const loading = ref(false)
const route = useRoute()
const id = route.params.id
const order = ref<OrderVO>()
const router = useRouter()

const openDetail = (id: any, type: number) => {
  try {
    if (!type) {
      router.push({ name: 'PhotographerUserDetail', params: { id } })
    } else {
      router.push({ name: 'MemberUserDetail', params: { id } })
    }
  } catch (err) {
    console.log(err)
  }
}

const getData = async (id: string | string[]) => {
  loading.value = true
  try {
    order.value = await OrderApi.getOrder(id)
  } finally {
    loading.value = false
  }
}
onMounted(async () => {
  await getData(id)
})
</script>
<style scoped lang="scss">
.detail-info-item:first-child {
  padding-left: 0 !important;
}

/* first-child 不生效有没有大佬给看下q.q */
.detail-info-item:nth-child(2) {
  padding-right: 0 !important;
}

.card-header-layout {
  display: flex;
  justify-content: space-between;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
