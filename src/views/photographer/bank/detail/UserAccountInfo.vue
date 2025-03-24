<template>
  <el-descriptions :column="2">
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 小红书号 " icon="svg-icon:member_level" />
      </template>
      <a class="content" :href="getRedBookPage(user.appPhotographerInfoBaseVO?.littleRedBookId)">
        {{ user.appPhotographerInfoBaseVO?.littleRedBookId || '无' }}
      </a>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label=" 抖音号 " icon="ep:suitcase" />
      </template>
      <a class="content" :href="getDouYinPage(user.appPhotographerInfoBaseVO?.douYinId)">
        {{ user.appPhotographerInfoBaseVO?.douYinId || '无' }}
      </a>
    </el-descriptions-item>
  </el-descriptions>
</template>
<script setup lang="ts">
import { DescriptionsItemLabel } from '@/components/Descriptions'
import * as UserApi from '@/api/member/user'

const getRedBookPage = (id: any) => {
  return `https://www.xiaohongshu.com/search_result?keyword=${id}&source=web_explore_feed&search_type=user`
}

const getDouYinPage = (id: any) => {
  return `https://www.douyin.com/search/${id}?type=user`
}

defineProps<{ user: UserApi.UserVO }>() // 用户信息

/** 监听用户编号变化 */
</script>
<style scoped lang="scss">
.cell-item {
  display: inline;
}

.cell-item::after {
  content: ':';
}
</style>
