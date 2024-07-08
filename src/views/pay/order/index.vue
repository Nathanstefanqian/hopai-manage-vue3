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
      <el-form-item label="客户电话" prop="memberPhone">
        <el-input
          v-model="queryParams.memberPhone"
          placeholder="请输入客户电话"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="摄影电话" prop="photographerPhone">
        <el-input
          v-model="queryParams.photographerPhone"
          placeholder="请输入摄影师电话"
          clearable
          @keyup.enter="handleQuery"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="创建时间" prop="orderTime">
        <el-date-picker
          v-model="queryParams.orderTime"
          format="YYYY/MM/DD"
          value-format="x"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]"
          class="!w-240px"
        />
      </el-form-item>
      <el-form-item label="订单状态" prop="orderStatus">
        <el-select
          v-model="queryParams.orderStatus"
          placeholder="请选择订单状态"
          clearable
          class="!w-240px"
        >
          <el-option
            v-for="(label, value) in orderStatusDict"
            :key="value"
            :label="label"
            :value="value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="产品名称" prop="spuId">
        <el-select
          v-model="queryParams.spuId"
          placeholder="请选择产品名称"
          clearable
          class="!w-240px"
        >
          <el-option v-for="(label, value) in spuDict" :key="value" :label="label" :value="value" />
        </el-select>
      </el-form-item>
      <el-form-item label="拍摄省市" prop="areaId">
        <el-tree-select
          v-model="queryParams.areaId"
          :data="areaList"
          :props="defaultProps"
          :render-after-expand="true"
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
    <el-table v-loading="loading" :data="computedList" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="订单ID" align="center" prop="id" width="200px" />
      <el-table-column label="客户名称" align="center" prop="memberName" width="150px" />
      <el-table-column label="客户电话" align="center" prop="memberPhone" width="150px" />
      <el-table-column label="约拍类型" align="center" prop="spuDescribe" width="150px" />
      <el-table-column label="摄影师名称" align="center" prop="photographerName" width="150px" />
      <el-table-column label="摄影师电话" align="center" prop="photographerPhone" width="150px" />
      <el-table-column label="预约日期" align="center" prop="appointmentDate" width="200px" />
      <el-table-column label="预约时间" align="center" prop="appointmentTimeRange" width="200px" />
      <el-table-column label="创建时间" align="center" prop="createTime" width="200px" />
      <el-table-column label="拍摄金额" align="center" prop="orderAmt" width="150px">
        <template #default="scope"> {{ scope.row.orderAmt / 100 }} 元 </template>
      </el-table-column>
      <el-table-column label="拍摄地点" align="center" prop="location" width="350px" />
      <el-table-column label="订单状态" align="center" prop="orderStatus" width="150px">
        <template #default="scope">
          <el-tag> {{ getStatus(scope.row.orderStatus) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        :show-overflow-tooltip="false"
        align="center"
        fixed="right"
        label="操作"
        width="100"
      >
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

  <!-- 表单弹窗：添加/修改 -->
  <OrderForm ref="formRef" @success="getList" />
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/formatTime'
import * as AreaApi from '@/api/system/area'
import * as OrderApi from '@/api/pay/order'
import OrderForm from './OrderForm.vue'
import { getStatus, orderStatusDict, getSpuDict } from '@/utils/status'
import { defaultProps } from '@/utils/tree'

defineOptions({ name: 'Order' })

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const areaList = ref([]) // 地区列表的数据
const spuDict = ref()
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  memberId: null,
  memberName: null,
  memberPhone: null,
  spuId: null,
  skuId: null,
  areaId: null,
  photoNum: null,
  photographerId: null,
  photographerName: null,
  photographerPhone: null,
  appointmentStartTime: [],
  appointmentEndTime: [],
  orderStatus: null,
  orderAmt: null,
  actualAmt: null,
  location: null,
  remark: null,
  orderTime: [],
  expireTime: [],
  clientIp: null,
  pingOrderId: null,
  no: null,
  successTime: [],
  refundAmt: null,
  cancellationReason: null,
  createTime: []
})
const queryFormRef = ref() // 搜索的表单

const computedList = computed(() =>
  list.value.map((item: any) => {
    const appointmentStartTime = formatDate(item.appointmentStartTime)
    const appointmentEndTime = formatDate(item.appointmentEndTime)
    const createTime = formatDate(item.createTime)
    // Assuming dateFormatter returns a formatted date string
    const appointmentDate = appointmentStartTime.split(' ')[0] // Extract date part
    const appointmentTimeRange = `${appointmentStartTime.split(' ')[1]}-${
      appointmentEndTime.split(' ')[1]
    }` // Extract time parts and combine

    return {
      ...item,
      appointmentDate,
      createTime,
      appointmentTimeRange
    }
  })
)

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await OrderApi.getOrderPage(queryParams)
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
  push({ name: 'PayOrderDetail', params: { id } })
}

/** 初始化 **/
onMounted(async () => {
  areaList.value = await AreaApi.getAreaTree()
  spuDict.value = await getSpuDict()
  getList()
})
</script>
