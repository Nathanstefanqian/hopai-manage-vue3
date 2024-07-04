<template>
  <div class="album">
    <div :class="albumLayoutClass">
      <el-scrollbar>
        <div class="album-layout-scrollbar">
          <div
            class="album-layout-card"
            v-for="(item, index) in albumList"
            :key="index"
            @click="photoRef ? null : handleClickAlbum(item.id, item.title)"
          >
            <div class="album-layout-card-image">
              <el-image class="h-60 w-40 rounded-lg" fit="cover" :src="item.coverPhotoIdUrl" />
              <div
                class="album-layout-card-image-delete"
                v-if="photoRef"
                @click="handleDeleteAlbum(item.id)"
              >
                <el-icon><Delete class="c-#ba2636" /></el-icon>
              </div>
            </div>
            <div class="album-layout-card-title">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
    {{ dialogVisible }}
    {{ albumId }}
    <div class="album-footer">
      <el-pagination
        @size-change="getData"
        @current-change="getData"
        v-model:current-page="paramsAlbum.pageNo"
        v-model:page-size="paramsAlbum.pageSize"
        layout="total, prev, pager, next"
        :total="total"
      />
    </div>
  </div>
  <PhotoDialog
    v-model:dialogVisible="dialogVisible"
    :albumId="albumId"
    :title="albumTitle"
    @success="updateFlagPhoto = !updateFlagPhoto"
  />
</template>
<script setup lang="ts">
import * as AlbumApi from '@/api/member/album'
import * as UserApi from '@/api/member/user'
import PhotoDialog from '../components/PhotoDialog.vue'
const message = useMessage() // 消息弹窗

const props = defineProps<{ user: UserApi.UserVO; photoRef: boolean; updateFlag: boolean }>()
const dialogVisible = ref(false)
const total = ref(0)
const route = useRoute()
const userId = route.params.id
const albumId = ref(1)
const albumTitle = ref('')
const updateFlagPhoto = ref(false)

const paramsAlbum = reactive({
  pageNo: 1,
  pageSize: 7,
  userId: userId
})

watch(
  () => props.updateFlag,
  () => getData()
)
watch(updateFlagPhoto, () => {
  getData()
})

const albumList = ref([])

const handleClickAlbum = (id: number, title: string) => {
  albumId.value = id
  albumTitle.value = title
  setTimeout(() => {
    dialogVisible.value = true
  }, 200)
}
const handleDeleteAlbum = async (id: number) => {
  ElMessageBox.confirm('确认删除吗?', '警告').then(async () => {
    await AlbumApi.deleteAlbum(id)
    message.success('删除成功')
    await getData()
  })
}

const albumLayoutClass = computed(() => ({
  'album-layout': true,
  'space-between': albumList.value.length > 4
}))

const getData = async () => {
  const res = await AlbumApi.getAlbumPage(paramsAlbum)
  albumList.value = res.list
  albumList.value.map(async (item) => {
    if (item.coverPhotoId) {
      const photo = await AlbumApi.getPhotoDetail(item.coverPhotoId)
      return (item.coverPhotoIdUrl = photo.url)
    }
  })
  total.value = res.total
}

onMounted(() => getData())
</script>
<style lang="scss" scoped>
@import url('@/styles/animation.scss');

.album {
  &-layout {
    display: flex;
    flex-wrap: wrap;

    &-scrollbar {
      display: flex;
    }

    &.space-between {
      justify-content: space-between;
    }

    &-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      border-radius: 10px;

      &-image {
        position: relative;

        &-delete {
          position: absolute;
          top: -11px;
          left: -11px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          background-color: #fafafa;
          border-radius: 50%;
        }
      }

      &-title {
        margin-top: 10px;
      }
    }

    &-card-active {
      animation: shake 1.5s infinite;
    }
  }

  &-footer {
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
  }
}
</style>
