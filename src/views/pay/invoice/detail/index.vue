<template>
  <div v-loading="loading" v-if="invoice">
    <el-row :gutter="10">
      <el-col class="detail-info-item">
        <el-card>
          <template #header>
            <div class="card-header">
              <CardTitle title="发票信息" />
            </div>
          </template>
          <el-descriptions :column="2">
            <el-descriptions-item label="发票编号">{{
              invoice.invoiceId || '无'
            }}</el-descriptions-item>
            <el-descriptions-item label="用户编号">{{
              invoice.userId || '无'
            }}</el-descriptions-item>
            <el-descriptions-item label="发票类型">{{
              invoice.invoiceType === 1
                ? '个人'
                : invoice.invoiceType === 2
                ? '企业'
                : '增值税专用发票'
            }}</el-descriptions-item>
            <el-descriptions-item label="发票抬头">{{
              invoice.invoiceTitle || '无'
            }}</el-descriptions-item>
            <el-descriptions-item label="纳税人识别号">{{
              invoice.taxNumber || '无'
            }}</el-descriptions-item>
            <el-descriptions-item label="发票总金额"
              >{{ (invoice.invoiceAmount / 100).toFixed(2) }} 元</el-descriptions-item
            >
            <el-descriptions-item label="发票状态">{{
              invoice.invoiceStatus === 0
                ? '开票中'
                : invoice.invoiceStatus === 1
                ? '已开票'
                : '已作废'
            }}</el-descriptions-item>
            <el-descriptions-item label="电子邮箱">{{
              invoice.email || '无'
            }}</el-descriptions-item>
            <el-descriptions-item label="地址">{{ invoice.address || '无' }}</el-descriptions-item>
            <el-descriptions-item label="电话">{{ invoice.mobile || '无' }}</el-descriptions-item>
            <el-descriptions-item label="开户行">{{
              invoice.bankName || '无'
            }}</el-descriptions-item>
            <el-descriptions-item label="开户行账号">{{
              invoice.bankAccountNo || '无'
            }}</el-descriptions-item>
            <el-descriptions-item label="备注">{{ invoice.remark || '无' }}</el-descriptions-item>
            <el-descriptions-item label="开票时间">{{
              invoice.invoiceTime || '无'
            }}</el-descriptions-item>
            <el-descriptions-item label="创建时间">{{
              invoice.createTime || '无'
            }}</el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
    <div class="mt-4 text-center">
      <el-button type="primary" @click="handleUpdateStatus(1)">已开票</el-button>
      <el-button type="danger" @click="handleUpdateStatus(2)">已作废</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as InvoiceApi from '@/api/pay/invoice'
import { InvoiceVO } from '@/api/pay/invoice'
import { CardTitle } from '@/components/Card/index'

defineOptions({ name: 'PayInvoiceDetail' })

const loading = ref(false)
const route = useRoute()
const id = route.params.id
const invoice = ref<any>()

const getData = async (id: string | string[]) => {
  loading.value = true
  try {
    invoice.value = await InvoiceApi.getInvoice(Number(id))
  } finally {
    loading.value = false
  }
}

const handleUpdateStatus = async (status: number) => {
  if (!invoice.value) return
  try {
    const tipText = status === 1 ? '确认已开票？' : '确认作废该发票？'
    await ElMessageBox.confirm(tipText, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    const { invoiceStatus, ...invoiceData } = invoice.value
    await InvoiceApi.updateInvoice({
      ...invoiceData,
      invoiceStatus: status
    })
    ElMessage.success('操作成功')
    await getData(id)
  } catch (err) {
    if (err !== 'cancel') {
      console.error(err)
      ElMessage.error('操作失败')
    }
  }
}

onMounted(async () => {
  await getData(id)
})
</script>

<style scoped lang="scss">
.detail-info-item {
  padding: 0 !important;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
