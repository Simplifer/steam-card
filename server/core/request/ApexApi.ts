import type {
  ApexParams,
  ApexPlayerSummaries,
  BaseResponse,
} from 'types'
import { apexFetch } from './fetch'

export function getApexPlayerSummaries(params: ApexParams) {
  return apexFetch<BaseResponse<ApexPlayerSummaries>>('/bridge', {
    params: {
      auth: process.env.APEX_KEY,
      ...params,
    },
  })
}
