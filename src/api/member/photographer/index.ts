import request from '@/config/axios'

export interface UserAreaVO {
  id: number
  userId: number
  areaId: number
}

// 查询用户地域关联列表
export const getUserAreaPage = async (params) => {
  return await request.get({ url: `/member/user-area/page`, params })
}

// 查询用户地域关联详情
export const getUserArea = async (id: number) => {
  return await request.get({ url: `/member/user-area/list/${id}` })
}

// 新增用户地域关联
// 请求包括 1. userid 2. areaid（数组）
export const createUserArea = async (data: UserAreaVO) => {
  return await request.post({ url: `/member/user-area/create`, data })
}

// 修改用户地域关联
export const updateUserArea = async (data: UserAreaVO) => {
  return await request.put({ url: `/member/user-area/update`, data })
}

// 删除用户地域关联
export const deleteUserArea = async (id: number) => {
  return await request.delete({ url: `/member/user-area/delete?id=` + id })
}

// 导出用户地域关联 Excel
export const exportUserArea = async (params) => {
  return await request.download({ url: `/member/user-area/export-excel`, params })
}

// 摄影师审批列表
export const getUserVerify = async (data) => {
  return await request.post({ url: `/member/photographer/listPhotographerByApprove`, data })
}

// 审核确认
export const verify = async (data: any) => {
  return await request.post({ url: '/member/user/photographer/review', data })
}

// 获得待审核的摄影师的基本信息
export const getUserDetail = async () => {
  return await request.get({ url: '/member/photographer/get' })
}

// 获得待审核的摄影师的详细信息
export const getUserDetailInfo = async (userId: any) => {
  return await request.get({ url: `/member/photographer/get/${userId}` })
}

// 禁用摄影师
export const disablePhotographer = async (userId: any) => {
  return await request.post({ url: `/member/photographer/disable/${userId}` })
}
