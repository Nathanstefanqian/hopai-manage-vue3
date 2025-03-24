import request from '@/config/axios'

export interface UserAreaVO {
  id: number
  userId: number
  areaId: number
}

export interface BasicDataVO {
  userId: string
  mobile: string
  nickname: string
  idCard: string
  areaName: string
  areaId: string
  sex: boolean
  birthday: string
}

export interface TechDataVO {
  introduction: string
  littleRedBookId: string
  douYinId: string
  camera: string
  lightingEquipment: string
  fixedFocalLengthLens: string
  zoomLens: string
}

export interface OrderDataVO {
  areaIds: Array<string>
  levelId: Array<string>
  bizIds: Array<string>
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

// 摄影师设备信息
export const getPhotographerDevice = async (userId: any) => {
  return await request.get({ url: `/member/user-devices-pic/list?userId=` + userId })
}

// 更新基本信息
export const updatePhotographerBasicInfo = async (data: BasicDataVO) => {
  return await request.post({ url: '/member/photographer/updateInfo', data })
}

// 更新技术信息
export const updatePhotographerTechInfo = async (data: TechDataVO) => {
  return await request.post({ url: '/member/photographer/updateInfo', data })
}

// 更新接单信息
export const updatePhotographerOrderInfo = async (data: OrderDataVO) => {
  return await request.post({ url: '/member/photographer/updateInfo', data })
}

// 获得开户信息接口
export const getPhotographerBankPage = async (data: any) => {
  return await request.post({ url: '/member/photographer/bankReviewPage', data })
}

// 获得开户详情信息接口
export const getPhotographerBankDetail = async (params: any) => {
  return await request.get({ url: '/member/photographer/bankReviewInfo', params })
}

// 获得外挂接口
export const getFraud = async (id: number) => {
  return await request.get({ url: '/member/wechat-login/get?id=' + id })
}

// 更新外挂功能
export const updateFraud = async (data: any) => {
  return await request.put({ url: '/member/wechat-login/update', data })
}
