<!-- <template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="订单id" prop="orderId">
        <el-input v-model="formData.orderId" placeholder="请输入订单id" />
      </el-form-item>
      <el-form-item label="订单总金额" prop="orderAmt">
        <el-input v-model="formData.orderAmt" placeholder="请输入订单总金额" />
      </el-form-item>
      <el-form-item label="退款金额" prop="refundAmt">
        <el-input v-model="formData.refundAmt" placeholder="请输入退款金额" />
      </el-form-item>
      <el-form-item label="退款状态" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio label="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="退款原因" prop="cancellationReason">
        <el-input v-model="formData.cancellationReason" placeholder="请输入退款原因" />
      </el-form-item>
      <el-form-item label="支付退款单id" prop="payRefundId">
        <el-input v-model="formData.payRefundId" placeholder="请输入支付退款单id" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as RefundApi from '@/api/order/refund'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  orderId: undefined,
  orderAmt: undefined,
  refundAmt: undefined,
  status: undefined,
  cancellationReason: undefined,
  payRefundId: undefined
})
const formRules = reactive({
  orderId: [{ required: true, message: '订单id不能为空', trigger: 'blur' }],
  orderAmt: [{ required: true, message: '订单总金额不能为空', trigger: 'blur' }],
  refundAmt: [{ required: true, message: '退款金额不能为空', trigger: 'blur' }],
  status: [{ required: true, message: '退款状态不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await RefundApi.getRefund(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as RefundApi.RefundVO
    if (formType.value === 'create') {
      await RefundApi.createRefund(data)
      message.success(t('common.createSuccess'))
    } else {
      await RefundApi.updateRefund(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    orderId: undefined,
    orderAmt: undefined,
    refundAmt: undefined,
    status: undefined,
    cancellationReason: undefined,
    payRefundId: undefined
  }
  formRef.value?.resetFields()
}
</script> -->
<template>
  <div> 123</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
