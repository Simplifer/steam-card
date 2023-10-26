import { valorantBaseFetch, valorantFetch } from 'server/core/request/fetch'
import type { QueryParams } from 'types/valorantType'
import type ValorantApiRes from 'types/valorantType'

export function getValorantMatchs(params: QueryParams) {
  const { name, tag, affinity = 'ap' } = params
  const apiUrl = `/v1/lifetime/matches/${affinity}/${name}/${tag}`
  return valorantFetch<ValorantApiRes>(apiUrl, {
    params: {
      ...params,
    },
  })
}

export function getMaps() {
  return valorantBaseFetch<ValorantApiRes>('/v1/maps', {
    params: {
      language: 'zh-CN',
    },
  })
}
export function getModes() {
  return valorantBaseFetch<ValorantApiRes>('/v1/gamemodes', {
    params: {
      language: 'zh-CN',
    },
  })
}
