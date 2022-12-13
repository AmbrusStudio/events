import { backendFetch } from '../fetcher'

export type BlockInfo = {
  id: number
  block_id: number
  content: string
  create_time: number
  delete_time: number
  html: string
  introduction: string
  material: string
  material_mob: string
  name: string
  sort: number
  update_time: number
  url: string
}

export async function getBlockInfoApi<T = BlockInfo[]>(key: string) {
  return await backendFetch<T>(`/getBlockInfoApi?langId=14&key=${key}`)
}
