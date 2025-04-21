<template>
  <Dialog :title="t('action.detail')" v-model="dialogVisible">
    <Descriptions :schema="allSchemas.detailSchema" :data="detailData">
      <template #invoiceHeaderTitle="data">
        {{ data.row.title }}
      </template>
      <template #status="{ row }">
        <DictTag :type="DICT_TYPE.COMMON_STATUS" :value="row.status" />
      </template>
    </Descriptions>
  </Dialog>
</template>
<script lang="ts" setup>
import { useI18n } from '@/hooks/web/useI18n'
import { allSchemas } from './invoice.data'
import * as InvoiceApi from '@/api/pay/invoice'

defineOptions({ name: 'PayInvoiceDetail' })

const { t } = useI18n() // 国际化

/** 弹窗的控制 */
const dialogVisible = ref(false) // 是否显示弹窗
const detailData = ref() // 详情数据

/** 打开弹窗 */
const open = async (id: number) => {
  dialogVisible.value = true
  // 设置数据
  const data = await InvoiceApi.getInvoice(id)
  detailData.value = data
}

/** 打开弹窗 */
defineExpose({ open })
</script>
