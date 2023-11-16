<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="图片URL" prop="imageUrl">
        <el-input v-model="formData.imageUrl" placeholder="请输入图片URL" class="mb-20px" />
        <el-upload
          class="upload-demo"
          v-model="formData.imageUrl"
          :on-success="handleSuccess"
          :before-upload="customUpload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
          :limit="3"
          list-type="picture-card"
        >
          <i class="el-icon-plus"></i>
          <div class="el-upload__text">Upload</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入文本"
          v-model="formData.description"
        />
      </el-form-item>
      <el-form-item label="活动链接URL" prop="linkUrl">
        <el-input v-model="formData.linkUrl" placeholder="请输入活动链接URL" />
      </el-form-item>
      <el-form-item label="显示顺序" prop="sort">
        <el-input v-model="formData.sort" placeholder="请输入显示顺序" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as CarouselApi from '@/api/product/carousel'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  title: undefined,
  imageUrl: undefined,
  description: undefined,
  linkUrl: undefined,
  sort: undefined
})
const formRules = reactive({
  title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
  imageUrl: [{ required: true, message: '图片URL不能为空', trigger: 'blur' }],
  sort: [{ required: true, message: '显示顺序不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await CarouselApi.getCarousel(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as CarouselApi.CarouselVO
    if (formType.value === 'create') {
      await CarouselApi.createCarousel(data)
      message.success(t('common.createSuccess'))
    } else {
      await CarouselApi.updateCarousel(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    title: undefined,
    imageUrl: undefined,
    description: undefined,
    linkUrl: undefined,
    sort: undefined
  }
  formRef.value?.resetFields()
}

const fileList = ref([])
const uploadUrl = 'https://mp.api.hopai.cn/admin-api/system/user/profile/update-avatar'
const headers = {
  Authorization: '6541ab5bdf3f4a8fa431feff9b17e142',
  'tenant-id': '1'
}
const uploadData = {
  key: 'value'
}

const customUpload = async ({ file }) => {
  // 调用上传接口函数，传入文件对象 file
  const response = await CarouselApi.uploadCarousel(file)
  console.log(response)
  // 处理上传成功的逻辑
  // if (response && response.success) {
  //   const uploadedFile = response.data
  //   const fileInfo = {
  //     name: uploadedFile.name,
  //     url: uploadedFile.url,
  //     size: uploadedFile.size
  //     // 其他字段
  //   }
  //   fileList.value.push(fileInfo)
}

const handleSuccess = (response, file, fileList) => {
  console.log(response)
}

const handlePreview = async (file) => {
  const res = await CarouselApi.uploadCarousel(file.url)
  console.log('打印', res)
  previewImageUrl.value = file.url
  previewVisible.value = true
}

const handleRemove = (file, fileList) => {
  console.log(file)
}
</script>
