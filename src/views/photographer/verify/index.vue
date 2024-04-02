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
      <el-table-column align="center" label="用户编号" prop="userId" width="120px" />
      <el-table-column align="center" label="头像" prop="avatar" width="80px">
        <template #default="scope">
          <img :src="scope.row.avatar" class="w-40px" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="手机号" prop="phone" width="120px" />
      <el-table-column align="center" label="姓名" prop="name" width="80px" />
      <el-table-column align="center" label="身份证号" prop="" width="100px" />
      <el-table-column align="center" label="银行卡号" prop="" width="100px" />
      <el-table-column align="center" label="审核状态" prop="registerStatus" width="100px">
        <template #default="scope">
          <dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="scope.row.registerStatus" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="接单形式" prop="" width="100px" />
      <el-table-column align="center" label="设备信息" prop="" width="100px" />
      <el-table-column align="center" label="所在地" prop="" width="100px" />
      <el-table-column :show-overflow-tooltip="false" align="center" fixed="right" label="操作">
        <template #default="scope">
          <div class="flex items-center justify-center">
            <el-button link type="primary" @click="openDetail(scope.row.userId)">详情</el-button>
            <el-dropdown
              v-hasPermi="[
                'member:user:update',
                'member:user:update-level',
                'member:user:update-point',
                'member:user:update-balance'
              ]"
              @command="(command) => handleCommand(command, scope.row)"
            >
              <el-button link type="primary">
                <Icon icon="ep:d-arrow-right" />
                更多
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-if="checkPermi(['member:user:update'])"
                    command="handleUpdate"
                  >
                    编辑
                  </el-dropdown-item>
                  <el-dropdown-item @click="verify(scope.row.userId, 4)">
                    审核可接单
                  </el-dropdown-item>
                  <el-dropdown-item @click="verify(scope.row.userId, 3)">
                    审核通过已注册
                  </el-dropdown-item>
                  <el-dropdown-item @click="verify(scope.row.userId, 1)">
                    审核不通过
                  </el-dropdown-item>
                  <el-dropdown-item
                    v-if="checkPermi(['member:user:update-level'])"
                    command="handleUpdateLevel"
                  >
                    修改等级
                  </el-dropdown-item>
                  <el-dropdown-item
                    v-if="checkPermi(['member:user:update-point'])"
                    command="handleUpdatePoint"
                  >
                    修改积分
                  </el-dropdown-item>
                  <el-dropdown-item
                    v-if="checkPermi(['member:user:update-balance'])"
                    command="handleUpdateBlance"
                  >
                    修改余额(WIP)
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
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

  <!-- 表单弹窗：添加/修改 -->
  <UserForm ref="formRef" @success="getList" />
  <!-- 修改用户等级弹窗 -->
  <UserLevelUpdateForm ref="updateLevelFormRef" @success="getList" />
  <!-- 修改用户积分弹窗 -->
  <UserPointUpdateForm ref="updatePointFormRef" @success="getList" />
  <!-- 发送优惠券弹窗 -->
  <CouponSendForm ref="couponSendFormRef" />
</template>
<script lang="ts" setup>
import { dateFormatter } from '@/utils/formatTime'
import * as UserApi from '@/api/member/user'
import * as PhotographerApi from '@/api/member/photographer'
import { DICT_TYPE } from '@/utils/dict'
import UserForm from './UserForm.vue'
import UserLevelUpdateForm from './UserLevelUpdateForm.vue'
import UserPointUpdateForm from './UserPointUpdateForm.vue'
import { CouponSendForm } from '@/views/mall/promotion/coupon/components'
import { checkPermi } from '@/utils/permission'

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
  levelId: null,
  groupId: null
})
const queryFormRef = ref() // 搜索的表单
const updateLevelFormRef = ref() // 修改会员等级表单
const updatePointFormRef = ref() // 修改会员积分表单
const selectedIds = ref<number[]>([]) // 表格的选中 ID 数组

/** 查询列表 */
const getList = async () => {
  const params = { pageNo: queryParams.pageNo, pageSize: queryParams.pageSize } // 1. 会员 2. 管理员 3. 摄影师
  loading.value = true
  try {
    const data = await PhotographerApi.getUserVerify(params)
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
  push({ name: 'PhotographerUserVerifyDetail', params: { id } })
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

const verify = async (id: any, status: number) => {
  const data = {
    id,
    status
  }
  const res = await PhotographerApi.verify(data)
  if (res) {
    // 如果变更成功了
    message.success('变更成功！')
  }
}
/** 操作分发 */
const handleCommand = (command: string, row: UserApi.UserVO) => {
  switch (command) {
    case 'handleUpdate':
      openForm('update', row.id)
      break
    case 'handleUpdateLevel':
      updateLevelFormRef.value.open(row.id)
      break
    case 'handleVerify':
      verify()
    case 'handleUpdatePoint':
      updatePointFormRef.value.open(row.id)
      break
    case 'handleUpdateBlance':
      // todo @jason：增加一个【修改余额】
      break
    default:
      break
  }
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
