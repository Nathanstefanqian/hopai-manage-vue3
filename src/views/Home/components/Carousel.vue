<template>
  <div class="carousel" v-if="list">
    <div class="carousel-arrow">
      <div class="arrow" @click="handleClick(-1)">
        <img src="/arrow-left.svg" />
      </div>
    </div>
    <div class="carousel-inner">
      <div class="carousel-inner-image mt-5 h-60 w-60 rounded-lg">
        <el-image
          :src="list[currentIndex].picUrl"
          fit="cover"
          class="img-zoom h-60 w-60 rounded-lg"
        />
      </div>
      <div class="desc">
        <span class="font-bold">{{ list[currentIndex].name }}</span>
        <span class="mt-2 font-bold c-#ba2636"
          >￥{{ list[currentIndex].marketPrice / 100 }}.00</span
        >
      </div>
    </div>
    <div class="carousel-arrow">
      <div class="arrow" @click="handleClick(1)">
        <img src="/arrow-right.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getSpuPage } from '@/api/mall/product/spu'
const currentIndex = ref(0)
const list = ref<any>(null)

const handleClick = (id: any) => {
  currentIndex.value += id
  if (currentIndex.value == -1) currentIndex.value = list.value.length - 1
  else if (currentIndex.value == list.value.length) currentIndex.value = 0
}

onMounted(async () => {
  const res = await getSpuPage({ pageNo: 1, pageSize: 30 })
  list.value = res.list
})
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  width: 100%;
  justify-content: space-between;

  &-arrow {
    display: flex;
    width: 40px;
    height: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .arrow {
      display: flex;
      width: 35px;
      height: 35px;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      background-color: #f4f7fc;
      border-radius: 50%;
    }
  }

  &-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 350px;
    flex-direction: column;

    &-image {
      overflow: hidden;
      cursor: pointer;
    }

    .desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
  }

  .img-zoom {
    transition: transform 0.6s;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
