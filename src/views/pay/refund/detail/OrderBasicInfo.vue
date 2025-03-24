<template>
  <el-card shadow="never">
    <template #header>
      <slot name="header"></slot>
    </template>
    <div class="">
      <el-descriptions :column="2">
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="订单号" icon="svg-icon:member_level" />
          </template>
          {{ order.id }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="订单状态" icon="svg-icon:member_level" />
          </template>
          <el-tag>{{ getStatus(order.orderStatus) }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="拍摄主题" icon="svg-icon:member_level" />
          </template>
          随心拍
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="产品名称" icon="svg-icon:member_level" />
          </template>
          {{ order.spuDescribe }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="拍摄地点" icon="svg-icon:member_level" />
          </template>
          {{ order.location }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="用户备注" icon="svg-icon:member_level" />
          </template>
          {{ order.remark }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { OrderVO } from '@/api/pay/order'
import { getStatus } from '@/utils/status'

const props = defineProps<{ order: OrderVO }>()
</script>

<style scoped></style>
