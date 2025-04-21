import request from '@/config/axios'

export const getNum = () => {
  return request.get({ url: '/member/dashboard/getNum' })
}

export const getPhotographerPic = (type: any) => {
  return request.get({ url: `/member/dashboard/photographerProfile?type=${type}` })
}

export const getRevenue = (type: any) => {
  return request.get({ url: `/member/dashboard/revenue?type=${type}` })
}

export const getAnalysis = () => {
  return request.get({ url: `/member/dashboard/userAnalysis` })
}
