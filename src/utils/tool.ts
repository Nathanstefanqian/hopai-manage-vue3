export const makeUUID = () => {
  // 获取当前时间戳
  const timestamp = Date.now()

  // 生成一个随机数作为后缀，这里使用了 Math.random() 方法
  const randomSuffix = Math.random().toString(36).substring(2, 8)

  // 结合时间戳和随机数生成唯一的文件名
  const fileName = `${timestamp}_${randomSuffix}`

  return fileName
}
