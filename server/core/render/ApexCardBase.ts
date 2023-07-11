import { imageUrl2Base64 } from 'server/core/utils'
import type { SelectedDatum } from 'types'
import type { I18n } from '../locales'

const dict: { [key: string]: string } = {
  '1': 'Ⅰ',
  '2': 'Ⅱ',
  '3': 'Ⅲ',
  '4': 'Ⅳ',
  '5': 'Ⅴ',
  '6': 'Ⅵ',
  '7': 'Ⅶ',
  '8': 'Ⅷ',
  '9': 'Ⅸ',
  '10': 'Ⅹ',
  'WORLDS_EDGE_ROTATION': '世界尽头',
  'STORM_POINT_ROTATION': '风暴点',
  'ARENAS_ENCORE': '再来一次',
  'ARENAS_PARTY_CRASHER': '派对破坏者',
  'CAUSTIC_TT_ROTATION': '毒气室',
  'HAMMOND_LABS_ROTATION': '哈蒙德实验室',
  'OLYMPUS_ROTATION': '奥林匹斯',
  'ARENAS_COMPOSITE': '原料厂',
  'ARENAS_OVERFLOW': '熔岩流',
  'ARENAS_HABITAT': '栖息地4',
  'KINGS_CANYON_ROTATION': '诸王峡谷',
  'ARENAS_PHASE_RUNNER': '相位穿梭器',
  'BROKEN_MOON_ROTATION': '破碎月球',
  'FREEDM_TDM_HABITAT': '栖息地(团队竞技)',
  'FREEDM_SWAT_HABITAT': '栖息地(死亡之眼-无护盾)',
  'CONTROL_CANYONLANDS_CAUSTIC': '诸王峡谷(控制)',
  'CONTROL_TROPICS_BAROMETER': '晴雨表(控制)',
  'FREEDM_TDM_SKULLTOWN': '骷髅镇(团队竞技)',
  'FREEDM_GUNGAME_WALL': '高墙(枪王)',
  'CONTROL_DESERTLANDS_SIPHON': '熔岩虹吸(枪王)',
  'FREEDM_TDM_OVERFLOW': '熔岩流(团队竞技)',
  'FREEDM_SWAT_OVERFLOW': '熔岩流(死亡之眼-无护盾)',
  'FREEDM_GUNGAME_SKULLTOWN': '骷髅镇(子弹时间)',
  'FREEDM_GUNGAME_ESTATES': '不动产(子弹时间)',
  'FREEDM_TDM_PHASE_RUNNER': '相位穿梭器(团队死斗)',
  'FREEDM_SWAT_PHASE_RUNNER': '相位穿梭器(死亡之眼-无护盾)',
  'BATTLE_ROYALE': '匹配',
  'ARENAS': '竞技场',
  'RANKED': '排位',
  'ARENASRANKED': '竞技场排位',
  'CONTROL': '控制',
  'FREENOM': '枪王模式',
  'LTM': '娱乐模式',
  'REVENANT': '亡灵',
  'CRYPTO': '密客',
  'HORIZON': '地平线',
  'GIBRALTAR': '直布罗陀',
  'WATTSON': '华森',
  'FUSE': '暴雷',
  'BANGALORE': '班加罗尔',
  'WRAITH': '恶灵',
  'OCTANE': '动力小子',
  'BLOODHOUND': '寻血猎犬',
  'CAUSTIC': '侵蚀',
  'LIFELINE': '命脉',
  'PATHFINDER': '探路者',
  'LOBA': '罗芭',
  'MIRAGE': '幻象',
  'RAMPART': '兰伯特',
  'VALKYRIE': '瓦尔基里',
  'SEER': '希尔',
  'ASH': '艾许',
  'MAD MAGGIE': '疯玛吉',
  'NEWCASTLE': '纽卡斯尔',
  'VANTAGE': '万蒂奇',
  'CATALYST': '卡特莉丝',
  'BALLISTIC': '弹道',
  'BR SEASON 15 KILLS': '第15赛季击杀数',
  'BR SEASON 15 WINS': '第15赛季胜场数',
  'BR SEASON 14 KILLS': '第14赛季击杀数',
  'BR SEASON 14 WINS': '第14赛季胜场数',
  'BR SEASON 13 KILLS': '第13赛季击杀数',
  'BR SEASON 13 WINS': '第13赛季胜场数',
  'BR SEASON 12 KILLS': '第12赛季击杀数',
  'BR SEASON 12 WINS': '第12赛季胜场数',
  'BR SEASON 11 KILLS': '第11赛季击杀数',
  'BR SEASON 11 WINS': '第11赛季胜场数',
  'BR SEASON 10 KILLS': '第10赛季击杀数',
  'BR SEASON 10 WINS': '第10赛季胜场数',
  'BR SEASON 9 KILLS': '第9赛季击杀数',
  'BR SEASON 9 WINS': '第9赛季胜场数',
  'BR SEASON 8 KILLS': '第8赛季击杀数',
  'BR SEASON 8 WINS': '第8赛季胜场数',
  'BR SEASON 7 KILLS': '第7赛季击杀数',
  'BR SEASON 7 WINS': '第7赛季胜场数',
  'BR SEASON 6 KILLS': '第6赛季击杀数',
  'BR SEASON 6 WINS': '第6赛季胜场数',
  'BR SEASON 5 KILLS': '第5赛季击杀数',
  'BR SEASON 5 WINS': '第5赛季胜场数',
  'BR SEASON 4 KILLS': '第4赛季击杀数',
  'BR SEASON 4 WINS': '第4赛季胜场数',
  'BR SEASON 3 KILLS': '第3赛季击杀数',
  'BR SEASON 3 WINS': '第3赛季胜场数',
  'BR SEASON 2 KILLS': '第2赛季击杀数',
  'BR SEASON 2 WINS': '第2赛季胜场数',
  'BR SEASON 1 KILLS': '第1赛季击杀数',
  'BR SEASON 1 WINS': '第1赛季胜场数',
  'SCOUT OF ACTION': '侦察行动',
  'SMOKE SHOW': '烟幕表演',
  'JACKSON\'S BOW OUT': '杰克逊的谢幕',
  'ARENAS WINS': '竞技场获胜数',
  'ARENAS KILLS': '竞技场击杀数',
  'ARENAS DAMAGE': '竞技场模式伤害',
  'BR SPECIAL EVENT WINS': '获胜数',
  'BR SPECIAL EVENT DAMAGE': '伤害数',
  'BR SPECIAL EVENT KILLS': '击杀数',
  'BR KILLS': '击杀数',
  'BR DAMAGE': '伤害',
  'BR WINS': '胜场数',
  'BR EXECUTIONS': '终结数',
  'BR KILLS AS KILL LEADER': '击杀王击杀数',
  'BR HEADSHOTS': '爆头数',
  'BR FINISHERS': '终结技次数',
  'BR REVIVES': '急救次数',
  'BR GAMES PLAYED': '已进行的游戏',
  'BR WINS WITH FULL SQUAD ALIVE': '无人阵亡胜场',
  'BR TOP 3': '前3次数',
  'BR AR KILLS': '突击步枪击杀数',
  'BR LMG KILLS': '轻机枪击杀数',
  'BR MARKSMAN KILLS': '神射手击杀数',
  'BR PISTOL KILLS': '手枪击杀数',
  'BR SHOTGUN KILLS': '霰弹枪击杀数',
  'BR SMG KILLS': '冲锋枪击杀数',
  'BR SNIPER KILLS': '狙击枪击杀数',
  'BR CARE PACKAGE WEAPON KILLS': '补给武器击杀数',
  'EYE: ENEMIES SCANNED': '扫描到敌人',
  'EYE: TRAPS SCANNED': '扫描到陷阱',
  'BEAST OF THE HUNT: KILLS': '击杀数',
  'DOME: DAMAGE BLOCKED': '阻挡的伤害',
  'BOMBARDMENT: KILLS': '轰炸击杀数',
  'GUNSHIELD: DAMAGE BLOCKED': '阻挡的伤害',
  'DOC DRONE: SQUADMATES REVIVED': '已复活成员',
  'DOC DRONE: HEALING': '无人机治疗量',
  'DROPPOD: ITEMS FOR SQUADMATES': '小队获得的物品',
  'GRAPPLE: TRAVEL DISTANCE': '抓钩移动距离',
  'ZIPLINE: TIMES USED BY SQUAD': '滑索使用次数',
  'SURVEY: BEACONS SCANNED': '扫描信标数',
  'VOICES: WARNINGS HEARD': '听到警告数',
  'INTO THE VOID: TIME': '踏入虚空',
  'RIFTS: SQUADMATES PHASED': '相位移动队友',
  'DOUBLE TIME: DISTANCE': '双倍时间距离',
  'SMOKE GRENADE: ENEMIES HIT': '烟雾弹击中数',
  'ROLLING THUNDER: DAMAGE': '雷声滚滚伤害',
  'GAS TRAP: TIMES ACTIVATED': '毒气触发数',
  'NOX: GAS DAMAGE DEALT': '毒气伤害',
  'NOX: GASSED ENEMIES KILLED': '毒气击杀数',
  'ENCORE: EXECUTIONS ESCAPED': '逃脱处决次数',
  'DECOYS CREATED': '制造诱饵',
  'BAMBOOZLES': '骗术成功次数',
  'STIM DISTANCE TRAVELED': '兴奋剂移动距离',
  'JUMP PAD ALLIES LAUNCHED': '跳板发射队友',
  'PASSIVE HEALTH REGENERATED': '被动恢复生命值',
  'BREACHES DETECTED': '检测到违规',
  'FRIENDLY SHIELDS CHARGED': '友方护盾已充能',
  'ENEMY ORDNANCE INTERCEPTED': '拦截敌方轰炸',
  'NEUROLINK: ENEMIES SCANNED': '扫描到敌人',
  'DRONE EMP: SHIELD DAMAGE': '护盾伤害',
  'DRONE EMP: DEVICES HIT': '设备命中',
  'SILENCE: ENEMIES SILENCED': '被静默的敌人',
  'SILENCE: SILENCED KNOCKDOWNS': '静默击倒',
  'DEATH TOTEM: ACTIVATIONS': '激活',
  'LOOT PINGED THROUGH WALLS': '透墙标记数',
  'METERS TELEPORTED': '传送距离',
  'LOOT TAKEN BY ALLIES': '队友得战利品数',
  'WALL: BULLETS AMPED': '强化子弹',
  'WALL: DAMAGE BLOCKED': '阻挡伤害',
  'TURRET: BULLETS FIRED': '发射子弹',
  'SPACEWALK: IMPACTS AVOIDED': '避免猛烈冲击',
  'GRAVITY LIFT: TEAMMATES LIFTED': '承载过的队友',
  'BLACK HOLE: DAMAGE DONE': '黑洞-伤害',
  'GRENADES: DISTANCE THROWN': '远距离投掷',
  'KNUCKLE CLUSTER: TOTAL HITS': '总命中次数',
  'MOTHERLOAD: ENEMIES CAPTURED': '捕获敌人数',
  'VTOL JETS: DISTANCE TRAVELLED': '移动距离累计',
  'MISSILE SWARM: ENEMIES HIT': '击中的敌人数',
  'SKYWARD DIVE: ALLIES REPOSITIONED': '移动队友次数',
  'HEART SEEKER: HEARTBEATS HEARD': '已听到心跳数',
  'FOCUS OF ATTENTION: ENEMIES HIT': '击中的敌人',
  'EXHIBIT: ENEMIES TRACKED': '追踪到的敌人',
  'MARKED FOR DEATH: ENEMIES MARKED': '标记敌人',
  'ARC SNARE: ENEMIES TETHERED': '绊索敌人',
  'PHASE BREACH: PLAYERS PHASED': '已传送玩家',
  'WARLORD\'S IRE: HIGHLIGHT TIME': '高亮时间',
  'RIOT DRILL: DRILL DISTANCE': '训练距离',
  'WRECKING BALL: BOOSTED TRAVEL DISTANCE': '提升移动距离',
  'RETRIEVE THE WOUNDED: REVIVE DISTANCE': '急救距离',
  'MOBILE SHIELD: DAMAGE BLOCKED': '阻挡的伤害',
  'CASTLE WALL: ALLIES RESCUED': '救援的盟友',
  'BRONZE': '青铜',
  'SILVER': '白银',
  'GOLD': '黄金',
  'PLATINUM': '白金',
  'DIAMOND': '钻石',
  'MASTER': '大师',
  'APEXPREDATOR': '猎杀',
  'UNRANKED': '无数据',
}
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
  private KD = ''
  private heroInfoList: SelectedDatum[] = []
  private style = {
    borderColor: '',
    fontColor: '#fff',
    onlineColor: '#39e87f',
    offlineColor: '#e34534',
  }

  private bgSvg = ''
  private KDSvg = ''
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
                       KD,

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
    this.KD = KD
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
    if (parseInt(this.KD) !== -1) {
      this.KDSvg = `<div class="info-line">
          K/D：<span class="val-color">${this.KD ?? '-'}</span> 
          </div>`
    }
    this.heroInfoList.map((item, i) => {
      if (i <= 4) {
        this.legendInfoSvg += `
              <div class="info-line">
                 ${dict[item.name] || item.name}：<span class="val-color">${item.value ?? '-'}</span> 
              </div>`
      }
      return null
    })
    if (this.heroInfoList.length < 3)
      this.legendInfoSvg += this.KDSvg
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
         text-shadow: 0 0 2px #f6f6f6;
        }
        .offline {
        font-size: 20px;
        color: ${this.style.offlineColor};
         text-shadow: 0 0 2px #f6f6f6;
        }
        .rank{
        width: 28%;
        display: flex;
        flex-direction: column;
        align-items: center;
         color: #ffc148;
         text-shadow: 0 0 2px #f6f6f6;
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
                 排位分：<span class="val-color">${this.rankScore ?? '-'}</span> 
              </div>
              <div class="info-line">
                 总击杀：<span class="val-color">${this.totalkills ?? '-'}</span> 
              </div>
              <div class="info-line">
                 总伤害：<span class="val-color">${this.totalDamage ?? '-'}</span> 
              </div>
          </div>
          <div class="rank">
           <span class="level">LV.${this.level ?? '-'} (${this.upRate ?? '-'}%)</span> 
          <img class="rank-img" src="${PNG_PREFIX + this.rankImg}" alt="rankImg"></img>
          <div>${dict[this.rankName] || this.rankName} ${dict[this.rankDiv] || ''}</div>
          </div>
            <div class="legend-info">
              <div class="info-line">
                 当前英雄: <div style="color: #1ccee7;text-shadow: 0 0 2px #f6f6f6;margin-left: 8px">${dict[this.selectedHero] || this.selectedHero}</div>
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
