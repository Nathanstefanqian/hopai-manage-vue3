<template>
  <div class="photographer">
    <div class="photographer-box" v-for="(item, index) in boxConfig" :key="index">
      <div class="photographer-box-info">
        <div class="desc">
          <span class="title">{{ item.name }}</span>
          <CountTo
            class="text-30px c-#ba2636"
            :start-val="0"
            :end-val="item.num"
            :duration="2600"
          />
        </div>
        <div class="icon">
          <el-image :src="item.url" class="w-20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const boxConfig = [
  {
    name: '总订单数',
    num: '129',
    url: '/order-red.svg'
  },
  {
    name: '进行中',
    num: '47',
    url: '/order-green.svg'
  },
  {
    name: '待支付',
    num: '58',
    url: '/order-blue.svg'
  },
  {
    name: '异常订单',
    num: '8',
    url: '/order-grey.svg'
  }
]
</script>

<style lang="scss" scoped>
.photographer {
  display: flex;
  justify-content: space-between;

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
  }
}
</style>
