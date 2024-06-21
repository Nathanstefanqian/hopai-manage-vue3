<template>
  <div v-loading="loading">
    <el-row :gutter="10">
      <el-col :span="14" class="detail-info-item">
        <UserBasicInfo :user="user">
          <template #header>
            <div class="card-header">
              <CardTitle title="基本信息" />
            </div>
          </template>
        </UserBasicInfo>
      </el-col>
      <el-col :span="10" class="detail-info-item">
        <el-card shadow="never" class="h-full">
          <template #header>
            <CardTitle title="账户信息" />
          </template>
          <UserAccountInfo :user="user" />
        </el-card>
      </el-col>
      <el-card header="设备明细" style="width: 100%; margin-top: 20px" shadow="never">
        <template #header>
          <CardTitle title="设备明细" />
        </template>
        <el-tabs>
          <el-tab-pane label="设备信息">
            {{ user.appPhotographerInfoBaseVO ? user.appPhotographerInfoBaseVO.camera : '' }}
          </el-tab-pane>
          <el-tab-pane label="设备图片">
            <el-image :src="device" />
          </el-tab-pane>
          <el-tab-pane label="镜头信息" lazy>
            <span>{{
              user.appPhotographerInfoBaseVO ? user.appPhotographerInfoBaseVO.zoomLens : ''
            }}</span>
          </el-tab-pane>
          <el-tab-pane label="灯光信息">
            <span>{{
              user.appPhotographerInfoBaseVO ? user.appPhotographerInfoBaseVO.lightingEquipment : ''
            }}</span>
          </el-tab-pane>
        </el-tabs>
      </el-card>
      <el-card style="width: 100%; margin-top: 20px" shadow="never">
        <el-col :span="10" class="detail-info-item">
          <el-popconfirm title="确认吗?" @confirm="verify(3)">
            <template #reference>
              <el-button>审核通过</el-button>
            </template>
          </el-popconfirm>
          <el-popconfirm title="确认吗?" @click="verify(1)">
            <template #reference>
              <el-button>审核不通过</el-button>
            </template>
          </el-popconfirm>
        </el-col>
      </el-card>
    </el-row>
  </div>

  <!-- 表单弹窗：添加/修改 -->
  <UserForm ref="formRef" @success="getUserData(id)" />
</template>
<script setup lang="ts">
import * as UserApi from '@/api/member/user'
import * as PhotographerApi from '@/api/member/photographer'
import { useTagsViewStore } from '@/store/modules/tagsView'
import { useUpload } from '@/hooks/web/useUpload'
import UserForm from '@/views/member/user/UserForm.vue'
import UserAccountInfo from './UserAccountInfo.vue'
import UserBasicInfo from './UserBasicInfo.vue'
import { CardTitle } from '@/components/Card/index'
import { ElMessage } from 'element-plus'

defineOptions({ name: 'MemberDetail' })
const { getStsToken, signatureUrl } = useUpload()

const loading = ref(true) // 加载中
const user = ref<UserApi.UserVO>({} as UserApi.UserVO)
const device = ref(null)

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string) => {
  formRef.value.open(type, id)
}

const message = useMessage() // 消息弹窗

/** 获得用户 */
const getUserData = async (id: number) => {
  loading.value = true
  try {
    user.value = await PhotographerApi.getUserDetailInfo(id)
    const res = await PhotographerApi.getPhotographerDevice(id)
    await getStsToken('user-profile', false)
    device.value = await signatureUrl(res[0].picUrl)

    console.log('在这里打印设备照片', device.value)
  } finally {
    loading.value = false
  }
}

/** 初始化 */
const { currentRoute } = useRouter() // 路由
const { delView } = useTagsViewStore() // 视图操作
const route = useRoute()
const id = route.params.id

// 审核操作
const verify = async (status: number) => {
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
