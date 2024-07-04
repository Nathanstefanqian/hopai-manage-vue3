<template>
  <el-descriptions :column="1">
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
        <descriptions-item-label label=" 设备 " icon="svg-icon:member_level" />
      </template>
      机型：<span class="c-black">{{ user.appPhotographerInfoBaseVO?.camera || '无' }}</span>
      灯光设备:
      <span class="c-black">{{ user.appPhotographerInfoBaseVO?.lightingEquipment || '无' }}</span>
      变焦镜头：<span class="c-black">{{ user.appPhotographerInfoBaseVO?.zoomLens || '无' }}</span>
      定焦镜头:
      <span class="c-black">{{
        user.appPhotographerInfoBaseVO?.fixedFocalLengthLens || '无'
      }}</span>
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
