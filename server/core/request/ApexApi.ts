import type {
  ApexParams,
  ApexPlayerSummaries,
} from 'types'
import { apexFetch } from './fetch'

export function getApexPlayerSummaries(params: ApexParams) {
  return apexFetch<ApexPlayerSummaries>('/bridge', {
    params: {
      auth: process.env.APEX_KEY,
      ...params,
    },
  })
}
