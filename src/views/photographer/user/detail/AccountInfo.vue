<template>
  <el-descriptions :column="2">
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="银行卡号" icon="svg-icon:member_level" />
      </template>
      {{ account.bankCardNumber || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="开户行代码" icon="svg-icon:member_level" />
      </template>
      {{ account.bankCode || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="身份证号码" icon="svg-icon:member_level" />
      </template>
      {{ account.idCard || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="身份证姓名" icon="svg-icon:member_level" />
      </template>
      {{ account.idCardName || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="身份证有效开始日期" icon="svg-icon:member_level" />
      </template>
      {{ account.idCardStartDate || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="身份证有效结束日期" icon="svg-icon:member_level" />
      </template>
      {{ account.idCardEndDate || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="身份证地址" icon="svg-icon:member_level" />
      </template>
      {{ account.idCardAddress || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="区域代码" icon="svg-icon:member_level" />
      </template>
      {{ account.regionCode || '无' }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="身份证正面" icon="svg-icon:member_level" />
      </template>
      <el-row>
        <el-col :span="24">
          <el-image class="ml-30 h-50 w-50 rounded-lg" fit="cover" :src="account.idCardFrontUrl" />
        </el-col>
      </el-row>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <descriptions-item-label label="身份证反面" icon="svg-icon:member_level" />
      </template>
      <el-row>
        <el-col :span="24">
          <el-image class="ml-30 h-50 w-50 rounded-lg" fit="cover" :src="account.idCardBackUrl" />
        </el-col>
      </el-row>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import * as UserApi from '@/api/member/user'
import { ref } from 'vue'

const props = defineProps<{ user: UserApi.UserVO }>()
const account = ref<UserApi.appPhotographerOpenSubAppReqVO>(
  props.user.appPhotographerOpenSubAppReqVO
)
</script>
