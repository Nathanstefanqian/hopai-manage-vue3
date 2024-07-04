<template>
  <el-descriptions :column="2">
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 等级 " icon="svg-icon:member_level" />
      </template>
      {{ user.levelName || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="生日" icon="svg-icon:member_level" />
      </template>
      {{ user.birthday ? formatDate(user.birthday) : '空' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="结婚纪念日" icon="svg-icon:member_level" />
      </template>
      {{ user.birthday ? formatDate(user.birthday) : '空' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="宝宝的生日" icon="svg-icon:member_level" />
      </template>
      {{ user.birthday ? formatDate(user.birthday) : '空' }}
    </el-descriptions-item>
  </el-descriptions>
</template>
<script setup lang="ts">
import { DescriptionsItemLabel } from '@/components/Descriptions'
import * as UserApi from '@/api/member/user'
import { formatDate } from '@/utils/formatTime'
const props = defineProps<{ user: UserApi.UserVO }>() // 用户信息
</script>
<style scoped lang="scss">
.cell-item {
  display: inline;
}

.cell-item::after {
  content: ':';
}
</style>
