<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="客户ID" prop="memberId">
        <el-input v-model="formData.memberId" placeholder="请输入客户ID" />
      </el-form-item>
      <el-form-item label="客户名称" prop="memberName">
        <el-input v-model="formData.memberName" placeholder="请输入客户名称" />
      </el-form-item>
      <el-form-item label="客户电话" prop="memberPhone">
        <el-input v-model="formData.memberPhone" placeholder="请输入客户电话" />
      </el-form-item>
      <el-form-item label="商品ID" prop="spuId">
        <el-input v-model="formData.spuId" placeholder="请输入商品ID" />
      </el-form-item>
      <el-form-item label="商品分类" prop="spuCategoryId">
        <el-input v-model="formData.spuCategoryId" placeholder="请输入商品分类" />
      </el-form-item>
      <el-form-item label="商品描述" prop="spuDescribe">
        <el-input v-model="formData.spuDescribe" placeholder="请输入商品描述" />
      </el-form-item>
      <el-form-item label="商品子属性" prop="skuId">
        <el-input v-model="formData.skuId" placeholder="请输入商品子属性" />
      </el-form-item>
      <el-form-item label="精修商品数量" prop="photoNum">
        <el-input v-model="formData.photoNum" placeholder="请输入精修商品数量" />
      </el-form-item>
      <el-form-item label="摄影师ID" prop="photographerId">
        <el-input v-model="formData.photographerId" placeholder="请输入摄影师ID" />
      </el-form-item>
      <el-form-item label="摄影师名称" prop="photographerName">
        <el-input v-model="formData.photographerName" placeholder="请输入摄影师名称" />
      </el-form-item>
      <el-form-item label="摄影师电话" prop="photographerPhone">
        <el-input v-model="formData.photographerPhone" placeholder="请输入摄影师电话" />
      </el-form-item>
      <el-form-item label="预约开始时间" prop="appointmentStartTime">
        <el-date-picker
          v-model="formData.appointmentStartTime"
          type="date"
          value-format="x"
          placeholder="选择预约开始时间"
        />
      </el-form-item>
      <el-form-item label="预约结束时间" prop="appointmentEndTime">
        <el-date-picker
          v-model="formData.appointmentEndTime"
          type="date"
          value-format="x"
          placeholder="选择预约结束时间"
        />
      </el-form-item>
      <el-form-item label="订单状态" prop="orderStatus">
        <el-radio-group v-model="formData.orderStatus">
          <el-radio label="1">请选择字典生成</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="订单总金额" prop="orderAmt">
        <el-input v-model="formData.orderAmt" placeholder="请输入订单总金额" />
      </el-form-item>
      <el-form-item label="实际支付金额" prop="actualAmt">
        <el-input v-model="formData.actualAmt" placeholder="请输入实际支付金额" />
      </el-form-item>
      <el-form-item label="地址" prop="location">
        <el-input v-model="formData.location" placeholder="请输入地址" />
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="formData.remark" placeholder="请输入备注" />
      </el-form-item>
      <el-form-item label="下单时间" prop="orderTime">
        <el-date-picker
          v-model="formData.orderTime"
          type="date"
          value-format="x"
          placeholder="选择下单时间"
        />
      </el-form-item>
      <el-form-item label="订单过期时间" prop="expireTime">
        <el-date-picker
          v-model="formData.expireTime"
          type="date"
          value-format="x"
          placeholder="选择订单过期时间"
        />
      </el-form-item>
      <el-form-item label="用户客户端ip" prop="clientIp">
        <el-input v-model="formData.clientIp" placeholder="请输入用户客户端ip" />
      </el-form-item>
      <el-form-item label="第三方生成订单" prop="pingOrderId">
        <el-input v-model="formData.pingOrderId" placeholder="请输入第三方生成订单" />
      </el-form-item>
      <el-form-item label="与第三方支付数据认证唯一id" prop="no">
        <el-input v-model="formData.no" placeholder="请输入与第三方支付数据认证唯一id" />
      </el-form-item>
      <el-form-item label="支付成功时间" prop="successTime">
        <el-date-picker
          v-model="formData.successTime"
          type="date"
          value-format="x"
          placeholder="选择支付成功时间"
        />
      </el-form-item>
      <el-form-item label="退款总金额" prop="refundAmt">
        <el-input v-model="formData.refundAmt" placeholder="请输入退款总金额" />
      </el-form-item>
      <el-form-item label="退款原因" prop="cancellationReason">
        <el-input v-model="formData.cancellationReason" placeholder="请输入退款原因" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import * as OrderApi from '@/api/pay/order'

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  memberId: undefined,
  memberName: undefined,
  memberPhone: undefined,
  spuId: undefined,
  spuCategoryId: undefined,
  spuDescribe: undefined,
  skuId: undefined,
  photoNum: undefined,
  photographerId: undefined,
  photographerName: undefined,
  photographerPhone: undefined,
  appointmentStartTime: undefined,
  appointmentEndTime: undefined,
  orderStatus: undefined,
  orderAmt: undefined,
  actualAmt: undefined,
  location: undefined,
  remark: undefined,
  orderTime: undefined,
  expireTime: undefined,
  clientIp: undefined,
  pingOrderId: undefined,
  no: undefined,
  successTime: undefined,
  refundAmt: undefined,
  cancellationReason: undefined
})
const formRules = reactive({
  memberId: [{ required: true, message: '客户ID不能为空', trigger: 'blur' }],
  memberName: [{ required: true, message: '客户名称不能为空', trigger: 'blur' }],
  memberPhone: [{ required: true, message: '客户电话不能为空', trigger: 'blur' }],
  spuId: [{ required: true, message: '商品ID不能为空', trigger: 'blur' }],
  spuCategoryId: [{ required: true, message: '商品分类不能为空', trigger: 'blur' }],
  spuDescribe: [{ required: true, message: '商品描述不能为空', trigger: 'blur' }],
  skuId: [{ required: true, message: '商品子属性不能为空', trigger: 'blur' }],
  photoNum: [{ required: true, message: '精修商品数量不能为空', trigger: 'blur' }],
  photographerId: [{ required: true, message: '摄影师ID不能为空', trigger: 'blur' }],
  photographerName: [{ required: true, message: '摄影师名称不能为空', trigger: 'blur' }],
  photographerPhone: [{ required: true, message: '摄影师电话不能为空', trigger: 'blur' }],
  appointmentStartTime: [{ required: true, message: '预约开始时间不能为空', trigger: 'blur' }],
  appointmentEndTime: [{ required: true, message: '预约结束时间不能为空', trigger: 'blur' }],
  orderStatus: [{ required: true, message: '订单状态不能为空', trigger: 'blur' }],
  orderAmt: [{ required: true, message: '订单总金额不能为空', trigger: 'blur' }],
  location: [{ required: true, message: '地址不能为空', trigger: 'blur' }]
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
      formData.value = await OrderApi.getOrder(id)
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
    const data = formData.value as unknown as OrderApi.OrderVO
    if (formType.value === 'create') {
      await OrderApi.createOrder(data)
      message.success(t('common.createSuccess'))
    } else {
      await OrderApi.updateOrder(data)
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
    memberId: undefined,
    memberName: undefined,
    memberPhone: undefined,
    spuId: undefined,
    spuCategoryId: undefined,
    spuDescribe: undefined,
    skuId: undefined,
    photoNum: undefined,
    photographerId: undefined,
    photographerName: undefined,
    photographerPhone: undefined,
    appointmentStartTime: undefined,
    appointmentEndTime: undefined,
    orderStatus: undefined,
    orderAmt: undefined,
    actualAmt: undefined,
    location: undefined,
    remark: undefined,
    orderTime: undefined,
    expireTime: undefined,
    clientIp: undefined,
    pingOrderId: undefined,
    no: undefined,
    successTime: undefined,
    refundAmt: undefined,
    cancellationReason: undefined
  }
  formRef.value?.resetFields()
}
</script>
