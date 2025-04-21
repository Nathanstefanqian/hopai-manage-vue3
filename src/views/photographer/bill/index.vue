<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      class="-mb-15px"
      :model="queryParams"
      ref="queryFormRef"
      :inline="true"
      label-width="68px"
    >
      <el-form-item label="订单号" prop="orderId">
        <el-input
          v-model="queryParams.orderId"
          placeholder="请输入订单号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="会员手机号" prop="memberPhone">
        <el-input
          v-model="queryParams.memberPhone"
          placeholder="请输入会员手机号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-180px"
        />
      </el-form-item>
      <el-form-item label="摄影师手机号" prop="photographerPhone">
        <el-input
          v-model="queryParams.photographerPhone"
          placeholder="请输入摄影师手机号"
          clearable
          @keyup.enter="handleQuery"
          class="!w-180px"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择状态" clearable class="!w-240px">
          <el-option label="分账成功" value="succeeded" />
          <el-option label="分账失败" value="failed" />
          <el-option label="已创建" value="created" />
          <el-option label="分账中" value="processing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="分账请求商户订单号" align="center" prop="no" width="200" />
      <el-table-column label="订单号" align="center" prop="orderId" width="220" />
      <el-table-column label="ping++的id" align="center" prop="pingOrderId" width="220" />
      <el-table-column label="会员" align="center" prop="mnickname" width="100" />
      <el-table-column label="摄影师" align="center" prop="pnickname" width="200" />
      <el-table-column label="实付金额" align="center" prop="actualAmt">
        <template #default="scope"> {{ (scope.row.actualAmt / 100).toFixed(2) }} 元 </template>
      </el-table-column>
      <el-table-column label="分账状态" align="center" prop="status" width="100">
        <template #default="scope">
          <el-tag :type="getStatusType(scope.row.status)">
            {{ getStatusLabel(scope.row.status) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="分账金额" align="center" prop="allocationAmt" width="150">
        <template #default="scope"> {{ (scope.row.allocationAmt / 100).toFixed(2) }} 元 </template>
      </el-table-column>
      <el-table-column label="下单时间" align="center" prop="orderCreateTime" width="180">
        <template #default="scope">
          <span>{{ formatDate(scope.row.orderCreateTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="结算时间" align="center" prop="allocationCreateTime" width="180">
        <template #default="scope">
          <span>{{ formatDate(scope.row.allocationCreateTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="结算银行" align="center" prop="bankName" width="200" />
      <el-table-column label="结算卡号" align="center" prop="bankCardNum" width="250" />
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </ContentWrap>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/formatTime'
import * as AllocationApi from '@/api/photographer/bill'

defineOptions({ name: 'PhotographerBill' })

const loading = ref(false) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  orderId: undefined,
  memberPhone: undefined,
  photographerPhone: undefined,
  status: undefined
})
const queryFormRef = ref() // 搜索的表单

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await AllocationApi.getAllocationPage(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

/** 获取状态标签类型 */
const getStatusType = (status: string) => {
  switch (status) {
    case 'succeeded':
      return 'success'
    case 'failed':
      return 'danger'
    case 'processing':
      return ''
    case 'created':
      return 'primary'
    default:
      return 'info'
  }
}

/** 获取状态标签文本 */
const getStatusLabel = (status: string) => {
  switch (status) {
    case 'succeeded':
      return '分账成功'
    case 'failed':
      return '分账失败'
    case 'processing':
      return '分账中'
    case 'created':
      return '已创建'
    default:
      return '未知状态'
  }
}

/** 初始化 */
onMounted(() => {
  getList()
})
</script>

<style scoped></style>
