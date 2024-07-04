<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <div v-if="user">
      <el-form ref="techRef" :model="formData" :rules="formRules" label-width="100px">
        <el-form-item label="简介" prop="introduction">
          <el-input
            v-model="formData.introduction"
            type="textarea"
            :rows="4"
            placeholder="请输入简介"
          />
        </el-form-item>
        <el-form-item label="小红书号" prop="littleRedBookId">
          <el-input v-model="formData.littleRedBookId" placeholder="请输入小红书号" />
        </el-form-item>
        <el-form-item label="抖音号" prop="douYinId">
          <el-input v-model="formData.douYinId" placeholder="请输入抖音号" />
        </el-form-item>
        <el-form-item label="相机型号" prop="camera">
          <el-input v-model="formData.camera" placeholder="请输入相机型号" />
        </el-form-item>
        <el-form-item label="灯光信息" prop="lightingEquipment">
          <el-input v-model="formData.lightingEquipment" placeholder="请输入灯光信息" />
        </el-form-item>
        <el-form-item label="变焦镜头" prop="zoomLens">
          <el-input v-model="formData.zoomLens" placeholder="请输入变焦镜头" />
        </el-form-item>
        <el-form-item label="定焦镜头" prop="fixedFocalLengthLens">
          <el-input v-model="formData.fixedFocalLengthLens" placeholder="请输入定焦镜头" />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <el-button type="primary" @click="handleUpdate()">确定</el-button>
      <el-button @click="handleDelete()">取消</el-button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import * as UserApi from '@/api/member/user'
const dialogTitle = ref('')
const dialogVisible = ref(false)
const props = defineProps<{ userInfo: UserApi.UserVO }>() // 用户信息
const techRef = ref()
const formLoading = ref(false)
const route = useRoute()
const userId = route.params.id
const message = useMessage()
const user = ref<UserApi.appPhotographerInfoBaseVO>(props.userInfo.appPhotographerInfoBaseVO)
const handleDelete = () => {
  dialogVisible.value = false
}
const formData = ref({
  introduction: user.value.introduction,
  littleRedBookId: user.value.littleRedBookId,
  douYinId: user.value.douYinId,
  camera: user.value.camera,
  lightingEquipment: user.value.lightingEquipment,
  zoomLens: user.value.zoomLens,
  fixedFocalLengthLens: user.value.fixedFocalLengthLens
})

const formRules = reactive({
  introduction: [{ required: true, message: '简介不能为空', trigger: 'blur' }],
  littleRedBookId: [{ required: true, message: '小红书ID不能为空', trigger: 'blur' }],
  douYinId: [{ required: true, message: '抖音ID不能为空', trigger: 'blur' }],
  camera: [{ required: true, message: '相机不能为空', trigger: 'blur' }],
  lightingEquipment: [{ required: true, message: '灯光设备不能为空', trigger: 'blur' }],
  zoomLens: [{ required: true, message: '变焦镜头不能为空', trigger: 'blur' }],
  fixedFocalLengthLens: [{ required: true, message: '定焦镜头不能为空', trigger: 'blur' }]
})
const handleUpdate = async () => {
  if (!techRef) return
  const valid = await techRef.value.validate()
  if (!valid) return
  formLoading.value = true
  try {
    const data = formData.value
    await UserApi.updateUserTechInfo({ ...data, id: userId })
    message.success('更新成功')
    emit('success')
    dialogVisible.value = false
  } finally {
    formLoading.value = false
  }
}

const emit = defineEmits(['success'])

/** 打开弹窗 */
const open = async (_: number) => {
  dialogVisible.value = true
  dialogTitle.value = '技术信息'
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗
</script>

<style scoped></style>
