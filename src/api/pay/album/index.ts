import request from '@/config/axios'

/**
 * 获取订单原图
 * @param orderId - 订单编号
 */
export const getOriginPhotos = async (orderId: string | string[]) => {
  return await request.get({
    url: '/member/pic/getOriginPhotos',
    params: { orderId }
  })
}

/**
 * 获取订单精修图
 * @param orderId - 订单编号
 */
export const getTruingPhotos = async (orderId: string | string[]) => {
  return await request.get({
    url: '/member/pic/getTruingPhotos',
    params: { orderId }
  })
}
