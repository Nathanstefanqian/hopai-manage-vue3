<template>
  <el-form
    v-if="!isDetail"
    ref="ServiceInfoRef"
    :model="formData"
    :rules="rules"
    label-width="120px"
  >
    <el-form-item label="服务说明" prop="service">
      <Editor v-model:modelValue="formData.service" />
    </el-form-item>
  </el-form>
  <!-- 情况二：详情 -->
  <Descriptions
    v-if="isDetail"
    :data="formData"
    :schema="allSchemas.detailSchema"
    class="descriptionFormDescriptions"
  >
    <!-- 展示 HTML 内容 -->
    <template #service="{ row }">
      <div v-dompurify-html="row.service" style="width: 600px"></div>
    </template>
  </Descriptions>
</template>
<script setup lang="ts">
import { propTypes } from '@/utils/propTypes'
import { PropType } from 'vue'
import { copyValueToTarget } from '@/utils'
import { serviceSchema } from './spu.data'
import type { Spu } from '@/api/mall/product/spu'
import { Editor } from '@/components/Editor'
const message = useMessage() // 消息弹窗

defineOptions({ name: 'ServiceInfoForm' })
const { allSchemas } = useCrudSchemas(serviceSchema)

const props = defineProps({
  propFormData: {
    type: Object as PropType<Spu>,
    default: () => {}
  },
  activeName: propTypes.string.def(''),
  isDetail: propTypes.bool.def(false) // 是否作为详情组件
})
const ServiceInfoRef = ref() // 表单Ref
// 表单规则
const rules = reactive({
  service: [required]
})
const formData = ref<Spu>({
  service: '' // 商品详情
})

/**
 * 富文本编辑器如果输入过再清空会有残留，需再重置一次
 */
watch(
  () => formData.value.service,
  (newValue) => {
    if ('<p><br></p>' === newValue) {
      formData.value.service = ''
    }
  },
  {
    deep: true,
    immediate: true
  }
)

/**
 * 将传进来的值赋值给formData
 */
watch(
  () => props.propFormData,
  (data) => {
    if (!data) return
    // fix：三个表单组件监听赋值必须使用 copyValueToTarget 使用 formData.value = data 会监听非常多次
    copyValueToTarget(formData.value, data)
  },
  {
    // fix: 去掉深度监听只有对象引用发生改变的时候才执行,解决改一动多的问题
    immediate: true
  }
)

/**
 * 表单校验
 */
const emit = defineEmits(['update:activeName'])
const validate = async () => {
  // 校验表单
  if (!ServiceInfoRef) return
  return await unref(ServiceInfoRef).validate((valid) => {
    if (!valid) {
      message.warning('商品详情为完善!!')
      emit('update:activeName', 'service')
      // 目的截断之后的校验
      throw new Error('商品详情为完善!!')
    } else {
      // 校验通过更新数据
      Object.assign(props.propFormData, formData.value)
    }
  })
}
defineExpose({ validate })
</script>
