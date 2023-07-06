import type { OwnedGames, PlayedGames, Player } from 'types'

export function data(userInfo: Player, playedGames: PlayedGames, allGames: OwnedGames) {
  const { avatarfull: avatarUrl, personaname: name, personastate: isOnline } = userInfo
  const blockApps = process.env.BLOCK_APPS || ''
  const blockAppList = blockApps.split(',')
  // '<' cause svg render error
  const _name = name.replaceAll('<', '&lt;')

  let playTime = 0
  let totalTime = 0
  let games = playedGames.games || []
  // userInfo.timecreated 根据时间戳（秒）算出相隔多少年精确到小数点后一位
  const accountYear = ((Date.now() / 1000 - userInfo.timecreated) / 31536000).toFixed(1)

  games.forEach((game) => {
    playTime += game.playtime_2weeks
  })

  allGames.games.forEach((game) => {
    totalTime += game.playtime_forever
  })

  playTime = parseInt(String(playTime / 60), 10)
  totalTime = parseInt(String(totalTime / 60), 10)
  games = games.filter(game => !blockAppList.includes(String(game.appid)))
  games.splice(5, games.length - 5)

  return { games, playTime, avatarUrl, name: _name, isOnline, totalTime, accountYear }
}
