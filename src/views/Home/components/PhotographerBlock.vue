<template>
  <div class="photographer">
    <div class="photographer-box" v-for="(item, index) in boxConfig" :key="index">
      <div class="photographer-box-info">
        <div class="desc">
          <span class="title">{{ item.name }}</span>
          <CountTo class="text-30px c-#ba2636" :start-val="0" :end-val="29" :duration="2600" />
        </div>
        <div class="icon">
          <el-image :src="item.url" class="w-20" />
        </div>
      </div>
      <div class="photographer-box-change mt-5">
        <div class="inc" v-if="index % 2">
          <el-image src="/increase.svg" />
          <span class="ml-2 c-#00B692">8.5%</span>
          <span class="ml-4 c-#606060">Up from yesterday</span>
        </div>
        <div class="dec" v-else>
          <el-image src="/decline.svg" />
          <span class="ml-2 c-#F93C65">8.5%</span>
          <span class="ml-4 c-#606060">Down from yesterday</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const boxConfig = [
  {
    name: '总摄影师',
    color: 'c-#ba2636',
    url: '/member-red.svg'
  },
  {
    name: '可摄影师',
    color: 'c-#00b69b',
    url: '/member-green.svg'
  },
  {
    name: '待审核摄影师',
    color: 'c-#5088ff',
    url: '/member-blue.svg'
  },
  {
    name: '黑名单',
    color: 'c-#848484',
    url: '/member-grey.svg'
  }
]
</script>

<style lang="scss" scoped>
.photographer {
  display: flex;
  justify-content: space-between;
  min-width: 1250px;

  &-box {
    width: 22.5%;
    height: 180px;
    padding: 15px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    transition: all ease 0.5s;

    &:hover {
      box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);
      transition: all ease 0.5s;
    }

    &-info {
      display: flex;
      justify-content: space-between;

      .desc {
        display: flex;
        flex-direction: column;

        .title {
          margin-bottom: 10px;
          font-size: 18px;
          color: #202224;
        }
      }
    }

    &-change {
      display: flex;
      align-items: center;
    }
  }
}
</style>
