<template>
  <el-card shadow="never">
    <template #header>
      <slot name="header"></slot>
    </template>
    <div class="">
      <el-descriptions :column="2">
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="会员ID" icon="svg-icon:member_level" />
          </template>
          {{ order.memberId }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="会员姓名" icon="svg-icon:member_level" />
          </template>
          {{ order.memberName }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <descriptions-item-label label="会员电话" icon="svg-icon:member_level" />
          </template>
          {{ order.memberPhone }}
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
