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
    </el-row>
  </div>
</template>
<script setup lang="ts">
import * as UserApi from '@/api/member/user'
import * as PhotographerApi from '@/api/member/photographer'
import { useTagsViewStore } from '@/store/modules/tagsView'
import UserAccountInfo from './UserAccountInfo.vue'
import UserBasicInfo from './UserBasicInfo.vue'
import MemberTagSelect from '@/views/member/tag/components/MemberTagSelect.vue'
import { CardTitle } from '@/components/Card/index'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

defineOptions({ name: 'MemberDetail' })

const loading = ref(true) // 加载中
const user = ref<UserApi.UserVO>({} as UserApi.UserVO)
const device = ref(null)
const levelId = ref()
const message = useMessage() // 消息弹窗
const { push } = useRouter()
const route = useRoute()
console.log(route)
const id = route.params.id
const createTime = route.params.createTime
/** 获得用户 */
const getUserData = async (id: number) => {
  loading.value = true
  try {
    console.log(createTime)
    user.value = await PhotographerApi.getPhotographerBankDetail({ id })
    console.log(user.value)
  } finally {
    loading.value = false
  }
}

/** 初始化 */
const { currentRoute } = useRouter() // 路由
const { delView } = useTagsViewStore() // 视图操作

const reviewMark = ref('')

// 审核操作
const verify = async (status: number) => {
  const mes = status == 1 ? '不通过' : '通过'
  ElMessageBox.confirm(`确认审核${mes}吗?`, '警告').then(async () => {
    const data = {
      id,
      status
    }
    if (status == 3) {
      if (!levelId.value) {
        message.error('请评定摄影师等级')
        return
      }
      await UserApi.updateUserLevelId({ levelId: levelId.value, id })
    } else {
      if (!reviewMark.value) {
        message.error('请填写不通过的原因')
        return
      }
    }
    const res = await PhotographerApi.verify({ ...data, reviewMark: reviewMark.value })
    if (res) {
      message.success('变更成功！')
      push('/photographer/verify')
    }
  })
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
.description-item-content {
  display: flex;
  margin-top: 20px;
}

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
