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
  mozambiquehere_internal: MozambiquehereInternal
  total: Total
  processingTime: number
}

export interface Global {
  name: string
  uid: string
  avatar: string
  platform: string
  level: number
  toNextLevelPercent: number
  internalUpdateCount: number
  bans: Bans
  rank: GlobalRank
  arena: Arena
  battlepass: Battlepass
  internalParsingVersion: number
  badges: Damage[]
  levelPrestige: number
}

export interface Arena {
  rankScore: number
  rankName: string
  rankDiv: number
  ladderPosPlatform: number
  rankImg: string
  rankedSeason: string
  ALStopPercent: string
  ALStopInt: string
  ALStopPercentGlobal: string
  ALStopIntGlobal: string
  ALSFlag: boolean
}

export interface Damage {
  name: string
  value: number
}

export interface Bans {
  isActive: boolean
  remainingSeconds: number
  last_banReason: string
}

export interface Battlepass {
  level: number
  history: { [key: string]: number }
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
  all: All
}

export interface All {
  Global: LegendImg
  Revenant: LegendImg
  Crypto: LegendImg
  Horizon: LegendImg
  Gibraltar: Gibraltar
  Wattson: LegendImg
  Fuse: LegendImg
  Bangalore: LegendImg
  Wraith: LegendImg
  Octane: LegendImg
  Bloodhound: Bloodhound
  Caustic: LegendImg
  Lifeline: Gibraltar
  Pathfinder: LegendImg
  Loba: Loba
  Mirage: MadMaggie
  Rampart: LegendImg
  Valkyrie: Loba
  Seer: MadMaggie
  Ash: LegendImg
  'Mad Maggie': MadMaggie
  Newcastle: LegendImg
  Vantage: LegendImg
  Catalyst: LegendImg
  Ballistic: LegendImg
}
export interface LegendImg {
  ImgAssets: ImgAssets
}

export interface ImgAssets {
  icon: string
  banner: string
}

export interface Bloodhound {
  data: BloodhoundDatum[]
  ImgAssets: ImgAssets
}

export interface BloodhoundDatum {
  name: string
  value: number
  key: string
  rank: RankPlatformSpecificClass
  rankPlatformSpecific: PurpleRankPlatformSpecific
}

export interface RankPlatformSpecificClass {
  rankPos: number
  topPercent: number
}

export interface PurpleRankPlatformSpecific {
  rankPos: number | string
  topPercent: number | string
}

export interface Gibraltar {
  data: GibraltarDatum[]
  gameInfo: GibraltarGameInfo
  ImgAssets: ImgAssets
}

export interface GibraltarDatum {
  name: string
  value: number
  key: string
  rank: RankPlatformSpecificClass
  rankPlatformSpecific: RankPlatformSpecificClass
}

export interface GibraltarGameInfo {
  badges: Damage[]
}

export interface Loba {
  data: LobaDatum[]
  ImgAssets: ImgAssets
}

export interface LobaDatum {
  name: string
  value: number
  key: string
  rank: RankPlatformSpecificClass
  rankPlatformSpecific: FluffyRankPlatformSpecific
}

export interface FluffyRankPlatformSpecific {
  rankPos: string
  topPercent: string
}

export interface MadMaggie {
  data: GibraltarDatum[]
  ImgAssets: ImgAssets
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

export interface MozambiquehereInternal {
  isNewToDB: boolean
  clusterSrv: string
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

export interface Total {
  specialEvent_kills: Damage
  specialEvent_damage: Damage
  specialEvent_wins: Damage
  damage: Damage
  enemies_scanned: Damage
  doc_drone_healing: Damage
  kills: Damage
  kd: Kd
}

export interface Kd {
  value: string
  name: string
}
