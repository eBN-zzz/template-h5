import { useAxios } from '@/hooks/useAxios'

const request = useAxios()

// 获取所有字典
export const getDictApi = () => {
  return request.get({ url: '/dict/list' })
}

// 模拟获取某个字典
export const getDictOneApi = (params: any) => {
  return request.get({ url: '/dict/one', params })
}
