<template>
  <!-- 情况一：添加/修改 -->
  <el-form
    v-if="!isDetail"
    ref="descriptionFormRef"
    :model="formData"
    :rules="rules"
    label-width="120px"
  >
    <UploadImgs v-model:modelValue="formData.description" />
  </el-form>
  <!-- 情况二：详情 -->

  <div v-if="isDetail">
    <el-image
      v-for="(item, index) in formData.description"
      :key="index"
      :src="item.url"
      class="mr-10px h-60px w-60px"
      @click="imagePreview(item.url)"
    />
  </div>
</template>
<script lang="ts" setup>
import { isArray } from '@/utils/is'
import { createImageViewer } from '@/components/ImageViewer'
import type { Spu } from '@/api/mall/product/spu'
import { PropType } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { copyValueToTarget } from '@/utils'
import { descriptionSchema } from './spu.data'
defineOptions({ name: 'DescriptionForm' })

const message = useMessage() // 消息弹窗
const { allSchemas } = useCrudSchemas(descriptionSchema)
const props = defineProps({
  propFormData: {
    type: Object as PropType<Spu>,
    default: () => {}
  },
  activeName: propTypes.string.def(''),
  isDetail: propTypes.bool.def(false) // 是否作为详情组件
})
const descriptionFormRef = ref() // 表单Ref
const formData = ref<Spu>({
  description: []
})
// 表单规则
const rules = reactive({
  description: [required]
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
    if (data['description'].length) {
      formData.value.description = data.description.map((item) => {
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
  if (!descriptionFormRef) return
  return await unref(descriptionFormRef).validate((valid) => {
    if (!valid) {
      message.warning('商品详情为完善!!')
      emit('update:activeName', 'description')
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
