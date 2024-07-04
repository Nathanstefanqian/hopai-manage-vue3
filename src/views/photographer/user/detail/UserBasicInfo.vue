<template>
  <el-card shadow="never">
    <template #header>
      <slot name="header"></slot>
    </template>
    <el-row>
      <el-col :span="4">
        <el-image
          :src="user.avatar ? user.avatar : '/public/avatar.jpg'"
          fit="contain"
          class="h-23"
          style="border-radius: 10px"
        />
      </el-col>
      <el-col :span="20">
        <el-descriptions :column="2">
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="昵称" icon="ep:user" />
            </template>
            {{ user.nickname }}
          </el-descriptions-item>
          <el-descriptions-item label="手机号">
            <template #label>
              <descriptions-item-label label="手机号" icon="ep:phone" />
            </template>
            {{ user.mobile }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="性别" icon="fa:mars-double" />
            </template>
            {{ user.sex ? '男' : '女' }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="所在地" icon="ep:location" />
            </template>
            {{ user.areaName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="身份证" icon="ep:postcard" />
            </template>
            {{ user.idCard }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="生日" icon="ep:calendar" />
            </template>
            {{ formatDate(user.birthday, 'YYYY-MM-DD') }}
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
  </el-card>
</template>
<script setup lang="ts">
import * as UserApi from '@/api/member/user'
import { DescriptionsItemLabel } from '@/components/Descriptions/index'
import { formatDate } from '@/utils/formatTime'

const { user } = defineProps<{ user: UserApi.UserVO }>()
</script>
<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
