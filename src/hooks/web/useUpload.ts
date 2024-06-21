import { ref } from 'vue'
import * as stsApi from '@/api/sts'
import OSS from 'ali-oss'

export const useUpload = () => {
  const client = ref<any>(null)
  const getStsToken = async (bucket: string, common: boolean = true) => {
    const b = `hopai-${bucket}`
    let res
    if (common) {
      res = await stsApi.getStsCommon()
    } else {
      res = await stsApi.getStsUserProfile()
    }
    client.value = new OSS({
      region: 'oss-cn-shanghai',
      accessKeyId: res.credentials.accessKeyId,
      accessKeySecret: res.credentials.accessKeySecret,
      stsToken: res.credentials.securityToken,
      bucket: b,
      refreshSTSToken: async () => {
        res = await stsApi.getStsCommon()
        return {
          accessKeyId: res.credentials.accessKeyId,
          accessKeySecret: res.credentials.accessKeySecret,
          stsToken: res.credentials.securityToken
        }
      }
    })
  }
  const put = async (ObjName, fileUrl) => {
    try {
      return await client.value.put(ObjName, fileUrl)
    } catch (e) {
      console.log(e)
    }
  }
  const signatureUrl = async (ObjName) => {
    try {
      return await client.value.signatureUrl(`${ObjName}`)
    } catch (e) {
      console.error(e)
    }
  }
  return {
    put,
    signatureUrl,
    getStsToken,
    client
  }
}
