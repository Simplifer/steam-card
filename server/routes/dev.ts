import { imageUrl2Base64 } from 'server/core/utils'
const dict = {
  'worlds_edge_rotation': '世界尽头',
  'storm_point_rotation': '风暴点',
  'arenas_encore': '再来一次',
  'arenas_party_crasher': '派对破坏者',
  'caustic_tt_rotation': '毒气室',
  'hammond_labs_rotation': '哈蒙德实验室',
  'olympus_rotation': '奥林匹斯',
  'arenas_composite': '原料厂',
  'arenas_overflow': '熔岩流',
  'arenas_habitat': '栖息地4',
  'kings_canyon_rotation': '诸王峡谷',
  'arenas_phase_runner': '相位穿梭器',
  'broken_moon_rotation': '破碎月球',
  'freedm_tdm_habitat': '栖息地(团队竞技)',
  'freedm_swat_habitat': '栖息地(死亡之眼-无护盾)',
  'control_canyonlands_caustic': '诸王峡谷(控制)',
  'control_tropics_barometer': '晴雨表(控制)',
  'freedm_tdm_skulltown': '骷髅镇(团队竞技)',
  'freedm_gungame_wall': '高墙(枪王)',
  'control_desertlands_siphon': '熔岩虹吸(枪王)',
  'freedm_tdm_overflow': '熔岩流(团队竞技)',
  'freedm_swat_overflow': '熔岩流(死亡之眼-无护盾)',
  'freedm_gungame_skulltown': '骷髅镇(子弹时间)',
  'freedm_gungame_estates': '不动产(子弹时间)',
  'freedm_tdm_phase_runner': '相位穿梭器(团队死斗)',
  'freedm_swat_phase_runner': '相位穿梭器(死亡之眼-无护盾)',
  'battle_royale': '匹配',
  'arenas': '竞技场',
  'ranked': '排位',
  'arenasRanked': '竞技场排位',
  'control': '控制',
  'freenom': '枪王模式',
  'ltm': '娱乐模式',
  'Revenant': '亡灵',
  'Crypto': '密客',
  'Horizon': '地平线',
  'Gibraltar': '直布罗陀',
  'Wattson': '华森',
  'Fuse': '暴雷',
  'Bangalore': '班加罗尔',
  'Wraith': '恶灵',
  'Octane': '动力小子',
  'Bloodhound': '寻血猎犬',
  'Caustic': '侵蚀',
  'Lifeline': '命脉',
  'Pathfinder': '探路者',
  'Loba': '罗芭',
  'Mirage': '幻象',
  'Rampart': '兰伯特',
  'Valkyrie': '瓦尔基里',
  'Seer': '希尔',
  'Ash': '艾许',
  'Mad Maggie': '疯玛吉',
  'Newcastle': '纽卡斯尔',
  'Vantage': '万蒂奇',
  'Catalyst': '卡特莉丝',
  'Ballistic': '弹道',
  'BR Season 15 kills': '第15赛季击杀数',
  'BR Season 15 wins': '第15赛季胜场数',
  'BR Season 14 kills': '第14赛季击杀数',
  'BR Season 14 wins': '第14赛季胜场数',
  'BR Season 13 kills': '第13赛季击杀数',
  'BR Season 13 wins': '第13赛季胜场数',
  'BR Season 12 kills': '第12赛季击杀数',
  'BR Season 12 wins': '第12赛季胜场数',
  'BR Season 11 kills': '第11赛季击杀数',
  'BR Season 11 wins': '第11赛季胜场数',
  'BR Season 10 kills': '第10赛季击杀数',
  'BR Season 10 wins': '第10赛季胜场数',
  'BR Season 9 kills': '第9赛季击杀数',
  'BR Season 9 wins': '第9赛季胜场数',
  'BR Season 8 kills': '第8赛季击杀数',
  'BR Season 8 wins': '第8赛季胜场数',
  'BR Season 7 kills': '第7赛季击杀数',
  'BR Season 7 wins': '第7赛季胜场数',
  'BR Season 6 kills': '第6赛季击杀数',
  'BR Season 6 wins': '第6赛季胜场数',
  'BR Season 5 kills': '第5赛季击杀数',
  'BR Season 5 wins': '第5赛季胜场数',
  'BR Season 4 kills': '第4赛季击杀数',
  'BR Season 4 wins': '第4赛季胜场数',
  'BR Season 3 kills': '第3赛季击杀数',
  'BR Season 3 wins': '第3赛季胜场数',
  'BR Season 2 kills': '第2赛季击杀数',
  'BR Season 2 wins': '第2赛季胜场数',
  'BR Season 1 kills': '第1赛季击杀数',
  'BR Season 1 wins': '第1赛季胜场数',

  'Scout of Action': '侦察行动',
  'Smoke Show': '烟幕表演',
  'Jackson\'s Bow Out': '杰克逊的谢幕',
  'Arenas Wins': '竞技场获胜数',
  'Arenas Kills': '竞技场击杀数',
  'Arenas Damage': '竞技场模式伤害',
  'BR Special event wins': '获胜数',
  'BR Special event damage': '伤害数',
  'BR Special event kills': '击杀数',
  'BR Kills': '击杀数',
  'BR Damage': '伤害',
  'BR Wins': '胜场数',
  'BR Executions': '终结数',
  'BR Kills as Kill Leader': '击杀王击杀数',
  'BR Headshots': '爆头数',
  'BR Finishers': '终结技次数',
  'BR Revives': '急救次数',
  'BR Games Played': '已进行的游戏',
  'BR Wins with Full Squad Alive': '无人阵亡胜场',
  'BR Top 3': '前3次数',
  'BR AR kills': '突击步枪击杀数',
  'BR LMG kills': '轻机枪击杀数',
  'BR Marksman kills': '神射手击杀数',
  'BR Pistol kills': '手枪击杀数',
  'BR Shotgun kills': '霰弹枪击杀数',
  'BR SMG kills': '冲锋枪击杀数',
  'BR Sniper kills': '狙击枪击杀数',
  'BR Care Package Weapon kills': '补给武器击杀数',

  'Eye: Enemies Scanned': '扫描到敌人',
  'Eye: Traps Scanned': '扫描到陷阱',
  'Beast of the Hunt: Kills': '击杀数',

  'Dome: Damage Blocked': '阻挡的伤害',
  'Bombardment: Kills': '轰炸击杀数',
  'GunShield: Damage Blocked': '阻挡的伤害',

  'D.O.C. Drone: Squadmates Revived': '已复活成员',
  'D.O.C. Drone: Healing': '无人机治疗量',
  'Droppod: Items for Squadmates': '小队获得的物品',

  'Grapple: Travel Distance': '抓钩移动距离',
  'Zipline: Times used by Squad': '滑索使用次数',
  'Survey: Beacons Scanned': '扫描信标数',

  'Voices: Warnings Heard': '听到警告数',
  'Into the void: Time': '踏入虚空',
  'Rifts: Squadmates Phased': '相位移动队友',

  'Double Time: Distance': '双倍时间距离',
  'Smoke Grenade: Enemies Hit': '烟雾弹击中数',
  'Rolling Thunder: Damage': '雷声滚滚伤害',

  'Gas Trap: Times Activated': '毒气触发数',
  'NOX: Gas Damage Dealt': '毒气伤害',
  'NOX: Gassed Enemies Killed': '毒气击杀数',

  'Encore: Executions Escaped': '逃脱处决次数',
  'Decoys Created': '制造诱饵',
  'Bamboozles': '骗术成功次数',

  'Stim Distance Traveled': '兴奋剂移动距离',
  'Jump Pad Allies Launched': '跳板发射队友',
  'Passive Health Regenerated': '被动恢复生命值',

  'Breaches Detected': '检测到违规',
  'Friendly Shields Charged': '友方护盾已充能',
  'Enemy Ordnance Intercepted': '拦截敌方轰炸',

  'Neurolink: Enemies Scanned': '扫描到敌人',
  'Drone EMP: Shield Damage': '护盾伤害',
  'Drone EMP: Devices Hit': '设备命中',

  'Silence: Enemies Silenced': '被静默的敌人',
  'Silence: Silenced Knockdowns': '静默击倒',
  'Death Totem: Activations': '激活',

  'Loot Pinged Through Walls': '透墙标记数',
  'Meters Teleported': '传送距离',
  'Loot Taken by Allies': '队友得战利品数',

  'Wall: Bullets Amped': '强化子弹',
  'Wall: Damage Blocked': '阻挡伤害',
  'Turret: Bullets Fired': '发射子弹',

  'Spacewalk: Impacts Avoided': '避免猛烈冲击',
  'Gravity Lift: Teammates Lifted': '承载过的队友',
  'Black Hole: Damage Done': '黑洞-伤害',

  'Grenades: Distance Thrown': '远距离投掷',
  'Knuckle Cluster: Total Hits': '总命中次数',
  'Motherload: Enemies Captured': '捕获敌人数',

  'VTOL Jets: Distance Travelled': '移动距离累计',
  'Missile Swarm: Enemies Hit': '击中的敌人数',
  'Skyward Dive: Allies Repositioned': '移动队友次数',

  'Heart Seeker: Heartbeats Heard': '已听到心跳数',
  'Focus of Attention: Enemies Hit': '击中的敌人',
  'Exhibit: Enemies Tracked': '追踪到的敌人',

  'Marked for Death: Enemies Marked': '标记敌人',
  'Arc Snare: Enemies Tethered': '绊索敌人',
  'Phase Breach: Players Phased': '已传送玩家',

  'Warlord\'s Ire: Highlight Time': '高亮时间',
  'Riot Drill: Drill Distance': '训练距离',
  'Wrecking Ball: Boosted Travel Distance': '提升移动距离',

  'Retrieve the Wounded: Revive Distance': '急救距离',
  'Mobile Shield: Damage Blocked': '阻挡的伤害',
  'Castle Wall: Allies Rescued': '救援的盟友',
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
}
export default defineEventHandler(async (event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')
  setHeader(event, 'Content-Type', 'image/svg+xml')
  const PNG_PREFIX = 'data:image/png;base64,'
  const style = {
    fontColor: 'rgba(255,255,255,0.8)',
    onlineColor: '#4ce78a',
    offlineColor: '#e74c3c',
  }
  const HeroImg = 'https://api.mozambiquehe.re/assets/banners/lifeline.jpg'
  const bgSvg = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImg}) no-repeat center`
  const level = 500
  const upRate = '59%'
  const rankScore = 100
  const rankName = '青铜'
  const rankDiv = 'IV'
  const totalkills = 1000
  const totalDamage = 100000
  const rankImg = await imageUrl2Base64('https://api.mozambiquehe.re/assets/ranks/bronze1.png')
  const selectedHero = '命脉'
  const name = 'test'
  const isOnline = 1
  const isInGame = 1
  let onlineText: string
  let onlineClassName: string
  const legendData = [{
    name: 'BR Kills',
    value: 1020,
    key: 'specialEvent_kills',
    global: false,
  },
  {
    name: 'DOC drone: Healing',
    value: 122525,
    key: 'doc_drone_healing',
    global: false,
  },
  {
    name: 'BR Damage',
    value: 407515,
    key: 'specialEvent_damage',
    global: false,
  }]

  if (isOnline > 0) {
    onlineText = `在线（大厅中）`
    onlineClassName = 'online'
  }
  else {
    onlineText = '离线'
    onlineClassName = 'offline'
  }
  const onlineSvg = `<span  class="${onlineClassName}">${onlineText}</span>`

  return `
  <svg width="800" height="340" xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg">
    <style>
        .card {
        color: ${style.fontColor};
        background: ${bgSvg};
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
        color: ${style.onlineColor};
        }

        .offline {
        font-size: 20px;
        color: ${style.offlineColor};
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
                 <span style="font-size: 26px;margin-right: 10px"> ${name}</span>  ${onlineSvg}
              </div>
              <div class="info-line">
                 排位分：<span class="val-color">${rankScore || '-'}</span> 
              </div>
              <div class="info-line">
                 总击杀：<span class="val-color">${totalkills || '-'}</span> 
              </div>
              <div class="info-line">
                 总伤害：<span class="val-color">${totalDamage || '-'}</span> 
              </div>
          </div>
          <div class="rank">
           <span class="level">LV.${level || '-'} (${upRate})</span> 
          <img class="rank-img" src="${PNG_PREFIX + rankImg}" alt="rankImg"></img>
          <div>${rankName} ${rankDiv}</div>
          </div>
            <div class="legend-info">
              <div class="info-line">
                 当前英雄: <div style="color: #35abe5;margin-left: 8px">${selectedHero}</div>
              </div>
              <div class="info-line">
                 被动恢复生命值：<span class="val-color">${rankScore || '-'}</span> 
              </div>
              <div class="info-line">
                 被动恢复生命值：<span class="val-color">${totalkills || '-'}</span> 
              </div>
              <div class="info-line">
                 被动恢复生命值：<span class="val-color">${totalDamage || '-'}</span> 
              </div>
              <div class="info-line">
                 被动恢复生命值：<span class="val-color">${totalDamage || '-'}</span> 
              </div>
          </div>
      </div>
    </foreignObject>
  </svg>  
 `
})
