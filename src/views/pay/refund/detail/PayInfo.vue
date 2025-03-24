<template>
  <el-card shadow="never">
    <template #header>
      <slot name="header"></slot>
    </template>
    <div class="">
      <el-descriptions :column="2">
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="Ping分账ID" icon="svg-icon:member_level" />
          </template>
          {{ order.pingOrderId }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="退款金额" icon="svg-icon:member_level" />
          </template>
          {{ order.refundAmt == null ? '暂无' : order.refundAmt / 100 + '元' }}
        </el-descriptions-item>

        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="约拍金额" icon="svg-icon:member_level" />
          </template>
          {{ order.orderAmt == null ? '暂无' : order.orderAmt / 100 + '元' }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="实付金额" icon="svg-icon:member_level" />
          </template>
          {{ order.actualAmt == null ? '暂无' : order.actualAmt / 100 + '元' }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { OrderVO } from '@/api/pay/order'
defineProps<{ order: OrderVO }>()
</script>

<style scoped></style>
