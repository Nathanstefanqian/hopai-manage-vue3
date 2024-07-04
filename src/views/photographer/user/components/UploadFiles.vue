<template>
  <div>
    <div class="photo-add mb-10 mr-10 h-60 w-40 rounded-lg" @click="handleFileUpload">
      <el-icon><Plus /></el-icon>
    </div>
    <input type="file" multiple ref="fileInput" @change="handleFilesChange" style="display: none" />
  </div>
</template>
<script setup lang="ts">
import { useUpload } from '@/hooks/web/useSts'
import { makeUUID } from '@/utils/tool'
const { getStsToken, put, signatrueUrl } = useUpload('user-portrait')
const message = useMessage() // 消息弹窗

const props = defineProps<{ modelValue: Array<String>; userId: String | String[] }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: Array<String>): void }>()
const fileInput = ref<HTMLInputElement | null>(null)
const handleFileUpload = () => {
  fileInput.value?.click()
}
const handleFilesChange = async (event: Event) => {
  const selectedFile = (event.target as HTMLInputElement).files
  if (!selectedFile) return
  const fileArray = Array.from(selectedFile)
  const fileUrl = ref([] as Array<String>)
  for (const file of fileArray) {
    const uuid = makeUUID()
    const name = `${props.userId}/${uuid}.jpg`
    await put(name, file)
    let url = await signatrueUrl(name)
    let index = url.indexOf('?')
    url = url.substring(0, index)
    fileUrl.value.push(url)
  }
  message.success('上传成功')
  const updatedFileList = [...fileUrl.value, ...props.modelValue]
  emit('update:modelValue', updatedFileList)
}
onMounted(() => {
  getStsToken()
})
</script>
<style lang="scss" scoped>
.photo-add {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  border: 1px dotted #000;
}
</style>
