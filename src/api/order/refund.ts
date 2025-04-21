import request from '@/config/axios'

/** 申请退款 */
export interface RefundReqVO {
  /** 订单编号 */
  orderId: string
  /** 退款金额，单位：分 */
  refundAmount: number
  /** 退款原因 */
  reason: string
}

/** 获取订单退款信息 */
export function getRefund(id: string) {
  return request.get('/order/refund/get?id=' + id)
}

/** 提交退款申请 */
export function refundOrder(data: RefundReqVO) {
  return request.post('/order/refund/apply', data)
}

export function getStatus(status) {
  if (status === 'processing') return '处理中'
  if (status === 'succeeded') return '已成功'
  if (status === 'failed') return '已失败'
  return '未知'
}
