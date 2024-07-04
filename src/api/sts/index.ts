import request from '@/config/axios'

// 用于上传系统图片的接口
export const getStsCommon = async () => {
  return await request.get({
    url: '/infra/file/getSts/common'
  })
}

export const getStsUserProfile = async () => {
  return await request.get({
    url: '/infra/file/getSts/userProfile'
  })
}

// 用于顾客查看图片的接口
// 传入orderId 订单编号
export const getStsWorkDownload = async (params) => {
  return await request.get({
    url: '/infra/file/getSts/workspaceDownload',
    params
  })
}

// 用于摄影师上传工作空间的接口
// 传入orderId 订单编号
export const getStsWorkSpace = async (params) => {
  return await request.get({
    url: '/infra/file/getSts/workspaceUpload',
    params
  })
}

// 管理员级的sts接口
export const getSts = async () => {
  return await request.get({
    url: '/infra/file/getSts/common'
  })
}
