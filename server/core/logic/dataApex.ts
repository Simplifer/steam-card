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
  const HeroImg = userInfo.legends?.selected.ImgAssets.banner

  const totalkills = userInfo.total?.specialEvent_kills?.value

  const totalDamage = userInfo.total?.damage?.value
  const heroInfoList = userInfo.legends?.selected.data
  const KD = userInfo.total.kd?.value
  const upRate = userInfo.global.toNextLevelPercent

  return {
    isOnline,
    isInGame,
    level,
    rankScore,
    rankName,
    rankDiv,
    totalkills,
    totalDamage,
    rankImg,
    HeroImg,
    selectedHero,
    heroInfoList,
    KD,
    upRate,
  }
}
