<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <div v-if="user">
      <el-form
        ref="orderRef"
        label-width="100px"
        :model="formData"
        :rules="formRules"
        v-loading="formLoading"
      >
        <el-form-item label="摄影师等级" prop="levelId">
          <MemberTagSelect v-model="formData.levelId" :multiple="false" />
        </el-form-item>
        <el-form-item label="服务区域" prop="areaIds">
          <div>
            <el-scrollbar>
              <div class="scrollbar-flex-content">
                <div class="scrollbar-demo-item" v-for="(item, index) in areaNames" :key="index">
                  <el-tag color="#fff" @click="handleDeleteAreaId(index)">{{ item }}</el-tag>
                </div>
              </div>
            </el-scrollbar>
            <div class="flex">
              <el-tree-select
                v-model="areaId"
                :data="areaList"
                :props="defaultProps"
                :render-after-expand="true"
              />
              <el-button text type="primary" @click="handleAddAreaId()">添加</el-button>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="服务范围" prop="categoryIds">
          <div>
            <el-checkbox-group v-model="formData.categoryIds">
              <el-checkbox
                v-for="(item, index) in spuList"
                :key="index"
                :value="item.id"
                :label="item.id"
                >{{ item.name }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <el-button type="primary" @click="handleUpdate()">确定</el-button>
      <el-button @click="handleCancel()">取消</el-button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import * as UserApi from '@/api/member/user'
import * as AreaApi from '@/api/system/area'
import * as SpuApi from '@/api/mall/product/spu'
import MemberTagSelect from '@/views/member/tag/components/MemberTagSelect.vue'
import { defaultProps } from '@/utils/tree'
const emit = defineEmits(['success'])
const dialogTitle = ref('')
const dialogVisible = ref(false)
const props = defineProps<{ userInfo: UserApi.UserVO }>() // 用户信息
const orderRef = ref()
const areaList = ref([])
const spuList = ref<any>([])
const areaId = ref('')
const message = useMessage()
const formLoading = ref(false)
const route = useRoute()
const userId = route.params.id

const user = ref<UserApi.UserVO>({ ...props.userInfo })
const handleUpdate = async () => {
  // 校验表单
  if (!orderRef) return
  const valid = await orderRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = ref(formData.value)
    await UserApi.updateUserOrderInfo({ ...data.value, userId })
    await UserApi.updateUserLevelId({ levelId: formData.value.levelId, id: userId })
    message.success('修改成功')
    emit('success')
    dialogVisible.value = false
  } finally {
    formLoading.value = false
  }
}
const handleCancel = () => {
  dialogVisible.value = false
}

const areaNames = ref<any>([...user.value.areaNames])

const formData = ref({
  areaIds: [...user.value.areaIds],
  levelId: user.value.levelId,
  categoryIds: user.value.categoryIds
})
const formRules = reactive({
  levelId: [{ required: true, message: '摄影师等级不能为空', trigger: 'blur' }],
  categoryIds: [{ required: true, message: '服务范围不能为空', trigger: 'blur' }],
  areaIds: [{ required: true, message: '服务区域不能为空', trigger: 'blur' }]
})

const getAreaNameById = (id) => {
  const findAreaPath = (list, id, path) => {
    for (const item of list) {
      const currentPath = [...path, item.name]
      if (item.id === id) return currentPath
      if (item.children) {
        const result = findAreaPath(item.children, id, currentPath)
        if (result) return result
      }
    }
    return null
  }
  const path = findAreaPath(areaList.value, id, [])
  return path ? path.join('-') : null
}

const handleDeleteAreaId = (index: number) => {
  ElMessageBox.confirm('确认删除吗', '警告').then(async () => {
    areaNames.value.splice(index, 1)
    formData.value.areaIds.splice(index, 1)
  })
}

const handleAddAreaId = () => {
  const areaName = getAreaNameById(areaId.value)
  if (areaName) {
    if (formData.value.areaIds.findIndex((id) => id === areaId.value) > -1) {
      message.error('该地区已存在')
      return
    }
    formData.value.areaIds.unshift(areaId.value)
    areaNames.value.unshift(areaName)
  } else {
    message.error('请先选择地区')
  }
}

const open = async () => {
  dialogVisible.value = true
  dialogTitle.value = '接单信息'
}
defineExpose({ open })

onMounted(async () => {
  areaList.value = await AreaApi.getAreaTree()
  const res = await SpuApi.getSpuPage({ pageNo: 1, pageSize: 50 })
  spuList.value = res.list.map((item) => ({ id: item.categoryId, name: item.name })) // todo
})
</script>

<style lang="scss" scoped>
.scrollbar-flex-content {
  display: flex;
  align-items: center;
  width: 480px;
  margin-bottom: 20px;
}

.scrollbar-demo-item {
  display: flex;
  flex-shrink: 0;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
}
</style>
