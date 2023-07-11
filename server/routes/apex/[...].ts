import { dataApex } from 'server/core/logic/dataApex'
import { apexCard } from 'server/core/render/apexCard'
import errorCard from 'server/core/render/errorCard'
import { getApexPlayerSummaries } from 'server/core/request/ApexApi'
import initLocale from 'server/core/locales'
import { useWrap } from 'server/core/request/useWrap'

const i18n = initLocale('zhCN')
const cacheTime: string = process.env.CACHE_TIME || '3600'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')
  setHeader(event, 'Content-Type', 'image/svg+xml')
  setHeader(event, 'Cache-Control', `public, max-age=${cacheTime}`)
  const { _ } = event.context.params as { _: string }
  const splitArr = _.split('/')

  const player = splitArr[0]
  const platform = splitArr[1]?.toUpperCase()
  const [err, playerInfo] = await useWrap(getApexPlayerSummaries({
    player,
    platform,
  }))

  if (err) {
    return errorCard(err.data.Error || '查询失败', 'error')
  }
  else {
    const {
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
    } = dataApex(playerInfo)
    return apexCard(
      player,
      isOnline,
      isInGame,
      level,
      upRate,
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
      i18n)
  }
})
