<template>
  <el-dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="createAlbumFormRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="作品集名称" prop="title">
        <el-input v-model="formData.title" placeholder="请输入作品集名称" />
      </el-form-item>
      <el-form-item label="作品集" prop="photoList">
        <el-scrollbar>
          <div class="photo-scrollbar">
            <UploadFiles v-model="formData.photoList" :userId="userId" />
            <div
              class="photo-scrollbar-item"
              v-for="(item, index) in formData.photoList"
              :key="index"
            >
              <el-image class="mr-10 h-240px w-160px rounded-lg" fit="cover" :src="item" />
              <div class="photo-delete" @click="handleDeletePhoto(index)">
                <el-icon><Delete class="c-#ba2636" /></el-icon>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" text @click="submitForm">提交</el-button>
      <el-button text @click="dialogVisible = false">取消</el-button>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import UploadFiles from './components/UploadFiles.vue'
import * as AlbumApi from '@/api/member/album'

const message = useMessage() // 消息弹窗
const route = useRoute()
const userId = route.params.id
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formData = reactive({
  title: '',
  photoList: []
})
const formRules = reactive({
  title: [{ required: true, message: '作品集名称不能为空', trigger: 'blur' }],
  photoList: [{ required: true, message: '作品集不能为空', trigger: 'blur' }]
})
const createAlbumFormRef = ref() // 表单 Ref

const handleDeletePhoto = (index: number) => {
  formData.photoList.splice(index, 1)
}

/** 打开弹窗 */
const open = async (id: number) => {
  dialogVisible.value = true
  dialogTitle.value = '新增作品集'
  resetForm()
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!createAlbumFormRef) return
  const valid = await createAlbumFormRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    await AlbumApi.createAlbum({
      userId,
      title: formData.title,
      sortOrder: 1,
      urlList: formData.photoList
    })
    message.success('创建成功')
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.title = ''
  formData.photoList = []
}
</script>
<style lang="scss" scoped>
.photo-pagination-layout {
  display: flex;
  width: 100%;
  justify-content: center;
}

.photo-list-scrollbar {
  display: flex;
  width: 100%;
}

.photo-scrollbar {
  display: flex;
  padding-top: 30px;
}

.photo-scrollbar-item {
  position: relative;
  flex-shrink: 0;
  display: flex;
}

.photo-delete {
  position: absolute;
  top: -11px;
  left: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: #fafafa;
  border-radius: 50%;
}
</style>
