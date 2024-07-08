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
      <el-form-item label="用户昵称" prop="nickname">
        <el-input
          v-model="queryParams.nickname"
          class="!w-240px"
          clearable
          placeholder="请输入用户昵称"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input
          v-model="queryParams.mobile"
          class="!w-240px"
          clearable
          placeholder="请输入手机号"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="用户等级" prop="levelId">
        <MemberTagSelect v-model="queryParams.levelId" :multiple="false" />
      </el-form-item>
      <el-form-item label="所在地" prop="areaId">
        <el-tree-select
          v-model="queryParams.areaId"
          :data="areaList"
          :props="defaultProps"
          :render-after-expand="true"
        />
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery">
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

  <!-- 列表 -->
  <ContentWrap>
    <el-table
      v-loading="loading"
      :data="list"
      :show-overflow-tooltip="true"
      :stripe="true"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column align="center" label="用户编号" prop="id" width="120px" />
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
      <el-table-column align="center" label="昵称" prop="nickname" width="80px" />
      <el-table-column align="center" label="用户等级" width="150px" prop="levelName" />
      <el-table-column align="center" label="状态" prop="status" width="100px">
        <template #default="scope">
          <dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="所在地" prop="areaName" width="200px" />
      <el-table-column
        :formatter="dateFormatter"
        align="center"
        label="登录时间"
        prop="loginDate"
        width="180px"
      />
      <el-table-column
        :formatter="dateFormatter"
        align="center"
        label="注册时间"
        prop="createTime"
        width="180px"
      />
      <el-table-column
        :show-overflow-tooltip="false"
        align="center"
        fixed="right"
        label="操作"
        width="100"
      >
        <template #default="scope">
          <div class="flex items-center justify-center">
            <el-button link type="primary" @click="openDetail(scope.row.id)">详情</el-button>
            <el-button link type="primary" @click="handleEdit(scope.row.id)">编辑</el-button>
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
  <Dialog title="编辑" v-model="dialogVisible">
    <el-form ref="editRef" :model="formData" :rules="formRules">
      <el-form-item label="摄影师等级" prop="levelId">
        <MemberTagSelect v-model="formData.levelId" :multiple="false" />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio
            v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
            :key="dict.value"
            :label="dict.value"
          >
            {{ dict.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="handleUpdate" type="primary">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import { dateFormatter } from '@/utils/formatTime'
import * as UserApi from '@/api/member/user'
import * as AreaApi from '@/api/system/area'
import MemberTagSelect from '@/views/member/tag/components/MemberTagSelect.vue'
import { defaultProps } from '@/utils/tree'

defineOptions({ name: 'MemberUser' })

const message = useMessage() // 消息弹窗

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  nickname: null,
  mobile: null,
  loginDate: [],
  createTime: [],
  tagIds: [],
  levelId: [],
  groupId: null,
  areaId: null,
  userType: 3,
  areaName: []
})
const queryFormRef = ref() // 搜索的表单
const editRef = ref()
const selectedIds = ref<number[]>([]) // 表格的选中 ID 数组
const dialogVisible = ref(false)
/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await UserApi.getUserPage(queryParams)
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

/** 打开会员详情 */
const { push } = useRouter()
const openDetail = (id: number) => {
  push({ name: 'PhotographerUserDetail', params: { id } })
}

/** 表格选中事件 */
const handleSelectionChange = (rows: UserApi.UserVO[]) => {
  selectedIds.value = rows.map((row) => row.id)
}

const formData = ref({
  levelId: '',
  status: '',
  id: ''
})
const formRules = {
  levelId: [{ required: true, message: '摄影师等级不能为空', trigger: 'blur' }],
  status: [{ required: true, message: '状态不能为空', trigger: 'blur' }]
}

// 编辑事件
const handleEdit = (id: any) => {
  dialogVisible.value = true
  list.value.map((item: any) => {
    if (item.id == id) {
      formData.value.levelId = item.levelId
      formData.value.status = item.status
      formData.value.id = item.id
    }
  })
}

const handleUpdate = async () => {
  if (!editRef) return
  const valid = await editRef.value.validate()
  if (!valid) return
  // 提交请求
  loading.value = true
  try {
    await UserApi.updateUserLnSInfo(formData.value)
    message.success('成功')
    await getList()
    dialogVisible.value = false
  } finally {
    loading.value = false
  }
}

const areaList = ref('')
/** 初始化 **/
onMounted(async () => {
  areaList.value = await AreaApi.getAreaTree()
  await getList()
})
</script>
