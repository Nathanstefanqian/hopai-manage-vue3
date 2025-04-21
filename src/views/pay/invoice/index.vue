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
      <el-form-item label="发票ID" prop="invoiceId">
        <el-input
          v-model="queryParams.invoiceId"
          placeholder="请输入发票ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="用户ID" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入用户ID"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
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
      <el-table-column label="发票编号" align="center" prop="invoiceId" width="250px" />
      <el-table-column label="用户ID" align="center" prop="userId" width="100px" />
      <el-table-column label="发票类型" align="center" prop="invoiceType" width="100px">
        <template #default="scope">
          <el-tag :type="scope.row.invoiceType === 1 ? 'success' : 'primary'">{{
            scope.row.invoiceType === 1 ? '个人' : '企业'
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="发票抬头" align="center" prop="invoiceTitle" width="180px">
        <template #default="scope">
          {{ scope.row.invoiceTitle || '无' }}
        </template>
      </el-table-column>
      <el-table-column label="税号" align="center" prop="taxNumber" width="180px">
        <template #default="scope">
          {{ scope.row.taxNumber || '无' }}
        </template>
      </el-table-column>
      <el-table-column label="发票金额" align="center" prop="invoiceAmount" width="120px">
        <template #default="scope"> {{ scope.row.invoiceAmount / 100 }} 元 </template>
      </el-table-column>
      <el-table-column label="发票状态" align="center" prop="invoiceStatus" width="100px">
        <template #default="scope">
          <el-tag
            :type="
              scope.row.invoiceStatus === 0
                ? 'danger'
                : scope.row.invoiceStatus === 1
                  ? 'success'
                  : 'info'
            "
          >
            {{
              scope.row.invoiceStatus === 0
                ? '开票中'
                : scope.row.invoiceStatus === 1
                  ? '已开票'
                  : '已作废'
            }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" align="center" prop="email" width="180px">
        <template #default="scope">
          {{ scope.row.email || '无' }}
        </template>
      </el-table-column>
      <el-table-column label="地址" align="center" prop="address" width="400px">
        <template #default="scope">
          {{ scope.row.address || '无' }}
        </template>
      </el-table-column>
      <el-table-column label="手机号" align="center" prop="mobile" width="120px">
        <template #default="scope">
          {{ scope.row.mobile || '无' }}
        </template>
      </el-table-column>
      <el-table-column label="开户行" align="center" prop="bankName" width="180px">
        <template #default="scope">
          {{ scope.row.bankName || '无' }}
        </template>
      </el-table-column>
      <el-table-column label="开户行账号" align="center" prop="bankAccount" width="180px">
        <template #default="scope">
          {{ scope.row.bankAccount || '无' }}
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center" prop="remark" width="180px">
        <template #default="scope">
          {{ scope.row.remark || '无' }}
        </template>
      </el-table-column>
      <el-table-column label="开票时间" align="center" prop="createTime" width="180px">
        <template #default="scope">
          {{ formatDate(scope.row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="100px" fixed="right">
        <template #default="scope">
          <el-button link type="primary" @click="openDetail(scope.row.id)">详情</el-button>
        </template>
      </el-table-column>
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
import * as InvoiceApi from '@/api/pay/invoice'

defineOptions({ name: 'PayInvoice' })

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  userId: undefined,
  invoiceId: undefined
})
const queryFormRef = ref() // 搜索的表单

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await InvoiceApi.getInvoicePage(queryParams)
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

// 打开详情
const { push } = useRouter()
const openDetail = (id: number) => {
  push({ name: 'PayInvoiceDetail', params: { id } })
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
