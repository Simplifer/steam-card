import { imageUrl2Base64 } from 'server/core/utils'
import type { SelectedDatum } from 'types'
import type { I18n } from '../locales'

const PNG_PREFIX = 'data:image/png;base64,'
class Card {
  private name = ''
  private isOnline = 0
  private isInGame = 0
  private level = 0
  private upRate = ''
  private rankScore = 0
  private rankName = ''
  private rankDiv = ''
  private totalkills = 0
  private totalDamage = 0
  private rankImg = ''
  private HeroImg = ''
  private arenaRankScore = 0
  private selectedHero = 0
  private legendInfoSvg = ''
  private heroInfoList: SelectedDatum[] = []
  private style = {
    borderColor: '',
    fontColor: '#fff',
    onlineColor: '#4ce78a',
    offlineColor: '#e74c3c',
  }

  private bgSvg = ''
  private onlineSvg = ''

  private i18n: I18n

  public constructor({
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
                           arenaRankScore,
                           i18n,
                         selectedHero,
                       heroInfoList,

  }: any) {
    this.name = name
    this.isOnline = isOnline
    this.isInGame = isInGame
    this.level = level
    this.upRate = upRate
    this.rankScore = rankScore
    this.rankName = rankName
    this.rankImg = rankImg
    this.rankDiv = rankDiv
    this.totalkills = totalkills
    this.totalDamage = totalDamage
    this.HeroImg = HeroImg
    this.arenaRankScore = arenaRankScore
    this.i18n = i18n
    this.selectedHero = selectedHero
    this.heroInfoList = heroInfoList
  }

  public setBg() {
    const bg_color = '#3d4044'
    this.bgSvg = this.HeroImg ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.HeroImg}) no-repeat center` : bg_color
  }

  public updateIsOnline() {
    let onlineText: string
    let onlineClassName: string
    if (this.isOnline > 0) {
      onlineText = `在线（${this.isInGame === 0 ? '大厅中' : '游戏中'}）`
      onlineClassName = 'online'
    }
    else {
      onlineText = '离线'
      onlineClassName = 'offline'
    }
    this.onlineSvg = `<span class="${onlineClassName}">${onlineText}</span>`
  }

  public async renderGameInfo() {
    this.rankImg = await imageUrl2Base64(this.rankImg)

    this.heroInfoList.map((item, i) => {
      if (i <= 4) {
        this.legendInfoSvg += `
              <div class="info-line">
                 ${item.name}：<span class="val-color">${item.value || '-'}</span> 
              </div>`
      }
      return null
    })
  }

  public render() {
    return `
   <svg width="800" height="340" xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg">
    <style>
        .card {
        color: ${this.style.fontColor};
        background: ${this.bgSvg};
        background-size: cover;
        font-size:24px;
        height:300px;
        width:760px;
        padding: 20px;
        gap:20px;
        display:flex;
        font-family: "Microsoft YaHei",serif;
        border-radius: 5px;
        align-items: center;
        }
        .info-line{
        display: flex;
        align-items: center;
        font-size: 20px;
        white-space: nowrap;
        }
        .online {
        font-size: 20px;
        color: ${this.style.onlineColor};
        }

        .offline {
        font-size: 20px;
        color: ${this.style.offlineColor};
        }
        
        .rank{
        width: 28%;
        display: flex;
        flex-direction: column;
        align-items: center;
         color: #ffc148;
        justify-content: center;
        }
        .rank-img{
        width: 160px;
        height: 160px;
        object-fit: contain;
        margin: 10px 0;
        }
        
        .avatar {
        border-radius: 5px;
        }
        
        .user-info {
        height: 85%;
        width: 32%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        gap:10px;
        }
        
        .legend-info {
        height: 85%;
        flex-direction: column;
          justify-content: space-around;
        text-align: right;
        width: 32%;
        display: flex;
        gap:10px;
        }
        .level{
         font-size: 24px;
        }
        .val-color{
        color: #ec2f1a;
        text-shadow: 0 0 2px #f6f6f6;
        font-size: 24px;
        }
  
    </style>
    <foreignObject width="800" height="340">
      <div class="card"
        xmlns="http://www.w3.org/1999/xhtml">
         <div class="user-info">
                <div class="info-line">
                 <span style="font-size: 26px;margin-right: 10px"> ${this.name}</span>  ${this.onlineSvg}
              </div>
              <div class="info-line">
                 排位分：<span class="val-color">${this.rankScore || '-'}</span> 
              </div>
              <div class="info-line">
                 总击杀：<span class="val-color">${this.totalkills || '-'}</span> 
              </div>
              <div class="info-line">
                 总伤害：<span class="val-color">${this.totalDamage || '-'}</span> 
              </div>
          </div>
          <div class="rank">
           <span class="level">LV.${this.level || '-'} (${this.upRate})</span> 
          <img class="rank-img" src="${PNG_PREFIX + this.rankImg}" alt="rankImg"></img>
          <div>${this.rankName} ${this.rankDiv}</div>
          </div>
            <div class="legend-info">
              <div class="info-line">
                 当前英雄: <div style="color: #35abe5;margin-left: 8px">${this.selectedHero}</div>
              </div>
              ${this.legendInfoSvg}
          </div>
      </div>
    </foreignObject>
  </svg>  
`
  }
}

export default Card
