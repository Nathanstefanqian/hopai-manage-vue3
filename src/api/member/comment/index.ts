import request from '@/config/axios'

interface pageVO {
  pageNo: number
  pageSize: number
}

interface updateVO {
  id: number
  content: string
  rate: number
}

export const getUserCommentPage = async (params: pageVO) => {
  return await request.get({ url: '/member/photographer/page', params })
}

export const updateUserComment = async (data: updateVO) => {
  return await request.put({ url: '/member/photographer/update', data })
}
