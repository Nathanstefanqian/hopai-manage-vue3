import request from '@/config/axios'

/** 分账分页查询参数 */
export interface AllocationPageReqVO extends PageParam {
  orderId?: string
  memberPhone?: string
  photographerPhone?: string
  status?: number
}

/** 分账 VO */
export interface AllocationVO {
  no: string
  orderId: string
  pingOrderId: string
  actualAmt: number
  status: number
  allocationAmt: number
  orderCreateTime: Date
  allocationCreateTime: Date
  bankName: string
  bankCardNum: string
  mnickname: string
  pnickname: string
}

/** 获取分账分页列表 */
export const getAllocationPage = async (data: AllocationPageReqVO) => {
  return await request.post({ url: '/pay/allocation/page', data })
}
