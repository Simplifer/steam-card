export default interface ValorantApiRes {
  status?: number
  name?: string
  tag?: string
  results?: Results
  data?: Data[]
  errors?: ApiError
}

export interface Results {
  total?: number
  returned?: number
  before?: number
  after?: number
}
export interface ApiError {
  message: string
  code: number
  details: string
}

export interface Data {
  meta?: Meta
  stats?: Stats
  teams?: Teams
}

export interface Meta {
  id?: string
  map?: Map
  version?: string
  mode?: string
  started_at?: string
  season?: Season
  region?: string
  cluster?: string
}

export interface Map {
  id?: string
  name?: string
}

export interface Season {
  id?: string
  short?: string
}

export interface Stats {
  puuid?: string
  team?: string
  level?: number
  character?: Character
  tier?: number
  score?: number
  kills?: number
  deaths?: number
  assists?: number
  shots?: Shots
  damage?: Damage
}

export interface Character {
  id?: string
  name?: string
}

export interface Shots {
  head?: number
  body?: number
  leg?: number
}

export interface Damage {
  made?: number
  received?: number
}

export interface Teams {
  red?: number
  blue?: number
}

export interface QueryParams {
  name: string
  tag: string
  affinity?: string
  page?: number
  size?: number
}
