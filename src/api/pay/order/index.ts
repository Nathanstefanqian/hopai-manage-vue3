import request from '@/config/axios'

export interface OrderVO {
  id: number
  memberId: number
  memberName: string
  memberPhone: string
  spuId: number
  spuCategoryId: number
  spuDescribe: string
  skuId: number
  photoNum: number
  photographerId: number
  photographerName: string
  photographerPhone: string
  appointmentStartTime: Date
  appointmentEndTime: Date
  orderStatus: byte
  orderAmt: number
  actualAmt: number
  location: string
  remark: string
  orderTime: Date
  expireTime: Date
  clientIp: string
  pingOrderId: string
  no: string
  successTime: string
  refundAmt: number
  cancellationReason: string
}

// 查询用户订单列表
export const getOrderPage = async (params) => {
  return await request.get({ url: `/pay/order/page`, params })
}

// 查询用户订单详情
export const getOrder = async (id: string | string[]) => {
  return await request.get({ url: `/pay/order/get?id=` + id })
}

// 新增用户订单
export const createOrder = async (data: OrderVO) => {
  return await request.post({ url: `/pay/order/create`, data })
}

// 修改用户订单
export const updateOrder = async (data: OrderVO) => {
  return await request.put({ url: `/pay/order/update`, data })
}

// 删除用户订单
export const deleteOrder = async (id: number) => {
  return await request.delete({ url: `/pay/order/delete?id=` + id })
}

// 导出用户订单 Excel
export const exportOrder = async (params) => {
  return await request.download({ url: `/pay/order/export-excel`, params })
}
