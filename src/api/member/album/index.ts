import request from '@/config/axios'

export interface AlbumVO {
  pageNo: number
  pageSize: number
  userId: string | string[]
}

export interface PhotoVO {
  pageNo: number
  pageSize: number
  albumId: number
}

export interface CreateAlbumVO {
  userId: string | string[]
  title: string
  urlList: Array<String>
  description?: string
  coverPhotoId?: number
  sortOrder?: number
}

export interface CreatePhotoVO {
  albumId: number
  urlList: Array<string>
}

export interface updateAlbumCoverPhoto {
  id: number
  coverPhotoId: number
}
// 获取代表作相册分页
export const getAlbumPage = async (params: AlbumVO) => {
  return await request.get({ url: `/member/album/page`, params })
}

// 获取代表作相册的详细内容
export const getAlbumDetail = async (id: number) => {
  return await request.get({ url: `/member/album/get?id=` + id })
}

// 删除代表作
export const deleteAlbum = async (id: number) => {
  return await request.delete({ url: `/member/album/delete?id=` + id })
}

// 创建代表作集
export const createAlbum = async (data: CreateAlbumVO) => {
  return await request.post({ url: '/member/album/create', data })
}

// 获得相册分页
export const getPhotoPage = async (params: PhotoVO) => {
  return await request.get({ url: `/member/photo/page`, params })
}

// 获得照片详情
export const getPhotoDetail = async (id: number) => {
  return await request.get({ url: '/member/photo/get?id=' + id })
}

// 新增相册照片
export const createPhoto = async (data: CreatePhotoVO) => {
  return await request.post({ url: '/member/photo/create', data })
}

// 删除相册照片
export const deletePhoto = async (id: number) => {
  return await request.delete({ url: `/member/photo/delete?id=` + id })
}

// 设置代表作封面
export const updatePhotoCover = async (data: updatePhotoVO) => {
  return await request.put({ url: 'member/album/updateAlbumCoverPhoto', data })
}
