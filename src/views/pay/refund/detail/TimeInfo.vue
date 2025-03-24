<template>
  <el-card shadow="never">
    <template #header>
      <slot name="header"></slot>
    </template>
    <div class="">
      <el-descriptions :column="2">
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="订单创建时间" icon="svg-icon:member_level" />
          </template>
          {{ formatDate(order.orderTime) }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="订单过期时间" icon="svg-icon:member_level" />
          </template>
          {{ formatDate(order.expireTime) }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="预约开始时间" icon="svg-icon:member_level" />
          </template>
          {{ formatDate(order.appointmentStartTime) }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="预约结束时间" icon="svg-icon:member_level" />
          </template>
          {{ formatDate(order.appointmentEndTime) }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="完成时间" icon="svg-icon:member_level" />
          </template>
          {{ order.successTime == null ? '订单尚未完成' : formatDate(order.successTime) }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { OrderVO } from '@/api/pay/order'
import { formatDate } from '@/utils/formatTime'
defineProps<{ order: OrderVO }>()
</script>

<style scoped></style>
