import type { Count } from 'types'
import type { I18n } from '../locales'
import Card from './Card'

const steamCard = (
  name: string,
  accountYear: number,
  avatarUrlBase64: string,
  playerLevel: string,
  isOnline: number,
  gameImgList: string[],
  theme: string,
  isBadge: boolean,
  isGroup: boolean,
  bg: string,
  textColor: string,
  playTime: number,
  totalTime: number,
  groupIconList: string[],
  badgeIcon: string,
  i18n: I18n,
  counts: Count[],
) => {
  const card = new Card({
    name,
    accountYear,
    avatarUrlBase64,
    playerLevel,
    isOnline,
    gameImgList,
    theme,
    bg,
    textColor,
    playTime,
    totalTime,
    groupIconList,
    badgeIcon,
    i18n,
    counts,
  })

  card.updateIsOnline()
  card.setStyle()
  card.setBg()
  card.renderGames()
  card.renderCounts()
  if (isGroup && groupIconList?.length > 0)
    card.renderGroup()

  if (isBadge && badgeIcon)
    card.renderBadge()

  return card.render()
}

export { steamCard }
