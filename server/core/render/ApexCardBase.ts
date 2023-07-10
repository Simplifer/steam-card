import type { I18n } from '../locales'

class Card {
  private name = ''
  private isOnline = 0
  private isInGame = 0
  private level = 0
  private rankScore = 0
  private rankName = ''
  private rankDiv = ''
  private totalkills = 0
  private totalDamage = 0
  private rankImg = ''
  private HeroImg = ''
  private arenaRankScore = 0
  private selectedHero = 0
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

  }: any) {
    this.name = name
    this.isOnline = isOnline
    this.isInGame = isInGame
    this.level = level
    this.rankScore = rankScore
    this.rankName = rankName
    this.rankDiv = rankDiv
    this.totalkills = totalkills
    this.totalDamage = totalDamage
    this.rankImg = rankImg
    this.HeroImg = HeroImg
    this.arenaRankScore = arenaRankScore
    this.i18n = i18n
    this.selectedHero = selectedHero
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

  public renderGameInfo() {

  }

  public render() {
    return `
    <svg width="800" height="300" xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg">
    <style>
        .card {
        color: ${this.style.fontColor};
        background: ${this.bgSvg};
        font-size:14px;
        height:260px;
        width:760px;
        padding: 20px;
        gap:10px;
        display:flex;
        flex-direction:column;
        font-family: "Microsoft YaHei",serif;
        border-radius: 5px;
        }

        .online {
        color: ${this.style.onlineColor};
        }

        .offline {
        color: ${this.style.offlineColor};
        }
        
        .top {
        display: flex;
        justify-content: space-between;
        }
        
        .avatar {
        border-radius: 5px;
        }
        
        .user-info {
        display: flex;
        gap:10px;
        }
        
        .status {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        }
        
        .counts {
        font-size:12px;
        display:flex;
        gap:20px;
        }
  
        .count-item {
        display:flex;
        flex-direction: column;
        align-items: center;
        }
  
        .game-list {
        display:flex;
        gap:8px;
        }
  
        .icon-list {
          position: absolute;
          right: 7px;
          top: 50px;
          display: flex;
          gap: 10px;
        }
    </style>
    <foreignObject width="400" height="150">
      <div class="card"
        xmlns="http://www.w3.org/1999/xhtml">
        <div class="top">
          <div class="user-info">
            <div class="status">
              <div style="font-size:12px;font-weight:bold">
                  ${this.name}
              </div>
              <div style="font-size:12px;font-weight:bold">
                  LV. ${this.level}
              </div>
              <div style="font-size:12px;font-weight:bold">
                  ${this.onlineSvg}
              </div>
            </div>
          </div>
          <div class="counts">
          </div>
        </div>
  
     
      </div>
    </foreignObject>
  </svg>  
`
  }
}

export default Card
