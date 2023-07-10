import { dataApex } from 'server/core/logic/dataApex'
import { apexCard } from 'server/core/render/apexCard'
import { getApexPlayerSummaries } from 'server/core/request/ApexApi'
import errorCard from 'server/core/render/errorCard'
import initLocale from 'server/core/locales'

const i18n = initLocale('zhCN')
const cacheTime: string = process.env.CACHE_TIME || '3600'
const JPEG_PREFIX = 'data:image/jpeg;base64,'
const PNG_PREFIX = 'data:image/png;base64,'

export default defineEventHandler(async (event) => {
  try {
    setHeader(event, 'Access-Control-Allow-Origin', '*')
    setHeader(event, 'Content-Type', 'image/svg+xml')
    setHeader(event, 'Cache-Control', `public, max-age=${cacheTime}`)
    const { _ } = event.context.params as { _: string }
    const splitArr = _.split('/')

    const player = splitArr[0]
    const platform = splitArr[1]?.toUpperCase()
    const AllData = await Promise.all([
      getApexPlayerSummaries({
        player,
        platform,
      }),
    ])
    const [playerInfo] = AllData

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
      arenaRankScore,
    } = dataApex(playerInfo)
    return apexCard(
      player,
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
      arenaRankScore,
      i18n)
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: [...].ts:148 ~ defineEventHandler ~ error:', error)
    return errorCard(error as string, 'error')
  }
})
