<template>
  <el-button @click="openRefundDialog" :disabled="props.order.orderStatus !== 20">
    {{ getRefundButtonText }}
  </el-button>
  <el-dialog
    title="退款申请"
    v-model="refundDialogVisible"
    :close-on-click-modal="false"
    width="500px"
  >
    <el-form ref="formRef" :model="form" :rules="formRules" label-width="100px">
      <el-form-item label="订单编号" prop="id">
        <el-input v-model="form.id" disabled />
      </el-form-item>
      <el-form-item label="退款金额" prop="refundAmt">
        <el-input-number
          v-model="form.refundAmt"
          :min="0"
          :precision="2"
          :step="0.01"
          style="width: 100%"
          :max="form.refundAmt"
        />
      </el-form-item>
      <el-form-item label="退款备注" prop="remark">
        <el-input v-model="form.remark" type="textarea" placeholder="请输入退款备注" :rows="3" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="refundDialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleSubmit">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { OrderVO } from '@/api/pay/order'
import { ElMessage } from 'element-plus'
import * as RefundApi from '@/api/pay/refund'

// 退款状态文案
const REFUND_STATUS_TEXT = {
  20: '处理退款',
  30: '已退款'
}

const props = defineProps<{ order: OrderVO }>()

const emit = defineEmits<{
  success: []
}>()

const refundDialogVisible = ref(false)
const formRef = ref()

const form = ref({
  id: props.order?.id,
  refundAmt: (props.order?.orderAmt || 0) / 100,
  remark: ''
})

const formRules = {
  remark: [{ required: true, message: '请输入退款备注', trigger: 'blur' }]
}

const getRefundButtonText = computed(() => {
  return REFUND_STATUS_TEXT[props.order.orderStatus] || '已退款'
})

const openRefundDialog = () => {
  form.value = {
    id: props.order?.id,
    refundAmt: (props.order?.orderAmt || 0) / 100,
    remark: ''
  }
  refundDialogVisible.value = true
}

const handleSubmit = async () => {
  try {
    if (!formRef.value) return
    await formRef.value.validate()
    await RefundApi.confirmRefund({
      id: form.value.id,
      refundAmt: form.value.refundAmt * 100,
      remark: form.value.remark
    })
    ElMessage.success('退款确认成功')
    refundDialogVisible.value = false
    emit('success')
  } catch (error) {
    console.error('退款确认失败:', error)
  }
}
</script>
