import request from '@/config/axios'

/** 发票分页查询参数 */
export interface InvoicePageReqVO extends PageParam {
  invoiceNo?: string
  title?: string
  status?: number
  createTime?: Date[]
}

/** 发票 VO */
export interface InvoiceVO {
  id: number
  invoiceId: number
  userId: number
  invoiceNo: string
  title: string
  amount: number
  taxAmount: number
  totalAmount: number
  status: number
  invoiceType: number
  buyerName: string
  buyerTaxNo: string
  buyerAddress: string
  buyerTelephone: string
  buyerBankName: string
  buyerBankAccount: string
  remark: string
  createTime: Date
}

/** 获取发票分页列表 */
export const getInvoicePage = async (params: InvoicePageReqVO) => {
  return await request.get({ url: '/member/user-invoice/page', params })
}

/** 根据编号获取发票详情 */
export const getInvoice = async (id: number) => {
  return await request.get({ url: `/member/user-invoice/get?id=${id}` })
}

/** 删除发票 */
export const deleteInvoice = async (id: number) => {
  return await request.delete({ url: `/pay/invoice/delete?id=${id}` })
}

export const updateInvoice = async (data: InvoiceVO) => {
  return await request.put({ url: `/member/user-invoice/update`, data })
}
