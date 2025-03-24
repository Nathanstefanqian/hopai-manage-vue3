<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form
      ref="queryFormRef"
      :inline="true"
      :model="queryParams"
      class="-mb-15px"
      label-width="68px"
    >
      <el-form-item label="手机号" prop="memberPhone">
        <el-input
          v-model="queryParams.memberPhone"
          class="!w-240px"
          clearable
          placeholder="请输入用户手机号"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手机号" prop="photographerPhone">
        <el-input
          v-model="queryParams.photographerPhone"
          class="!w-400px"
          clearable
          placeholder="请输入摄影师手机号"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-input-number
          v-model="queryParams.status"
          class="!w-200px"
          :min="0"
          :max="4"
          clearable
          placeholder="状态"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="订单号" prop="orderId">
        <el-input
          v-model="queryParams.orderId"
          class="!w-240px"
          clearable
          placeholder="请输入订单号"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品号" prop="spuId">
        <el-input
          v-model="queryParams.spuId"
          class="!w-240px"
          clearable
          placeholder="请输入商品号"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="创建时间" prop="createTime">
        <el-date-picker
          v-model="queryParams.createTime"
          type="datetimerange"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :clearable="true"
          @change="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="getList">
          <Icon class="mr-5px" icon="ep:search" />
          搜索
        </el-button>
        <el-button @click="resetQuery">
          <Icon class="mr-5px" icon="ep:refresh" />
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <ContentWrap>
    <el-table
      v-loading="loading"
      :data="list"
      :show-overflow-tooltip="true"
      :stripe="true"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column align="center" label="订单编号" prop="orderId" width="180px" />
      <el-table-column align="center" label="会员昵称" prop="mnickname" width="80px" />
      <el-table-column align="center" label="摄影师昵称" prop="pnickname" width="100px" />
      <el-table-column align="center" label="摄影师手机号" prop="pmobile" width="120px" />
      <el-table-column align="center" label="拍摄金额" prop="orderAmt" width="120px">
        <template #default="scope">
          <span>{{ formatAmount(scope.row.orderAmt) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="实付金额" prop="actualAmt" width="120px">
        <template #default="scope">
          <span>{{ formatAmount(scope.row.actualAmt) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="退款金额" prop="refundActualAmt" width="120px">
        <template #default="scope">
          <span>{{ formatAmount(scope.row.refundActualAmt) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="退款原因" prop="reason" width="180px" />
      <el-table-column align="center" label="状态" prop="status" width="120px">
        <template #default="scope">
          <span>{{ getStatusText(scope.row.status) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间" prop="createTime" width="180px">
        <template #default="scope">
          <span>{{ formatDate(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="核销时间" prop="writeoffTime" width="180px">
        <template #default="scope">
          <span>{{ scope.row.writeoffTime ? formatDate(scope.row.writeoffTime) : '未核销' }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" fixed="right" width="180px">
        <template #default="scope">
          <div class="flex items-center justify-center">
            <el-button
              link
              type="primary"
              @click="openDetail(scope.row.orderId, scope.row.createTime)"
              >详情</el-button
            >
            <el-button
              link
              type="primary"
              @click="openDetail(scope.row.orderId, scope.row.createTime)"
              >确认退款</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination
      v-model:limit="queryParams.pageSize"
      v-model:page="queryParams.pageNo"
      :total="total"
      @pagination="getList"
    />
  </ContentWrap>
</template>

<script lang="ts" setup>
import * as RefundApi from '@/api/pay/refund'
import { formatDate } from '@/utils/formatTime'
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({ name: 'MemberUser' })

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  memberPhone: null,
  photographerPhone: null,
  status: null,
  createTime: null, // 默认查询
  orderId: null,
  spuId: null
})
const queryFormRef = ref() // 搜索的表单
const selectedIds = ref<number[]>([]) // 表格的选中 ID 数组

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await RefundApi.getRefundPage(queryParams)
    list.value = data.list.map((item: any) => ({
      ...item,
      createTime: formatDate(item.createTime),
      writeoffTime: item.writeoffTime ? formatDate(item.writeoffTime) : null
    }))
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 格式化金额 */
const formatAmount = (amount: number) => {
  return (amount / 100).toFixed(2)
}

/** 获取状态文本 */
const getStatusText = (status: number) => {
  const statusMap: { [key: number]: string } = {
    0: '已创建',
    1: '处理中',
    2: '成功',
    3: '失败'
  }
  return statusMap[status] || '未知状态'
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

/** 打开订单详情 */
const { push } = useRouter()
const openDetail = (id: string, createTime: any) => {
  push({ name: 'PayRefundDetail', params: { id } })
}

/** 表格选中事件 */
const handleSelectionChange = (rows: any[]) => {
  selectedIds.value = rows.map((row) => row.orderId)
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
