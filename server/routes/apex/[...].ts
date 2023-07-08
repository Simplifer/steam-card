import { dataApex } from 'server/core/logic/dataApex'
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
    const platform = splitArr[1]
    const AllData = await Promise.all([
      getApexPlayerSummaries({
        player,
        platform,
      }),
    ])
    const [playerInfo] = AllData

    const {
      global,
    } = dataApex(playerInfo.response)

    //
    // let avatarUrlBase64 = await imageUrl2Base64(avatarUrl)
    // avatarUrlBase64 = avatarUrlBase64 ? JPEG_PREFIX + avatarUrlBase64 : transparentImageBase64
    //
    //
    // const gameImgs = []
    //
    // for (let i = 0; i < games.length; i++) {
    //   const url = getGameCoverUrl(games[i].appid)
    //   gameImgs[i] = await imageUrl2Base64(url)
    //   gameImgs[i] = gameImgs[i] ? JPEG_PREFIX + gameImgs[i] : transparentImageBase64
    // }

    return ''
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚀 ~ file: [...].ts:148 ~ defineEventHandler ~ error:', error)
    return errorCard(error as string, 'error')
  }
})
