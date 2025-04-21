<template>
  <el-card shadow="never">
    <template #header>
      <slot name="header"></slot>
    </template>
    <el-scrollbar height="600px">
      <div class="photo-grid">
        <template v-for="(photo, index) in currentPageData" :key="index">
          <div class="photo-item">
            <el-image
              :src="photo.picUrl + '/minipreview'"
              :preview-src-list="[photo.picUrl]"
              fit="contain"
            />
            <div class="photo-info">
              <span class="photo-name">{{ photo.picName }}</span>
              <span class="photo-id">ID: {{ photo.id }}</span>
            </div>
          </div>
        </template>
      </div>
    </el-scrollbar>
    <el-pagination
      v-model:current-page="currentPage"
      :page-size="pageSize"
      :total="photos.length"
      layout="prev, pager, next"
      @current-change="handlePageChange"
      style="margin-top: 20px"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { OrderVO } from '@/api/pay/order'
import { getOriginPhotos } from '@/api/pay/album'

const props = defineProps<{ order: OrderVO }>()
const photos = ref<any[]>([])
const currentPage = ref(1)
const pageSize = 30

const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return photos.value.slice(start, end)
})

const handlePageChange = (page: number) => {
  currentPage.value = page
}

const loadPhotos = async () => {
  try {
    const result = await getOriginPhotos(props.order.id)
    photos.value = result
  } catch (error) {
    console.error('Failed to load photos:', error)
  }
}

onMounted(() => {
  loadPhotos()
})
</script>

<style scoped>
.photo-grid {
  padding: 16px;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.photo-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-image {
  width: 100%;
  height: 200px;
  display: block;
}

.photo-info {
  padding: 8px;
  background: #f5f7fa;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
}

.photo-name,
.photo-id {
  color: #606266;
  max-width: 45%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
