<template>
  <el-descriptions :column="4">
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="简介" icon="svg-icon:member_level" />
      </template>
      <span class="content">{{ user.appPhotographerInfoBaseVO?.introduction || '无' }}</span>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="小红书号" icon="svg-icon:member_level" />
      </template>
      <a class="content" :href="getRedBookPage(user.appPhotographerInfoBaseVO?.littleRedBookId)">
        {{ user.appPhotographerInfoBaseVO?.littleRedBookId || '无' }}
      </a>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="抖音号" icon="svg-icon:member_level" />
      </template>
      <a class="content" :href="getDouYinPage(user.appPhotographerInfoBaseVO?.douYinId)">
        {{ user.appPhotographerInfoBaseVO?.douYinId || '无' }}
      </a>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="相机" icon="svg-icon:member_level" />
      </template>
      <span class="content">{{ user.appPhotographerInfoBaseVO?.camera || '无' }}</span>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="灯光" icon="svg-icon:member_level" />
      </template>
      <span class="content">{{ user.appPhotographerInfoBaseVO?.lightingEquipment || '无' }}</span>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="变焦镜头" icon="svg-icon:member_level" />
      </template>
      <span class="content">{{ user.appPhotographerInfoBaseVO?.zoomLens || '无' }}</span>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="定焦镜头" icon="svg-icon:member_level" />
      </template>
      <span class="content">{{
        user.appPhotographerInfoBaseVO?.fixedFocalLengthLens || '无'
      }}</span>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import * as UserApi from '@/api/member/user'
defineProps<{ user: UserApi.UserVO }>()

const getRedBookPage = (id: any) => {
  return `https://www.xiaohongshu.com/search_result?keyword=${id}&source=web_explore_feed&search_type=user`
}

const getDouYinPage = (id: any) => {
  return `https://www.douyin.com/search/${id}?type=user`
}
</script>

<style lang="scss" scoped>
.el-descriptions-item .content {
  word-break: break-all;
  word-wrap: break-word;
  white-space: normal;
}
</style>
