import { getSpuPage } from '@/api/mall/product/spu'

export const getStatus = (statusCode) => {
  switch (statusCode) {
    case 0:
      return '待支付'
    case 1:
      return '待确认'
    case 2:
      return '待拍摄'
    case 3:
      return '已拍摄'
    case 4:
      return '待选图'
    case 5:
      return '修图中'
    case 6:
      return '待交付'
    case 7:
      return '待评价'
    case 100:
      return '已完成'
    case 10:
      return '订单已取消'
    case 20:
      return '处理中'
    case 30:
      return '退款成功'
    default:
      return '未知状态'
  }
}

export const orderStatusDict = {
  0: '待支付',
  1: '待确认',
  2: '待拍摄',
  3: '已拍摄',
  4: '待选图',
  5: '修图中',
  6: '待交付',
  7: '待评价',
  100: '已完成',
  10: '订单已取消',
  20: '处理中',
  30: '退款成功'
}

//
export const getSpuDict = async () => {
  const res = await getSpuPage({ pageNo: 1, pageSize: 30 })
  const list = res.list.map((item: any) => ({ id: item.id, name: item.name }))
  const keyValues = list.reduce((acc, cur) => {
    acc[cur.id] = cur.name
    return acc
  }, {})
  return keyValues
}
