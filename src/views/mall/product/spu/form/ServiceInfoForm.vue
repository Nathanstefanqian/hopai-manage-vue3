<template>
  <el-form
    v-if="!isDetail"
    ref="ServiceInfoRef"
    :model="formData"
    :rules="rules"
    label-width="120px"
  >
    <UploadImgs v-model:modelValue="formData.service" />
  </el-form>
  <!-- 情况二：详情 -->
  <div v-if="isDetail">
    <el-image
      v-for="(item, index) in formData.service"
      :key="index"
      :src="item.url"
      class="mr-10px h-60px w-60px"
      @click="imagePreview(item.url)"
    />
  </div>
</template>
<script setup lang="ts">
import { propTypes } from '@/utils/propTypes'
import { PropType } from 'vue'
import { copyValueToTarget } from '@/utils'
import { serviceSchema } from './spu.data'
import type { Spu } from '@/api/mall/product/spu'
import { isArray } from '@/utils/is'
import { createImageViewer } from '@/components/ImageViewer'

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
  service: [] // 商品详情
})

const imagePreview = (args) => {
  const urlList = []
  if (isArray(args)) {
    args.forEach((item) => {
      urlList.push(item)
    })
  } else {
    urlList.push(args)
  }
  createImageViewer({
    urlList
  })
}
watch(
  () => props.propFormData,
  (data) => {
    if (!data) {
      return
    }
    copyValueToTarget(formData, data)
    if (data['service'].length) {
      formData.value.service = data.service.map((item) => {
        return {
          url: item
        }
      })
    }
  },
  {
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
      message.warning('服务说明为完善!!')
      emit('update:activeName', 'service')
      // 目的截断之后的校验
      throw new Error('服务说明为完善!!')
    } else {
      // 校验通过更新数据
      Object.assign(props.propFormData, formData.value)
    }
  })
}
defineExpose({ validate })
</script>
