export interface BaseResponse<T> {
  response: T
}

export interface PlayerSummaries {
  players: Player[]
}

export interface Player {
  steamid: string
  personastate: number
  avatarfull: string
  personaname: string
  timecreated: number
}

interface Game {
  appid: number
  name: string
  playtime_2weeks: number
}

interface OwnGame {
  appid: number
  playtime_forever: number
  playtime_windows_forever: number
  playtime_mac_forever: number
  playtime_linux_forever: number
  rtime_last_played: number
  playtime_disconnected: number

}

export interface PlayedGames {
  total_count: number
  games: Game[]
}

export interface ALLGames {
  game_count: number
  games: OwnGame[]
}

export interface BadgesResponse {
  player_level: number
  badges: []
}

export interface OwnedGames {
  game_count: number
  games: {
    appid: number
    playtime_forever: number
  }[]
}

// Apex
export interface ApexPlayerSummaries {
  global: Global
  realtime: Realtime
  legends: Legends
}

export interface Global {
  name: string
  uid: string
  avatar: string
  platform: string
  level: number
  toNextLevelPercent: number
  internalUpdateCount: number
  rank: GlobalRank
  internalParsingVersion: number
  levelPrestige: number
}

export interface GlobalRank {
  rankScore: number
  rankName: string
  rankDiv: number
  ladderPosPlatform: number
  rankImg: string
  rankedSeason: string
  ALStopPercent: number
  ALStopInt: number
  ALStopPercentGlobal: number
  ALStopIntGlobal: number
  ALSFlag: boolean
}

export interface Legends {
  selected: Selected
}

export interface ImgAssets {
  icon: string
  banner: string
}

export interface Selected {
  LegendName: string
  data: SelectedDatum[]
  gameInfo: SelectedGameInfo
  ImgAssets: ImgAssets
}

export interface SelectedDatum {
  name: string
  value: number
  key: string
  global: boolean
}

export interface SelectedGameInfo {
  skin: string
  skinRarity: string
  frame: string
  frameRarity: string
  pose: string
  poseRarity: string
  intro: string
  introRarity: string
  badges: Badge[]
}

export interface Badge {
  name: null | string
  value: number
  category: string
}

export interface Realtime {
  lobbyState: string
  isOnline: number
  isInGame: number
  canJoin: number
  partyFull: number
  selectedLegend: string
  currentState: string
  currentStateSinceTimestamp: number
  currentStateAsText: string
}
