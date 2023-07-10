import type { I18n } from '../locales'
import ApexCardBase from './ApexCardBase'

const apexCard = (
  name: string,
  isOnline: number,
  isInGame: number,
  level: number,
  rankScore: number,
  rankName: string,
  rankDiv: string | number,
  totalkills: string,
  totalDamage: string,
  rankImg: string,
  HeroImg: string,
  arenaRankScore: number,
  i18n: I18n,
) => {
  const card = new ApexCardBase({
    name,
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
    i18n,
  })

  card.updateIsOnline()
  card.setBg()
  card.renderGameInfo()

  return card.render()
}

export { apexCard }
