import request from '@/config/axios'

export interface RefundVO {
  id: number
  orderId: number
  orderAmt: string
  refundAmt: string
  status: string
  cancellationReason: string
  payRefundId: number
}

// 查询售后维权详情
export const getRefund = async (id: number) => {
  return await request.get({ url: `/pay/refund/get?id=` + id })
}

// 新增售后维权
export const createRefund = async (data: RefundVO) => {
  return await request.post({ url: `/pay/refund/create`, data })
}

// 修改售后维权
export const updateRefund = async (data: RefundVO) => {
  return await request.put({ url: `/pay/refund/update`, data })
}

// 删除售后维权
export const deleteRefund = async (id: number) => {
  return await request.delete({ url: `/pay/refund/delete?id=` + id })
}

// 导出售后维权 Excel
export const exportRefund = async (params) => {
  return await request.download({ url: `/pay/refund/export-excel`, params })
}

// 退款分页
export const getRefundPage = async (data: any) => {
  return await request.post({ url: `/pay/refund/page`, data })
}

// 确认退款
export const confirmRefund = async (data: any) => {
  return await request.post({ url: '/pay/refund/confirmRefund', data })
}
