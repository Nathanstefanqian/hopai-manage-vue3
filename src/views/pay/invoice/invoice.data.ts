import { reactive } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { required } from '@/utils/formRules'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { DICT_TYPE } from '@/utils/dict'

const { t } = useI18n()

// 表单校验
export const rules = reactive({
  title: [required],
  amount: [required],
  status: [required],
})

// CrudSchema 的类型定义
const crudSchemas = reactive<CrudSchema[]>([
  {
    label: t('common.index'),
    field: 'id',
    type: 'index',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  },
  {
    label: '发票编号',
    field: 'invoiceNo',
    search: {
      show: true
    }
  },
  {
    label: '发票抬头',
    field: 'title'
  },
  {
    label: '开具金额',
    field: 'amount',
    form: {
      component: 'InputNumber'
    }
  },
  {
    label: '税额',
    field: 'taxAmount',
    form: {
      component: 'InputNumber'
    }
  },
  {
    label: '价税合计',
    field: 'totalAmount',
    form: {
      component: 'InputNumber'
    }
  },
  {
    label: '发票状态',
    field: 'status',
    dictType: DICT_TYPE.COMMON_STATUS,
    search: {
      show: true
    }
  },
  {
    label: '创建时间',
    field: 'createTime',
    form: {
      show: false
    },
    search: {
      show: true,
      component: 'DatePicker',
      componentProps: {
        type: 'daterange',
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
        defaultTime: [new Date('2000-01-01 00:00:00'), new Date('2000-01-01 23:59:59')]
      }
    }
  },
  {
    label: '操作',
    field: 'action',
    width: '300px',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  }
])

export const { allSchemas } = useCrudSchemas(crudSchemas)