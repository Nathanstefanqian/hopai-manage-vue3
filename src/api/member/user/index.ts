import request from '@/config/axios'

export interface appPhotographerInfoBaseVO {
  littleRedBookId: string
  wechatId: string
  douYinId: string
  lightingEquipment: string
  camera: string
  zoomLens: string
  backgroundImageUrl: string
  userId: string
  orderType: boolean
  introduction: string
  fixedFocalLengthLens: string
  id: string
}
export interface UserVO {
  appPhotographerInfoBaseVO: appPhotographerInfoBaseVO
  avgRate: number
  totalOrderAmount: number
  orderCount: number
  userId: number
  id: number
  avatar: string | undefined
  birthday: number | undefined
  babyBirthday: number | undefined
  weddingAnniversary: number | undefined
  createTime: number | undefined
  areaIds: Array<string>
  loginDate: number | undefined
  loginIp: string
  mark: string
  mobile: string
  name: string | undefined
  nickname: string | undefined
  registerIp: string
  sex: number
  status: number
  areaId: number | undefined
  areaName: string | undefined
  areaNames: Array<string>
  levelName: string | null
  levelId: string
  point: number | undefined | null
  totalPoint: number | undefined | null
  experience: number | null | undefined
  bizList: Array<string>
  idCard: string
  categoryIds: Array<string>
}

interface LevelVO {
  levelId: string
  id: string | string[] // id查询 (使用摄影师userId)
}

interface OrderVO {
  areaIds: Array<string>
  categoryIds: Array<string>
  userId: string | string[] // id查询，后端sb
}

interface BasicVO {
  nickname: string | undefined
  status: number
  mobile: string
  avatar: string | undefined
  idCard: any
  birthday: any
  areaId: any
  id: string | string[] // userId,后端sb
}

interface TechVO {
  introduction: string
  littleRedBookId: string
  douYinId: string
  camera: string
  lightingEquipment: string
  zoomLens: string
  fixedFocalLengthLens: string
  id: string | string[]
}

// 查询会员用户列表
export const getUserPage = async (params) => {
  return await request.get({ url: `/member/user/page`, params })
}

// 查询会员用户详情
export const getUser = async (id: number) => {
  return await request.get({ url: `/member/user/get?id=` + id })
}

// 修改会员用户
export const updateUser = async (data: UserVO) => {
  return await request.put({ url: `/member/user/update`, data })
}

// 修改会员用户等级（弃用）
export const updateUserLevel = async (data: any) => {
  return await request.put({ url: `/member/user/update-level`, data })
}

// 修改会员用户积分
export const updateUserPoint = async (data: any) => {
  return await request.put({ url: `/member/user/update-point`, data })
}

// 修改会员用户余额
export const updateUserBalance = async (data: any) => {
  return await request.put({ url: `/member/user/update-balance`, data })
}

// 修改会员等级
export const updateUserLevelId = async (data: LevelVO) => {
  return await request.put({ url: '/member/user/update', data })
}

// 修改接单信息
export const updateUserOrderInfo = async (data: OrderVO) => {
  return await request.post({ url: '/member/user/updateOrderConfig', data })
}

// 更新基础信息
export const updateUserBasicInfo = async (data: BasicVO) => {
  return await request.put({ url: '/member/photographer/updateInfo', data })
}

// 更新技术信息
export const updateUserTechInfo = async (data: TechVO) => {
  return await request.put({ url: '/member/photographer/updateInfo', data })
}

// 更新等级和状态信息
export const updateUserLnSInfo = async (data: LnSVO) => {
  return await request.put({ url: '/member/photographer/updateInfo', data })
}
interface LnSVO {
  levelId: any
  status: any
  id: any
}
