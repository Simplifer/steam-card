import type { ApexPlayerSummaries } from 'types'

export function dataApex(userInfo: ApexPlayerSummaries) {
  const level = userInfo.global.level
  const selectedHero = userInfo.realtime.selectedLegend
  const isOnline = userInfo.realtime.isOnline
  const isInGame = userInfo.realtime.isInGame
  const rankScore = userInfo.global.rank.rankScore
  const rankName = userInfo.global.rank.rankName
  const rankDiv = userInfo.global.rank.rankDiv
  const rankImg = userInfo.global.rank.rankImg
  const arenaRankScore = userInfo.global.arena.rankScore
  const HeroImg = userInfo.legends?.selected.ImgAssets.icon

  const totalkills = userInfo.total?.specialEvent_kills?.value
  const killsText = totalkills ? `总击杀：${totalkills} \n` : ''

  const totalDamage = userInfo.total?.damage?.value
  const DamageText = totalDamage ? `总伤害：${totalDamage} \n` : ''

  return {
    isOnline,
    isInGame,
    level,
    rankScore,
    rankName,
    rankDiv,
    totalkills: killsText,
    totalDamage: DamageText,
    rankImg,
    HeroImg,
    arenaRankScore,
    selectedHero,
  }
}
