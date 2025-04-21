<template>
  <el-dialog title="退款申请" v-model="dialogVisible" :close-on-click-modal="false" width="500px">
    <el-form :model="form" :rules="formRules" ref="formRef">
      <el-form-item label="订单编号" prop="orderId">
        <el-input v-model="form.orderId" disabled />
      </el-form-item>
      <el-form-item label="退款金额" prop="refundAmount">
        <el-input-number
          v-model="form.refundAmount"
          :min="0"
          :max="maxRefundAmount"
          :precision="2"
          :step="0.01"
          style="width: 100%"
        />
      </el-form-item>
      <el-form-item label="退款原因" prop="reason">
        <el-input v-model="form.reason" type="textarea" placeholder="请输入退款原因" :rows="3" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleSubmit">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import * as RefundApi from '@/api/order/refund'

const props = defineProps<{
  visible: boolean
  order: any
}>

const emit = defineEmits<{
  'update:visible': [value: boolean]
  success: []
}>()

const dialogVisible = computed({
  get: () => props.visible,
  set: (val) => emit('update:visible', val)
})

const maxRefundAmount = computed(() => {
  return props.order ? props.order.actualAmt / 100 : 0
})

const form = ref({
  orderId: props.order?.id || '',
  refundAmount: 0,
  reason: ''
})

const formRules = {
  refundAmount: [{ required: true, message: '请输入退款金额', trigger: 'blur' }],
  reason: [{ required: true, message: '请输入退款原因', trigger: 'blur' }]
}

const formRef = ref()

const handleSubmit = async () => {
  try {
    if (!formRef.value) return
    await formRef.value.validate()
    await RefundApi.refundOrder({
      ...form.value,
      refundAmount: form.value.refundAmount * 100
    })
    ElMessage.success('退款申请提交成功')
    dialogVisible.value = false
    emit('success')
  } catch (error) {
    console.error('退款申请失败:', error)
  }
}
</script>
