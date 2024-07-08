<template>
  <div>
    <el-container class="dashboard">
      <header class="dashboard-header">Dashboard</header>
      <PhotographerBlock />
      <div class="margin"></div>
      <OrderBlock />
      <div class="margin"></div>
      <PhotographerPicChart />
      <div class="margin"></div>
      <PayChart />
      <div class="margin"></div>
      <CardBlock />
    </el-container>
  </div>
</template>

<script setup lang="ts">
import PhotographerBlock from './components/PhotographerBlock.vue'
import OrderBlock from './components/OrderBlock.vue'
import CardBlock from './components/CardBlock.vue'
import PhotographerPicChart from './components/PhotographerPicChart.vue'
import PayChart from './components/PayChart.vue'
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;

  &-header {
    margin-bottom: 20px;
    margin-left: 10px;
    font-size: 24px;
    font-weight: bold;
  }

  .margin {
    margin: 20px 0;
  }
}
</style>
