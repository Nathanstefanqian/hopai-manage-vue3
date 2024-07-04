<template>
  <el-descriptions :column="2">
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 接单数量 " icon="svg-icon:member_level" />
      </template>
      {{ user.orderCount || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 接单金额 " icon="svg-icon:member_level" />
      </template>
      {{ user.totalOrderAmount / 100 || '0' }} 元
    </el-descriptions-item>
    <el-descriptions-item class="rate">
      <template #label>
        <descriptions-item-label label=" 服务打分 " icon="svg-icon:member_level" />
      </template>
      <el-rate v-model="rate" size="small" disabled />
    </el-descriptions-item>
  </el-descriptions>
</template>
<script setup lang="ts">
import { DescriptionsItemLabel } from '@/components/Descriptions'
import * as UserApi from '@/api/member/user'
const props = defineProps<{ user: UserApi.UserVO }>() // 用户信息
const rate = ref(props.user.avgRate)

/** 监听用户编号变化 */
// watch(() => props.user.id, { immediate: true })
</script>
<style scoped lang="scss">
.rate {
  display: flex;
  align-items: center;
}
</style>
