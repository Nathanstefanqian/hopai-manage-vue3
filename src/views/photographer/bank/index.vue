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
      <el-form-item label="手机号" prop="mobile">
        <el-input
          v-model="queryParams.mobile"
          class="!w-240px"
          clearable
          placeholder="请输入用户昵称"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="注册状态" prop="registerStatus">
        <el-input-number
          v-model="queryParams.registerStatus"
          class="!w-100px"
          :min="4"
          :max="5"
          clearable
          placeholder="4"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="注册时间" prop="createTime">
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
      <el-table-column align="center" label="用户编号" prop="userId" width="180px" />
      <el-table-column align="center" label="头像" prop="avatar" width="80px">
        <template #default="scope">
          <el-image
            :src="scope.row.avatar ? scope.row.avatar : '/avatar.jpg'"
            class="h-10 w-10 rounded-lg"
            fit="cover"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="手机号" prop="mobile" width="120px" />

      <el-table-column align="center" label="姓名" prop="nickname" width="80px" />
      <el-table-column align="center" label="所在地" prop="location" width="180px" />
      <el-table-column align="center" label="注册状态" prop="registerStatus" width="120px">
        <template #default="scope">
          <span>{{ scope.row.registerStatus }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间" prop="createTime" width="180px" />
      <el-table-column align="center" label="通过时间" prop="accessTime" width="180px">
        <template #default="scope">
          <span>{{ formatDate(scope.row.accessTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="结算时间" prop="settleTime" width="180px">
        <template #default="scope">
          <span>{{ formatDate(scope.row.settleTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="false" align="center" fixed="right" label="操作">
        <template #default="scope">
          <div class="flex items-center justify-center">
            <el-button
              link
              type="primary"
              @click="openDetail(scope.row.userId, scope.row.createTime)"
              >详情</el-button
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
import * as UserApi from '@/api/member/user'
import * as PhotographerApi from '@/api/member/photographer'
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
  mobile: null,
  createTime: null,
  registerStatus: null // 默认查询
})
const queryFormRef = ref() // 搜索的表单
const selectedIds = ref<number[]>([]) // 表格的选中 ID 数组

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await PhotographerApi.getPhotographerBankPage(queryParams)
    list.value = data.list.map((item: any) => {
      return {
        ...item,
        createTime: formatDate(item.createTime),
        accessTime: item.accessTime ? formatDate(item.accessTime) : '未通过',
        settleTime: item.settleTime ? formatDate(item.settleTime) : '未结算'
      }
    })
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  // getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

/** 打开会员详情 */
const { push } = useRouter()
const openDetail = (id: number, createTime: any) => {
  push({ name: 'PhotographerUserBankDetail', params: { id, createTime } })
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}

/** 表格选中事件 */
const handleSelectionChange = (rows: UserApi.UserVO[]) => {
  selectedIds.value = rows.map((row) => row.id)
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
