<template>
  <div v-loading="loading" v-if="user">
    <el-row :gutter="10">
      <!-- 左上角：基本信息 -->
      <el-col :span="14" class="detail-info-item">
        <UserBasicInfo :user="user">
          <template #header>
            <div class="card-header">
              <CardTitle title="基本信息" />
              <el-button type="primary" size="small" text @click="openForm('UpdateBasic')">
                编辑
              </el-button>
            </div>
          </template>
        </UserBasicInfo>
      </el-col>
      <!-- 右上角：账户信息 -->
      <el-col :span="10" class="detail-info-item">
        <el-card shadow="never" class="h-full">
          <template #header>
            <div class="card-header">
              <CardTitle title="服务信息" />
            </div>
          </template>
          <UserAccountInfo :user="user" />
        </el-card>
      </el-col>
      <el-card header="其他明细" style="width: 100%; margin-top: 20px" shadow="never">
        <template #header>
          <div class="card-header">
            <CardTitle title="技术信息" />
            <el-button type="primary" size="small" text @click="openForm('UpdateTech')">
              编辑
            </el-button>
          </div>
        </template>
        <TechnicalInfo :user="user" />
      </el-card>
      <el-card header="其他明细" style="width: 100%; margin-top: 20px" shadow="never">
        <template #header>
          <div class="card-header">
            <CardTitle title="接单信息" />
            <el-button type="primary" size="small" text @click="openForm('UpdateOrder')">
              编辑
            </el-button>
          </div>
        </template>
        <OrderInfo :user="user" />
      </el-card>
      <el-card header="其他明细" style="width: 100%; margin-top: 20px" shadow="never">
        <template #header>
          <div class="card-header">
            <CardTitle title="开户信息" />
            <el-button type="primary" size="small" text @click="openForm('UpdateOrder')">
              编辑
            </el-button>
          </div>
        </template>
        <AccountInfo :user="user" />
      </el-card>
      <el-card header="其他明细" style="width: 100%; margin-top: 20px" shadow="never">
        <template #header>
          <div class="card-header">
            <CardTitle title="评价信息" />
          </div>
        </template>
        <CommentInfo />
      </el-card>
      <el-card header="其他明细" style="width: 100%; margin-top: 20px" shadow="never">
        <template #header>
          <div class="card-header">
            <CardTitle title="代表作信息" />
            <div class="card-header-button">
              <el-button type="primary" size="small" text @click="openForm('CreateAlbum')"
                >新建</el-button
              >
              <el-button type="primary" size="small" text @click="photoRef = !photoRef">
                {{ !photoRef ? '编辑' : '取消' }}
              </el-button>
            </div>
          </div>
        </template>
        <AlbumInfo :user="user" :photoRef="photoRef" :updateFlag="updateFlag" />
      </el-card>
    </el-row>
  </div>
  <!-- 表单弹窗：添加/修改 -->
  <template v-if="user">
    <UserForm ref="formRef" @success="getUserData(id)" :userInfo="user" />
    <CreateAlbumForm ref="createAlbumFormRef" @success="updateFlag = !updateFlag" />
    <TechForm ref="techFormRef" :userInfo="user" @success="getUserData(id)" />
    <OrderForm ref="orderFormRef" :userInfo="user" @success="getUserData(id)" />
  </template>
</template>
<script setup lang="ts">
import * as UserApi from '@/api/member/user'
import * as PhotographerApi from '@/api/member/photographer'
import { useTagsViewStore } from '@/store/modules/tagsView'
import AccountInfo from './AccountInfo.vue'
import UserForm from '../UserForm.vue'
import TechForm from '../TechForm.vue'
import OrderForm from '../OrderForm.vue'
import CreateAlbumForm from '@/views/photographer/user/CreateAlbumForm.vue'
import CommentInfo from './CommentInfo.vue'
import UserAccountInfo from './UserAccountInfo.vue'
import UserBasicInfo from './UserBasicInfo.vue'
import TechnicalInfo from './TechnicalInfo.vue'
import AlbumInfo from './AlbumInfo.vue'
import OrderInfo from './OrderInfo.vue'
import { CardTitle } from '@/components/Card/index'
import { ElMessage } from 'element-plus'

defineOptions({ name: 'PhotographerUserDetail' })

const loading = ref(true) // 加载中
const user = ref<UserApi.UserVO | null>(null)
const route = useRoute()
const id = route.params.id

/** 添加/修改操作 */
const formRef = ref()
const photoRef = ref(false)
const createAlbumFormRef = ref()
const techFormRef = ref()
const orderFormRef = ref()
const updateFlag = ref(false)
const openForm = (type: string) => {
  switch (type) {
    case 'UpdateBasic':
      formRef.value.open(id)
      break
    case 'CreateAlbum':
      createAlbumFormRef.value.open()
      break
    case 'UpdateTech':
      techFormRef.value.open()
      break
    case 'UpdateOrder':
      orderFormRef.value.open()
    default:
      break
  }
}

/** 获得用户 */
const getUserData = async (id: string | string[]) => {
  loading.value = true
  try {
    user.value = await PhotographerApi.getUserDetailInfo(id)
  } finally {
    loading.value = false
  }
}

/** 初始化 */
const { currentRoute } = useRouter() // 路由
const { delView } = useTagsViewStore() // 视图操作

onMounted(() => {
  if (!id) {
    ElMessage.warning('参数错误，会员编号不能为空！')
    delView(unref(currentRoute))
    return
  }
  getUserData(id)
})
</script>
<style scoped lang="css">
.detail-info-item:first-child {
  padding-left: 0 !important;
}

/* first-child 不生效有没有大佬给看下q.q */
.detail-info-item:nth-child(2) {
  padding-right: 0 !important;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
