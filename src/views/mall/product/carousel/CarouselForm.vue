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
        <UploadImg v-model="formData.imageUrl" height="80px" />
      </el-form-item>

      <el-form-item label="活动链接" prop="linkUrl">
        <el-input v-model="formData.linkUrl" placeholder="请输入活动链接URL" />
      </el-form-item>
      <el-form-item label="显示顺序" prop="sort">
        <el-input-number
          v-model="formData.sort"
          @blur="formRules.checkSort(formRules.sort)"
          :min="1"
          :max="5"
        />
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入文本"
          v-model="formData.description"
        />
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
import OSS from 'ali-oss'
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
  sort: 1
})
interface Props {
  sortList?: object
}
const props = defineProps<Props>()
const { sortList } = props
const validateSort = (rule, value, callback) => {
  if (props.sortList.includes(parseInt(value))) {
    callback(new Error('该次序已被其他图片占用'))
  } else {
    callback()
  }
}
const formRules = reactive({
  title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
  imageUrl: [{ required: true, message: '图片不能为空', trigger: 'blur' }],
  sort: [{ validator: validateSort, trigger: 'blur' }],
  linkUrl: [{ required: true, message: '外链URL不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

// 自定义校验函数

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
    sort: 1
  }
  formRef.value?.resetFields()
}

const fileList = ref([])

const handlePreview = async (file) => {
  console.log(file)
}

const handleRemove = (file, fileList) => {
  formData.value.imageUrl = ''
}

const beforeUpload = (file) => {
  console.log(file)
}

const handleUpload = async (option) => {
  var obj = option.file.name
  let res = await put(obj, option.file)
  console.log('上传成功', res)
  res = await signatrueUrl(obj)
  formData.value.imageUrl = res
  console.log('真实地址', res)
}

// oss配置
let client = new OSS({
  region: 'oss-cn-shanghai',
  accessKeyId: 'LTAI5tCXL14qmP6tcMwhz2ft',
  accessKeySecret: 'ZQsGHgjW0SFXR9ss6OqYrJVspjoDor',
  bucket: 'hopai-user-portrait'
})

const put = async (ObjName, fileUrl) => {
  try {
    let res = await client.put(ObjName, fileUrl)
    return res
  } catch (e) {
    console.log(e)
  }
}

// 获取真实的地址
const signatrueUrl = async (ObjName) => {
  try {
    let res = await client.signatureUrl(`${ObjName}`)
    return res
  } catch (e) {
    console.log(e)
  }
}
</script>
