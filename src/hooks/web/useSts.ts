import { ref } from 'vue'
import * as stsApi from '@/api/sts'
export const useUpload = (id: string) => {
  const client = ref<any>(null)
  const getStsToken = async () => {
    const res = await stsApi.getStsCommon()
    client.value = new OSS({
      region: 'oss-cn-shanghai',
      accessKeyId: res.credentials.accessKeyId,
      accessKeySecret: res.credentials.accessKeySecret,
      stsToken: res.credentials.securityToken,
      bucket: 'hopai-system',
      refreshSTSToken: async () => {
        res = await uploadApi.getStsUpload(id)
        return {
          accessKeyId: res.credentials.accessKeyId,
          accessKeySecret: res.credentials.accessKeySecret,
          stsToken: res.credentials.securityToken
        }
      }
    })
  }
  return {
    getStsToken,
    client
  }
}
