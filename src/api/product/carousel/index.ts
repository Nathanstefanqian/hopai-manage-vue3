import request from '@/config/axios'

export interface CarouselVO {
  id: number
  title: string
  imageUrl: string
  description: string
  linkUrl: string
  sort: number
}

// 查询轮播图列表
export const getCarouselPage = async (params) => {
  return await request.get({ url: `/product/carousel/page`, params })
}

// 查询轮播图详情
export const getCarousel = async (id: number) => {
  return await request.get({ url: `/product/carousel/get?id=` + id })
}

// 新增轮播图
export const createCarousel = async (data: CarouselVO) => {
  return await request.post({ url: `/product/carousel/create`, data })
}

// 修改轮播图
export const updateCarousel = async (data: CarouselVO) => {
  return await request.put({ url: `/product/carousel/update`, data })
}

// 删除轮播图
export const deleteCarousel = async (id: number) => {
  return await request.delete({ url: `/product/carousel/delete?id=` + id })
}

// 导出轮播图 Excel
export const exportCarousel = async (params) => {
  return await request.download({ url: `/product/carousel/export-excel`, params })
}

// 上传轮播图图片
export const uploadCarousel = (data) => {
  return request.upload({ url: '/system/user/profile/update-avatar', data: data })
}
