<template>
  <el-card shadow="never">
    <template #header>
      <span>欺骗接口配置</span>
    </template>
    <el-row v-if="data">
      <el-col :span="20">
        <el-descriptions :column="2">
          <el-descriptions-item>
            <template #label>
              <descriptions-item-label label="登录手机号" icon="ep:user" />
            </template>
            <el-input v-model="data.loginMobile" class="input" />
          </el-descriptions-item>
          <el-descriptions-item label="手机号">
            <template #label>
              <descriptions-item-label label="是否开启欺骗功能" icon="ep:phone" />
            </template>
            <el-switch v-model="data.requiresOpenid" />
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <template #footer>
      <el-button type="primary" @click="update">更新</el-button>
    </template>
  </el-card>
</template>

<script setup lang="ts">
import { getFraud, updateFraud } from '@/api/member/photographer'
const data = ref()
const message = useMessage()

const update = async () => {
  const params = {
    id: 1,
    loginMobile: data.value.loginMobile,
    requiresOpenid: data.value.requiresOpenid
  }
  const res = await updateFraud(params)
  message.success('更新成功')
  console.log(res)
}

onMounted(async () => {
  const res = await getFraud(1)
  data.value = res
})
</script>
<style lang="scss" scoped>
.input {
  width: 400px;
}
</style>
