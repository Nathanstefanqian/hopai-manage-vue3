<template>
  <el-descriptions :column="4">
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 简介 " icon="svg-icon:member_level" />
      </template>
      {{ user.appPhotographerInfoBaseVO?.introduction || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 小红书号 " icon="svg-icon:member_level" />
      </template>
      {{ user.appPhotographerInfoBaseVO?.littleRedBookId || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 抖音号 " icon="svg-icon:member_level" />
      </template>
      {{ user.appPhotographerInfoBaseVO?.douYinId || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 相机 " icon="svg-icon:member_level" />
      </template>
      {{ user.appPhotographerInfoBaseVO?.camera || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 灯光 " icon="svg-icon:member_level" />
      </template>
      {{ user.appPhotographerInfoBaseVO?.lightingEquipment || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 变焦镜头 " icon="svg-icon:member_level" />
      </template>
      {{ user.appPhotographerInfoBaseVO?.zoomLens || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 定焦镜头 " icon="svg-icon:member_level" />
      </template>
      {{ user.appPhotographerInfoBaseVO?.fixedFocalLengthLens || '无' }}
    </el-descriptions-item>
  </el-descriptions>
</template>
<script setup lang="ts">
import * as UserApi from '@/api/member/user'
const props = defineProps<{ user: UserApi.UserVO }>()
</script>
<style lang="scss" scoped>
.technicallInfo {
}
</style>
