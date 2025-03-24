<template>
  <el-card shadow="never">
    <template #header>
      <slot name="header"></slot>
    </template>
    <el-row>
      <el-col :span="20">
        <el-descriptions :column="2" v-if="user.appPhotographerInfoBaseVO">
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="姓名" icon="ep:user" />
            </template>
            {{ user.nickname }}
          </el-descriptions-item>
          <el-descriptions-item label="手机号">
            <template #label>
              <descriptions-item-label label="手机号" icon="ep:phone" />
            </template>
            {{ user.mobile }}
          </el-descriptions-item>
          <el-descriptions-item label="微信号">
            <template #label>
              <descriptions-item-label label="微信号" icon="ep:postcard" />
            </template>
            {{
              user.appPhotographerInfoBaseVO.wechatId
                ? user.appPhotographerInfoBaseVO.wechatId
                : '无'
            }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="性别" icon="fa:mars-double" />
            </template>
            {{ user.sex ? '女' : '男' }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="所在地" icon="ep:location" />
            </template>
            {{ user.areaName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="类型" icon="svg-icon:member_level" />
            </template>
            {{
              user.appPhotographerInfoBaseVO && user.appPhotographerInfoBaseVO.orderType
                ? '全职'
                : '兼职'
            }}
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
  </el-card>
</template>
<script setup lang="ts">
import * as UserApi from '@/api/member/user'
import { DescriptionsItemLabel } from '@/components/Descriptions/index'

const { user } = defineProps<{ user: UserApi.UserVO }>()
</script>
<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
