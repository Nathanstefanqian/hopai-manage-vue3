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
    <el-row :gutter="10" class="mt-5" v-if="showOriginalPhotos">
      <el-col class="detail-info-item">
        <OriginalPhotoInfo :order="order">
          <template #header>
            <div class="card-header">
              <CardTitle title="原图信息" />
            </div>
          </template>
        </OriginalPhotoInfo>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="mt-5" v-if="showTruingPhotos">
      <el-col class="detail-info-item">
        <TruingPhotoInfo :order="order">
          <template #header>
            <div class="card-header">
              <CardTitle title="精修图信息" />
            </div>
          </template>
        </TruingPhotoInfo>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import * as OrderApi from '@/api/pay/order'
import { OrderVO } from '@/api/pay/order'
import { CardTitle } from '@/components/Card/index'
import OrderBasicInfo from './OrderBasicInfo.vue'
import { getOriginPhotos, getTruingPhotos } from '@/api/pay/album'
import PhotographerBasicInfo from './PhotographerBasicInfo.vue'
import MemberInfo from './MemberInfo.vue'
import PayInfo from './PayInfo.vue'
import TimeInfo from './TimeInfo.vue'
import OriginalPhotoInfo from './OriginalPhotoInfo.vue'
import TruingPhotoInfo from './TruingPhotoInfo.vue'

defineOptions({ name: 'PayOrderDetail' })
const loading = ref(false)
const route = useRoute()
const id = route.params.id
const order = ref<OrderVO>()
const router = useRouter()

const showOriginalPhotosRef = ref(false)
const showTruingPhotosRef = ref(false)

const showOriginalPhotos = computed(() => {
  if (!order.value) return false
  if ([10, 20, 30, 11].includes(order.value.orderStatus)) {
    return showOriginalPhotosRef.value
  }
  return order.value.orderStatus >= 5
})

const showTruingPhotos = computed(() => {
  if (!order.value) return false
  if ([10, 20, 30, 11].includes(order.value.orderStatus)) {
    return showTruingPhotosRef.value
  }
  return order.value.orderStatus >= 6
})

const getPhotosFromAPI = async (type: 'original' | 'truing') => {
  if (!order.value) return
  const status = order.value.orderStatus
  if (![10, 20, 30, 11].includes(status)) return

  try {
    if (type === 'original') {
      const photos = await getOriginPhotos(order.value.id)
      return photos && photos.length > 0
    } else {
      const photos = await getTruingPhotos(order.value.id)
      return photos && photos.length > 0
    }
  } catch (error: any) {
    console.error(`Failed to get ${type} photos:`, error)
    return false
  }
}

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

  // 对于特殊状态，预加载图片数据来决定是否显示
  if (order.value && [10, 20, 30, 11].includes(order.value.orderStatus)) {
    const [hasOriginal, hasTruing] = await Promise.all([
      getPhotosFromAPI('original'),
      getPhotosFromAPI('truing')
    ])
    showOriginalPhotosRef.value = hasOriginal
    showTruingPhotosRef.value = hasTruing
  }
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
