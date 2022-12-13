import { $fetch, FetchContext, FetchResponse } from 'ohmyfetch'

import { getViteEnv } from '../utils'

function getAPIBaseUrl(path: string): string {
  const baseUrl = getViteEnv('VITE_BACKEND_API_URL')
  return new URL(path, baseUrl).href
}

async function onBackendFetchResponse(
  ctx: FetchContext & {
    response: FetchResponse<unknown>
  }
) {
  const res = ctx.response._data
  if (res.code !== 200) return Promise.reject(new Error(res.msg))
  ctx.response._data = res.data
}

export const backendFetch = $fetch.create({
  baseURL: getAPIBaseUrl('/api/v1'),
  headers: { 'Content-Type': 'application/json' },
  onResponse: onBackendFetchResponse,
})
