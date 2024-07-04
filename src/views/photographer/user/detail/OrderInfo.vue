<template>
  <el-descriptions :column="1">
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 摄影师等级 " icon="svg-icon:member_level" />
      </template>
      <el-tag>{{ user.levelName || '无' }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 服务区域 " icon="svg-icon:member_level" />
      </template>
      <el-tag v-for="(item, index) in user.areaNames" class="mr-2" :key="index">{{
        item || '无'
      }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 服务范围 " icon="svg-icon:member_level" />
      </template>
      <span class="mr-2" v-for="(item, index) in user.bizList" :key="index">{{ item }}</span>
    </el-descriptions-item>
  </el-descriptions>
</template>
<script setup lang="ts">
import * as UserApi from '@/api/member/user'
const props = defineProps<{ user: UserApi.UserVO }>()
</script>
