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
