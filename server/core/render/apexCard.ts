import type { SelectedDatum } from 'types'
import type { I18n } from '../locales'
import ApexCardBase from './ApexCardBase'

const apexCard = async (
  name: string,
  isOnline: number,
  isInGame: number,
  level: number,
  upRate: number,
  rankScore: number,
  rankName: string,
  rankDiv: string | number,
  totalkills: number,
  totalDamage: number,
  rankImg: string,
  HeroImg: string,
  selectedHero: string,
  heroInfoList: SelectedDatum[],
  KD: number | string,
  i18n: I18n,
) => {
  const card = new ApexCardBase({
    name,
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
    i18n,
    selectedHero,
    heroInfoList,
    KD,
  })

  card.updateIsOnline()
  card.setBg()
  await card.renderGameInfo()

  return card.render()
}

export { apexCard }
