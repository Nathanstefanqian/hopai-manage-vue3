<template>
  <el-dialog v-model="dialogVisible" title="写真" width="1000" :before-close="handleClose">
    <template #header>
      <span>{{ title }}</span>
    </template>
    <div class="photo-layout" v-loading="photoLoading">
      <div class="photo-layout-card" v-for="(item, index) in photoList" :key="index">
        <el-image
          class="h-60 w-40 rounded-lg"
          fit="cover"
          :src="item.url"
          :preview-src-list="previewPhotoList"
          :initial-index="index"
        />
        <div
          class="photo-layout-card-image-delete"
          v-if="deleteVisible"
          @click="handleDeletePhoto(item.id)"
        >
          <el-icon><Delete class="c-#ba2636" /></el-icon>
        </div>
        <div
          class="photo-layout-card-image-setting"
          v-if="settingVisible"
          @click="handleSettingCover(item.id)"
        >
          <el-icon><Setting class="c-#07bd2f" /></el-icon>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="photo-footer">
        <div class="photo-footer-pagination">
          <el-pagination
            @size-change="getPhotoData"
            @current-change="getPhotoData"
            v-model:current-page="paramsPhoto.pageNo"
            v-model:page-size="paramsPhoto.pageSize"
            layout="total, prev, pager, next"
            :total="photoTotal"
          />
        </div>
        <div class="photo-footer-btn">
          <el-button text @click="settingVisible = !settingVisible">
            {{ settingVisible ? '完成' : '设置封面' }}</el-button
          >
          <el-button text @click="handleFileUpload">添加</el-button>
          <el-button type="primary" text @click="deleteVisible = !deleteVisible">
            {{ deleteVisible ? '完成' : '删除' }}
          </el-button>
          <input
            type="file"
            multiple
            ref="fileInput"
            @change="handleFilesChange"
            style="display: none"
          />
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { useUpload } from '@/hooks/web/useSts'
import { makeUUID } from '@/utils/tool'
const { getStsToken, put, signatrueUrl } = useUpload('user-portrait')
import * as AlbumApi from '@/api/member/album'
const props = defineProps<{ dialogVisible: boolean; albumId: number; title: string }>()
const emit = defineEmits(['update:dialogVisible', 'success'])
const message = useMessage()
const route = useRoute()
const userId = route.params.id

const photoList = ref([])
const previewPhotoList = ref([])
const photoTotal = ref(0)
const photoLoading = ref(false)
const dialogVisible = ref(props.dialogVisible)
const deleteVisible = ref(false)
const settingVisible = ref(false)

const paramsPhoto = ref({
  pageNo: 1,
  pageSize: 4,
  albumId: props.albumId
})

// 监听每次的打开事件
watch(
  () => props.dialogVisible,
  async (newVal) => {
    dialogVisible.value = newVal
    if (newVal) {
      reset()
      await getPhotoData()
    }
  }
)

watch(
  () => props.albumId,
  (newVal) => {
    paramsPhoto.value.albumId = newVal
  }
)

watch(dialogVisible, (newVal) => {
  emit('update:dialogVisible', newVal)
})

const handleClose = () => (dialogVisible.value = false)
const reset = () => {
  deleteVisible.value = false
  settingVisible.value = false
}

const fileInput = ref<HTMLInputElement | null>(null)
const handleFileUpload = () => {
  fileInput.value?.click()
}
const handleFilesChange = async (event: Event) => {
  const selectedFile = (event.target as HTMLInputElement).files
  if (!selectedFile) return
  const fileArray = Array.from(selectedFile)
  const fileUrl = ref([])
  for (const file of fileArray) {
    const uuid = makeUUID()
    const name = `${userId}/${uuid}.jpg`
    await put(name, file)
    let url = await signatrueUrl(name)
    if (url) {
      let index = url.indexOf('?')
      url = url.substring(0, index)
      fileUrl.value.push(url)
    }
  }
  await AlbumApi.createPhoto({
    albumId: props.albumId,
    urlList: fileUrl.value
  })
  message.success('上传成功')
  await getPhotoData()
}

const handleSettingCover = async (id: number) => {
  await AlbumApi.updatePhotoCover({ id: props.albumId, coverPhotoId: id })
  emit('success')
  settingVisible.value = false
  message.success('设置成功')
}

const handleDeletePhoto = async (id: number) => {
  await AlbumApi.deletePhoto(id)
  message.success('删除成功')
  await getPhotoData()
}

const getPhotoData = async () => {
  photoLoading.value = true
  const res = await AlbumApi.getPhotoPage(paramsPhoto.value)
  photoList.value = res.list
  previewPhotoList.value = photoList.value.map((item) => item.url)
  photoTotal.value = res.total
  photoLoading.value = false
}

onMounted(() => {
  getPhotoData()
  getStsToken()
})
</script>

<style lang="scss" scoped>
@import url('@/styles/animation.scss');

.photo-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &-card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;

    &-active {
      animation: shake 1.5s infinite;
    }

    &-image-delete {
      position: absolute;
      top: -14px;
      left: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
      background-color: #fafafa;
      border-radius: 50%;
    }

    &-image-setting {
      position: absolute;
      top: -14px;
      left: 184px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
      background-color: #fafafa;
      border-radius: 50%;
    }
  }
}

.photo-footer-layout {
  display: flex;
}

.photo-footer {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;

  &-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &-btn {
    margin-left: auto;
  }
}
</style>
