export const gamemodeList = [
  {
    uuid: '--',
    displayName: '排位',
    name: 'Competitive',
    displayIcon: 'https://media.valorant-api.com/gamemodes/96bd3920-4f36-d026-2b28-c683eb0bcac5/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/Bomb/BombGameMode_PrimaryAsset',
  }, {
    uuid: '96bd3920-4f36-d026-2b28-c683eb0bcac5',
    displayName: '标准',
    name: 'Standard',
    duration: '30至40分钟',
    economyType: null,
    allowsMatchTimeouts: true,
    isTeamVoiceAllowed: true,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: -1,
    teamRoles: null,
    gameFeatureOverrides: null,
    gameRuleBoolOverrides: null,
    displayIcon: 'https://media.valorant-api.com/gamemodes/96bd3920-4f36-d026-2b28-c683eb0bcac5/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/Bomb/BombGameMode_PrimaryAsset',
  }, {
    uuid: '96bd3920-4f36-d026-2b28-c683eb0bcac5',
    displayName: '标准',
    name: 'Unrated',
    duration: '30至40分钟',
    economyType: null,
    allowsMatchTimeouts: true,
    isTeamVoiceAllowed: true,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: -1,
    teamRoles: null,
    gameFeatureOverrides: null,
    gameRuleBoolOverrides: null,
    displayIcon: 'https://media.valorant-api.com/gamemodes/96bd3920-4f36-d026-2b28-c683eb0bcac5/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/Bomb/BombGameMode_PrimaryAsset',
  }, {
    uuid: '96bd3920-4f36-d026-2b28-c683eb0bcac5',
    displayName: '标准',
    name: 'Normals',
    duration: '30至40分钟',
    economyType: null,
    allowsMatchTimeouts: true,
    isTeamVoiceAllowed: true,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: -1,
    teamRoles: null,
    gameFeatureOverrides: null,
    gameRuleBoolOverrides: null,
    displayIcon: 'https://media.valorant-api.com/gamemodes/96bd3920-4f36-d026-2b28-c683eb0bcac5/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/Bomb/BombGameMode_PrimaryAsset',
  }, {
    uuid: 'a8790ec5-4237-f2f0-e93b-08a8e89865b2',
    displayName: '乱斗模式',
    name: 'Deathmatch',
    duration: '7至9分钟',
    economyType: 'EEconomyTypes::Other',
    allowsMatchTimeouts: false,
    isTeamVoiceAllowed: false,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: -1,
    teamRoles: ['EAresTeamRole::FreeForAll'],
    gameFeatureOverrides: [{
      featureName: 'EGameFeatureToggleName::ReuseActorOnRespawn',
      state: true,
    }, {
      featureName: 'EGameFeatureToggleName::AllowShoppingWhileDead',
      state: true,
    }],
    gameRuleBoolOverrides: [{
      ruleName: 'EGameRuleBoolName::CombatReportOnlyShowLastLife',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::AssignRandomAgents',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::SkipPregame',
      state: true,
    }],
    displayIcon: 'https://media.valorant-api.com/gamemodes/a8790ec5-4237-f2f0-e93b-08a8e89865b2/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/Deathmatch/DeathmatchGameMode_PrimaryAsset',
  }, {
    uuid: 'a4ed6518-4741-6dcb-35bd-f884aecdc859',
    displayName: '武装升级',
    name: 'Escalation',
    duration: '7至9分钟',
    economyType: 'EEconomyTypes::Other',
    allowsMatchTimeouts: false,
    isTeamVoiceAllowed: true,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: -1,
    teamRoles: null,
    gameFeatureOverrides: [{
      featureName: 'EGameFeatureToggleName::DeathmatchEncourageFarSpawning',
      state: false,
    }],
    gameRuleBoolOverrides: [{
      ruleName: 'EGameRuleBoolName::AssignRandomAgents',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::SkipPregame',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::CombatReportOnlyShowLastLife',
      state: true,
    }],
    displayIcon: 'https://media.valorant-api.com/gamemodes/a4ed6518-4741-6dcb-35bd-f884aecdc859/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/GunGame/GunGameTeamsGameMode_PrimaryAsset',
  }, {
    uuid: 'e086db66-47fd-e791-ca81-06a645ac7661',
    displayName: '团队乱斗',
    name: 'Team Deathmatch',
    duration: '8-10分钟',
    economyType: 'EEconomyTypes::Other',
    allowsMatchTimeouts: false,
    isTeamVoiceAllowed: true,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: -1,
    teamRoles: null,
    gameFeatureOverrides: [{
      featureName: 'EGameFeatureToggleName::AllowShoppingWhileDead',
      state: true,
    }, {
      featureName: 'EGameFeatureToggleName::ReuseActorOnRespawn',
      state: true,
    }, {
      featureName: 'EGameFeatureToggleName::EquippableCacheRecycling',
      state: true,
    }, {
      featureName: 'EGameFeatureToggleName::UseMeshMaterialManager',
      state: true,
    }, {
      featureName: 'EGameFeatureToggleName::DisableFogOfWar',
      state: true,
    }],
    gameRuleBoolOverrides: [{
      ruleName: 'EGameRuleBoolName::DestroyAbilitiesOnDeath',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::PipAbilityCasting',
      state: false,
    }, {
      ruleName: 'EGameRuleBoolName::CombatReportOnlyShowLastLife',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::PreventAbilityRecharge',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::UseAllAbilityCooldowns',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::DownedCharactersCanGiveUp',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::UseInDevWeapons',
      state: true,
    }],
    displayIcon: 'https://media.valorant-api.com/gamemodes/e086db66-47fd-e791-ca81-06a645ac7661/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/HURM/HURM_PrimaryAsset',
  }, {
    uuid: 'd2b4e425-4cab-8d95-eb26-bb9b444551dc',
    displayName: '初始训练',
    name: 'Onboarding',
    duration: null,
    economyType: null,
    allowsMatchTimeouts: false,
    isTeamVoiceAllowed: true,
    isMinimapHidden: true,
    orbCount: 1,
    roundsPerHalf: -1,
    teamRoles: null,
    gameFeatureOverrides: null,
    gameRuleBoolOverrides: null,
    displayIcon: null,
    assetPath: 'ShooterGame/Content/GameModes/NewPlayerExperience/NPEGameMode_PrimaryAsset',
  }, {
    uuid: '4744698a-4513-dc96-9c22-a9aa437e4a58',
    displayName: '克隆模式',
    name: 'Replication',
    duration: '10至15分钟',
    economyType: null,
    allowsMatchTimeouts: false,
    isTeamVoiceAllowed: true,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: 4,
    teamRoles: null,
    gameFeatureOverrides: null,
    gameRuleBoolOverrides: [{
      ruleName: 'EGameRuleBoolName::MajorityVoteAgents',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::IsOvertimeWinByTwo',
      state: false,
    }],
    displayIcon: 'https://media.valorant-api.com/gamemodes/4744698a-4513-dc96-9c22-a9aa437e4a58/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/OneForAll/OneForAll_GameMode_DataAsset_Desktop',
  }, {
    uuid: 'e921d1e6-416b-c31f-1291-74930c330b7b',
    displayName: '爆能快攻',
    name: 'Spike Rush',
    duration: '8至12分钟',
    economyType: null,
    allowsMatchTimeouts: false,
    isTeamVoiceAllowed: true,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: 3,
    teamRoles: null,
    gameFeatureOverrides: null,
    gameRuleBoolOverrides: null,
    displayIcon: 'https://media.valorant-api.com/gamemodes/e921d1e6-416b-c31f-1291-74930c330b7b/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/QuickBomb/QuickBombGameMode_PrimaryAsset',
  }, {
    uuid: 'e2dc3878-4fe5-d132-28f8-3d8c259efcc6',
    displayName: '练习',
    name: 'PRACTICE',
    duration: null,
    economyType: null,
    allowsMatchTimeouts: false,
    isTeamVoiceAllowed: true,
    isMinimapHidden: true,
    orbCount: 1,
    roundsPerHalf: -1,
    teamRoles: null,
    gameFeatureOverrides: null,
    gameRuleBoolOverrides: null,
    displayIcon: null,
    assetPath: 'ShooterGame/Content/GameModes/ShootingRange/ShootingRangeGameMode_PrimaryAsset',
  }, {
    uuid: '57038d6d-49b1-3a74-c5ef-3395d9f23a97',
    displayName: '雪球大战',
    name: 'Snowball Fight',
    duration: '5-7分钟',
    economyType: null,
    allowsMatchTimeouts: false,
    isTeamVoiceAllowed: true,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: -1,
    teamRoles: ['EAresTeamRole::Attacker', 'EAresTeamRole::Defender'],
    gameFeatureOverrides: [{
      featureName: 'EGameFeatureToggleName::DeathmatchEncourageFarSpawning',
      state: false,
    }],
    gameRuleBoolOverrides: [{
      ruleName: 'EGameRuleBoolName::AssignRandomAgents',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::SkipPregame',
      state: true,
    }, {
      ruleName: 'EGameRuleBoolName::CombatReportOnlyShowLastLife',
      state: true,
    }],
    displayIcon: 'https://media.valorant-api.com/gamemodes/57038d6d-49b1-3a74-c5ef-3395d9f23a97/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/SnowballFight/SnowballFightGameMode_PrimaryAsset',
  }, {
    uuid: '5d0f264b-4ebe-cc63-c147-809e1374484b',
    displayName: '闪击',
    name: 'Swiftplay',
    duration: '10至15分钟',
    economyType: null,
    allowsMatchTimeouts: false,
    isTeamVoiceAllowed: true,
    isMinimapHidden: false,
    orbCount: 1,
    roundsPerHalf: 4,
    teamRoles: null,
    gameFeatureOverrides: null,
    gameRuleBoolOverrides: [{
      ruleName: 'EGameRuleBoolName::IsOvertimeWinByTwo',
      state: false,
    }],
    displayIcon: 'https://media.valorant-api.com/gamemodes/5d0f264b-4ebe-cc63-c147-809e1374484b/displayicon.png',
    assetPath: 'ShooterGame/Content/GameModes/_Development/Swiftplay_EndOfRoundCredits/SwiftPlay_GameMode_PrimaryAsset',
  }]

export const mapList = [
  {
    uuid: '7eaecc1b-4337-bbf6-6ab9-04b8f06b3319',
    displayName: '亚海悬城',
    narrativeDescription: 'An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.',
    tacticalDescription: 'A/B Sites',
    coordinates: '45°26\'BF\'N,12°20\'Q\'E',
    displayIcon: 'https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Ascent/Ascent_PrimaryAsset',
    mapUrl: '/Game/Maps/Ascent/Ascent',
    xMultiplier: 7e-05,
    yMultiplier: -7e-05,
    xScalarToAdd: 0.813895,
    yScalarToAdd: 0.573242,
    callouts: [{
      regionName: '树木',
      superRegionName: 'A区',
      location: {
        x: 3980.9062,
        y: -5938.758,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'A区',
      location: {
        x: 4489.032,
        y: -3014.0515,
      },
    }, {
      regionName: '大道',
      superRegionName: 'A区',
      location: {
        x: 5321.6206,
        y: -4710.1274,
      },
    }, {
      regionName: '窗户',
      superRegionName: 'A区',
      location: {
        x: 4023.0244,
        y: -8180.692,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'A区',
      location: {
        x: 6153.585,
        y: -6626.2114,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: 60,
        y: 50,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'B区',
      location: {
        x: -1490.5864,
        y: -1389.9706,
      },
    }, {
      regionName: '大道',
      superRegionName: 'B区',
      location: {
        x: -1983.6713,
        y: -5840.8125,
      },
    }, {
      regionName: '船屋',
      superRegionName: 'B区',
      location: {
        x: -4484.774,
        y: -7763.3584,
      },
    }, {
      regionName: '坡底',
      superRegionName: '中区',
      location: {
        x: 1122.2262,
        y: -5951.704,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'B区',
      location: {
        x: -2344.065,
        y: -7548.511,
      },
    }, {
      regionName: '窄道',
      superRegionName: '中区',
      location: {
        x: 2315.7944,
        y: -4127.2554,
      },
    }, {
      regionName: '小房间',
      superRegionName: '中区',
      location: {
        x: 3387.3167,
        y: -5129.764,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 1995.2354,
        y: -9744.923,
      },
    }, {
      regionName: '花园',
      superRegionName: 'A区',
      location: {
        x: 3773.6653,
        y: -7551.3535,
      },
    }, {
      regionName: '市场',
      superRegionName: '中区',
      location: {
        x: 1089.1044,
        y: -7363.1914,
      },
    }, {
      regionName: '院子',
      superRegionName: '中区',
      location: {
        x: 1222.7029,
        y: -4586.6,
      },
    }, {
      regionName: '小道',
      superRegionName: '中区',
      location: {
        x: -632.0929,
        y: -4280.2573,
      },
    }, {
      regionName: '比萨',
      superRegionName: '中区',
      location: {
        x: 1801.5667,
        y: -7262.1704,
      },
    }, {
      regionName: '高台',
      superRegionName: 'A区',
      location: {
        x: 6129.893,
        y: -8210,
      },
    }, {
      regionName: '坡顶',
      superRegionName: '中区',
      location: {
        x: 2753.9297,
        y: -2129.6155,
      },
    }, {
      regionName: '酒庄',
      superRegionName: 'A区',
      location: {
        x: 7358.7407,
        y: -4689.2705,
      },
    }],
  },
  {
    uuid: 'd960549e-485c-e861-8d71-aa9d1aed12a2',
    displayName: '霓虹町',
    narrativeDescription: 'If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.',
    tacticalDescription: 'A/B Sites',
    coordinates: '35°41\'CD\'N,139°41\'WX\'E',
    displayIcon: 'https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Bonsai/Bonsai_PrimaryAsset',
    mapUrl: '/Game/Maps/Bonsai/Bonsai',
    xMultiplier: 7.8e-05,
    yMultiplier: -7.8e-05,
    xScalarToAdd: 0.842188,
    yScalarToAdd: 0.697578,
    callouts: [{
      regionName: '后房',
      superRegionName: 'A区',
      location: {
        x: 7345.049,
        y: -7858.0405,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'A区',
      location: {
        x: 6814.217,
        y: -2457.7468,
      },
    }, {
      regionName: '大道',
      superRegionName: 'A区',
      location: {
        x: 6279.9795,
        y: -4492.833,
      },
    }, {
      regionName: '高台',
      superRegionName: 'A区',
      location: {
        x: 5434.726,
        y: -6258.442,
      },
    }, {
      regionName: '坡道',
      superRegionName: 'A区',
      location: {
        x: 4330,
        y: -4750,
      },
    }, {
      regionName: '屏幕',
      superRegionName: 'A区',
      location: {
        x: 5648.7144,
        y: -8868.611,
      },
    }, {
      regionName: '下水道',
      superRegionName: 'A区',
      location: {
        x: 4862.6064,
        y: -2367.2578,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'A区',
      location: {
        x: 6588.6597,
        y: -6761.131,
      },
    }, {
      regionName: '塔楼',
      superRegionName: 'A区',
      location: {
        x: 4636.7925,
        y: -6748.2334,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: 1901.97,
        y: 59.588867,
      },
    }, {
      regionName: '小巷',
      superRegionName: 'B区',
      location: {
        x: -1158.0048,
        y: -8066.301,
      },
    }, {
      regionName: '后房',
      superRegionName: 'B区',
      location: {
        x: -3107.181,
        y: -7417.2607,
      },
    }, {
      regionName: '小道',
      superRegionName: 'B区',
      location: {
        x: -27.670135,
        y: -2369.784,
      },
    }, {
      regionName: '车库',
      superRegionName: 'B区',
      location: {
        x: -2190.7827,
        y: -3848.0293,
      },
    }, {
      regionName: '高台',
      superRegionName: 'B区',
      location: {
        x: -637.1397,
        y: -6070.6167,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'B区',
      location: {
        x: -2167.2456,
        y: -6264.7715,
      },
    }, {
      regionName: '台阶',
      superRegionName: 'B区',
      location: {
        x: 1061.493,
        y: -6760.976,
      },
    }, {
      regionName: '塔楼',
      superRegionName: 'B区',
      location: {
        x: 168.89589,
        y: -5290.194,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'B区',
      location: {
        x: -1271.6421,
        y: -1983.6248,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 2142.3635,
        y: -8964.969,
      },
    }, {
      regionName: '坡底',
      superRegionName: '中区',
      location: {
        x: 1922.6552,
        y: -2899.4626,
      },
    }, {
      regionName: '邮箱',
      superRegionName: '中区',
      location: {
        x: 1155.3333,
        y: -4808.6436,
      },
    }, {
      regionName: '坡顶',
      superRegionName: '中区',
      location: {
        x: 2021.9575,
        y: -4596.936,
      },
    }, {
      regionName: '通风口',
      superRegionName: '中区',
      location: {
        x: 3155.1648,
        y: -5338.5215,
      },
    }],
  },
  {
    uuid: 'b529448b-4d60-346e-e89e-00a4c527a405',
    displayName: '裂变峡谷',
    narrativeDescription: 'A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.',
    tacticalDescription: 'A/B Sites',
    coordinates: '35°48\'BI"N 106°08\'YQ"W',
    displayIcon: 'https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Canyon/Canyon_PrimaryAsset',
    mapUrl: '/Game/Maps/Canyon/Canyon',
    xMultiplier: 7.8e-05,
    yMultiplier: -7.8e-05,
    xScalarToAdd: 0.556952,
    yScalarToAdd: 1.155886,
    callouts: [{
      regionName: '桥',
      superRegionName: '攻方',
      location: {
        x: 13204,
        y: -756,
      },
    }, {
      regionName: '长椅',
      superRegionName: 'B区',
      location: {
        x: 11473,
        y: -2897,
      },
    }, {
      regionName: '拱廊',
      superRegionName: 'B区',
      location: {
        x: 10181,
        y: -4179,
      },
    }, {
      regionName: '塔楼',
      superRegionName: 'B区',
      location: {
        x: 9155,
        y: -5601,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'B区',
      location: {
        x: 8178,
        y: -5942,
      },
    }, {
      regionName: '发电机',
      superRegionName: 'B区',
      location: {
        x: 8362,
        y: -3380,
      },
    }, {
      regionName: '小道',
      superRegionName: 'B区',
      location: {
        x: 9198,
        y: -2741,
      },
    }, {
      regionName: '餐厅',
      superRegionName: 'B区',
      location: {
        x: 7111,
        y: -3138,
      },
    }, {
      regionName: '小道',
      superRegionName: 'A区',
      location: {
        x: 8578,
        y: 1302,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 9156,
        y: -677,
      },
    }, {
      regionName: '大道',
      superRegionName: 'B区',
      location: {
        x: 5967,
        y: -5343,
      },
    }, {
      regionName: '树木',
      superRegionName: 'B区',
      location: {
        x: 4965,
        y: -4109,
      },
    }, {
      regionName: '隧道',
      superRegionName: 'B区',
      location: {
        x: 7402,
        y: -4058,
      },
    }, {
      regionName: '大堂',
      superRegionName: 'A区',
      location: {
        x: 5063.5464,
        y: 2057.6648,
      },
    }, {
      regionName: '门',
      superRegionName: 'A区',
      location: {
        x: 5807.855,
        y: 1940.4603,
      },
    }, {
      regionName: '绳索',
      superRegionName: 'A区',
      location: {
        x: 6638.828,
        y: 1052.6461,
      },
    }, {
      regionName: '大道',
      superRegionName: 'A区',
      location: {
        x: 5878.792,
        y: 3450.9639,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'A区',
      location: {
        x: 8125.7627,
        y: 3373.7861,
      },
    }, {
      regionName: '下坡',
      superRegionName: 'A区',
      location: {
        x: 9306.803,
        y: 2826.1626,
      },
    }, {
      regionName: '卫星天线',
      superRegionName: 'A区',
      location: {
        x: 11296.665,
        y: 1391.7144,
      },
    }, {
      regionName: '大门',
      superRegionName: 'A区',
      location: {
        x: 12962,
        y: 1565,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: 4345.554,
        y: -948.4505,
      },
    }],
  },
  {
    uuid: '2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba',
    displayName: '源工重镇',
    narrativeDescription: 'Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.',
    tacticalDescription: 'A/B Sites',
    coordinates: '34°2\'A\'N,6°51\'Z\'W',
    displayIcon: 'https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Duality/Duality_PrimaryAsset',
    mapUrl: '/Game/Maps/Duality/Duality',
    xMultiplier: 5.9e-05,
    yMultiplier: -5.9e-05,
    xScalarToAdd: 0.576941,
    yScalarToAdd: 0.967566,
    callouts: [{
      regionName: '出口',
      superRegionName: 'A区',
      location: {
        x: 7550.4106,
        y: 5874.497,
      },
    }, {
      regionName: '小道',
      superRegionName: 'A区',
      location: {
        x: 6365.635,
        y: -1007.0208,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'A区',
      location: {
        x: 6113.239,
        y: 3158.823,
      },
    }, {
      regionName: '短道',
      superRegionName: 'A区',
      location: {
        x: 7983.3467,
        y: 803.96063,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'A区',
      location: {
        x: 10747.902,
        y: 2664.4436,
      },
    }, {
      regionName: '传送器',
      superRegionName: 'A区',
      location: {
        x: 9432.303,
        y: 489.8803,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: 161.64832,
        y: 77.51108,
      },
    }, {
      regionName: '出口',
      superRegionName: 'B区',
      location: {
        x: 8921.412,
        y: -1763.2295,
      },
    }, {
      regionName: '大堂',
      superRegionName: 'B区',
      location: {
        x: 12981.879,
        y: -4941.7544,
      },
    }, {
      regionName: '小道',
      superRegionName: 'B区',
      location: {
        x: 6361.57,
        y: -2621.1829,
      },
    }, {
      regionName: '喷泉',
      superRegionName: 'B区',
      location: {
        x: 5737.1484,
        y: -5390.446,
      },
    }, {
      regionName: '长道',
      superRegionName: 'B区',
      location: {
        x: 7666.669,
        y: -6512.8022,
      },
    }, {
      regionName: '短道',
      superRegionName: 'B区',
      location: {
        x: 7424.1313,
        y: -3056.4531,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'B区',
      location: {
        x: 11108.108,
        y: -4831.4585,
      },
    }, {
      regionName: '传送器',
      superRegionName: 'B区',
      location: {
        x: 9027.776,
        y: -7223.8066,
      },
    }, {
      regionName: '窗户',
      superRegionName: 'B区',
      location: {
        x: 8826.788,
        y: -4309.4116,
      },
    }, {
      regionName: '澡堂',
      superRegionName: 'A区',
      location: {
        x: 9106.541,
        y: 4449.6587,
      },
    }, {
      regionName: '洞',
      superRegionName: '攻方',
      location: {
        x: 3920.3887,
        y: 256.94193,
      },
    }, {
      regionName: '小房间',
      superRegionName: 'A区',
      location: {
        x: 8605.168,
        y: 174.89832,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 14641.918,
        y: -1017.6743,
      },
    }, {
      regionName: '拐角',
      superRegionName: 'B区',
      location: {
        x: 11212.901,
        y: -7095.3335,
      },
    }, {
      regionName: '花园',
      superRegionName: 'B区',
      location: {
        x: 9144.103,
        y: -5598.1274,
      },
    }, {
      regionName: '灯',
      superRegionName: 'A区',
      location: {
        x: 10649.471,
        y: 79.904434,
      },
    }, {
      regionName: '塔楼',
      superRegionName: 'A区',
      location: {
        x: 12872.583,
        y: 2556.7708,
      },
    }],
  },
  {
    uuid: '2fb9a4fd-47b8-4e7d-a969-74b4046ebd53',
    displayName: '微风岛屿',
    narrativeDescription: 'Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You\'ll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.',
    tacticalDescription: 'A/B Sites',
    coordinates: '26°11\'AG"N 71°10\'WY"W',
    displayIcon: 'https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Foxtrot/Foxtrot_PrimaryAsset',
    mapUrl: '/Game/Maps/Foxtrot/Foxtrot',
    xMultiplier: 7e-05,
    yMultiplier: -7e-05,
    xScalarToAdd: 0.465123,
    yScalarToAdd: 0.833078,
    callouts: [{
      regionName: '大堂',
      superRegionName: 'A区',
      location: {
        x: 4825,
        y: 2550,
      },
    }, {
      regionName: '桥',
      superRegionName: 'A区',
      location: {
        x: 8400,
        y: 3525,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 8900,
        y: 3525,
      },
    }, {
      regionName: '拱门',
      superRegionName: '守方',
      location: {
        x: 9400,
        y: -1300,
      },
    }, {
      regionName: '木门',
      superRegionName: '中区',
      location: {
        x: 4825,
        y: 2550,
      },
    }, {
      regionName: '柱子',
      superRegionName: '中区',
      location: {
        x: 4175,
        y: 475,
      },
    }, {
      regionName: '坡顶',
      superRegionName: '中区',
      location: {
        x: 6175,
        y: 525,
      },
    }, {
      regionName: '巢穴',
      superRegionName: '中区',
      location: {
        x: 8650,
        y: 275,
      },
    }, {
      regionName: '窗户',
      superRegionName: 'B区',
      location: {
        x: 2225,
        y: -4175,
      },
    }, {
      regionName: '大道',
      superRegionName: 'B区',
      location: {
        x: 3550,
        y: -4450,
      },
    }, {
      regionName: '蛇形道',
      superRegionName: '攻方',
      location: {
        x: 550,
        y: -2450,
      },
    }, {
      regionName: '拐角',
      superRegionName: 'B区',
      location: {
        x: 4675,
        y: -2900,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'B区',
      location: {
        x: 6450,
        y: -5650,
      },
    }, {
      regionName: '隧道',
      superRegionName: 'B区',
      location: {
        x: 6450,
        y: -1450,
      },
    }, {
      regionName: '开关',
      superRegionName: 'A区',
      location: {
        x: 6425,
        y: 3050,
      },
    }, {
      regionName: '滑道',
      superRegionName: '中区',
      location: {
        x: 3875,
        y: 1800,
      },
    }, {
      regionName: '后房',
      superRegionName: 'B区',
      location: {
        x: 7550,
        y: -5675,
      },
    }, {
      regionName: '墙',
      superRegionName: 'B区',
      location: {
        x: 8550,
        y: -3000,
      },
    }, {
      regionName: '绳索',
      superRegionName: 'A区',
      location: {
        x: 3100,
        y: 2550,
      },
    }, {
      regionName: '大炮',
      superRegionName: '中区',
      location: {
        x: 2900,
        y: -1850,
      },
    }, {
      regionName: '铁门',
      superRegionName: 'A区',
      location: {
        x: 6825,
        y: 2550,
      },
    }, {
      regionName: '坡底',
      superRegionName: '中区',
      location: {
        x: 1575,
        y: 475,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'A区',
      location: {
        x: -1250,
        y: 3400,
      },
    }, {
      regionName: '洞穴',
      superRegionName: 'A区',
      location: {
        x: -3409.3984,
        y: 14026.392,
      },
    }, {
      regionName: '商店',
      superRegionName: 'A区',
      location: {
        x: 2150,
        y: 4250,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'A区',
      location: {
        x: 4825,
        y: 6325,
      },
    }, {
      regionName: '金字塔',
      superRegionName: 'A区',
      location: {
        x: 5200,
        y: 5450,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: -575,
        y: -450,
      },
    }],
  },
  {
    uuid: '690b3ed2-4dff-945b-8223-6da834e30d24',
    displayName: '商街',
    narrativeDescription: null,
    tacticalDescription: null,
    coordinates: null,
    displayIcon: 'https://media.valorant-api.com/maps/690b3ed2-4dff-945b-8223-6da834e30d24/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/690b3ed2-4dff-945b-8223-6da834e30d24/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/690b3ed2-4dff-945b-8223-6da834e30d24/splash.png',
    assetPath: 'ShooterGame/Content/Maps/HURM/HURM_Alley/HURM_Alley_PrimaryAsset',
    mapUrl: '/Game/Maps/HURM/HURM_Alley/HURM_Alley',
    xMultiplier: 0,
    yMultiplier: 0,
    xScalarToAdd: 0,
    yScalarToAdd: 0,
    callouts: [{
      regionName: '方箱',
      superRegionName: '攻方',
      location: {
        x: -2225,
        y: 1700,
      },
    }, {
      regionName: '高台',
      superRegionName: '攻方',
      location: {
        x: -2200,
        y: 800,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: -1200,
        y: 3000,
      },
    }, {
      regionName: '台阶',
      superRegionName: '攻方',
      location: {
        x: -200,
        y: 1200,
      },
    }, {
      regionName: '墙',
      superRegionName: '攻方',
      location: {
        x: 700,
        y: 900,
      },
    }, {
      regionName: '方箱',
      superRegionName: '守方',
      location: {
        x: -2225,
        y: -2900,
      },
    }, {
      regionName: '高台',
      superRegionName: '守方',
      location: {
        x: -2200,
        y: -1700,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: -1200,
        y: -3000,
      },
    }, {
      regionName: '台阶',
      superRegionName: '守方',
      location: {
        x: -200,
        y: -1200,
      },
    }, {
      regionName: '墙',
      superRegionName: '守方',
      location: {
        x: 700,
        y: -900,
      },
    }, {
      regionName: '发电机',
      superRegionName: '中区',
      location: {
        x: -1400,
        y: -1000,
      },
    }, {
      regionName: 'U型道',
      superRegionName: '中区',
      location: {
        x: -3200,
        y: -900,
      },
    }, {
      regionName: '下水道',
      superRegionName: '中区',
      location: {
        x: 700,
        y: -900,
      },
    }],
  },
  {
    uuid: '12452a9d-48c3-0b02-e7eb-0381c3520404',
    displayName: '古城',
    narrativeDescription: null,
    tacticalDescription: null,
    coordinates: null,
    displayIcon: 'https://media.valorant-api.com/maps/12452a9d-48c3-0b02-e7eb-0381c3520404/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/12452a9d-48c3-0b02-e7eb-0381c3520404/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/12452a9d-48c3-0b02-e7eb-0381c3520404/splash.png',
    assetPath: 'ShooterGame/Content/Maps/HURM/HURM_Bowl/HURM_Bowl_PrimaryAsset',
    mapUrl: '/Game/Maps/HURM/HURM_Bowl/HURM_Bowl',
    xMultiplier: 0,
    yMultiplier: 0,
    xScalarToAdd: 0,
    yScalarToAdd: 0,
    callouts: [{
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '斜箱',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '小道',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '低地',
      superRegionName: '中区',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '塔楼',
      superRegionName: '中区',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '坡道',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '矮箱',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '高台',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '廊道',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '窗口',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '斜箱',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '小道',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '低地',
      superRegionName: '中区',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '塔楼',
      superRegionName: '中区',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '坡道',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '矮箱',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '高台',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '廊道',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '窗户',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }],
  },
  {
    uuid: 'de28aa9b-4cbe-1003-320e-6cb3ec309557',
    displayName: '小镇',
    narrativeDescription: null,
    tacticalDescription: null,
    coordinates: null,
    displayIcon: 'https://media.valorant-api.com/maps/de28aa9b-4cbe-1003-320e-6cb3ec309557/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/de28aa9b-4cbe-1003-320e-6cb3ec309557/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/de28aa9b-4cbe-1003-320e-6cb3ec309557/splash.png',
    assetPath: 'ShooterGame/Content/Maps/HURM/HURM_Yard/HURM_Yard_PrimaryAsset',
    mapUrl: '/Game/Maps/HURM/HURM_Yard/HURM_Yard',
    xMultiplier: 0,
    yMultiplier: 0,
    xScalarToAdd: 0,
    yScalarToAdd: 0,
    callouts: [{
      regionName: '巷道',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '走廊',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '房屋',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '小方箱',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '大厅',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '庭院',
      superRegionName: '中区',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '方箱',
      superRegionName: '中区',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '高台',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '巷道',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '走廊',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '房屋',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '小方箱',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '大厅',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '庭院',
      superRegionName: '中区',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '方箱',
      superRegionName: '中区',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '高台',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 0,
        y: 0,
      },
    }],
  },
  {
    uuid: '2fe4ed3a-450a-948b-6d6b-e89a78e680a9',
    displayName: '莲华古城',
    narrativeDescription: 'A mysterious structure housing an astral conduit radiates with ancient power. Great stone doors provide a variety of movement opportunities and unlock the paths to three mysterious sites.',
    tacticalDescription: 'A/B/C Sites',
    coordinates: '14°07\'AD.4"N8 74°53\'XY"E8',
    displayIcon: 'https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Jam/Jam_PrimaryAsset',
    mapUrl: '/Game/Maps/Jam/Jam',
    xMultiplier: 7.2e-05,
    yMultiplier: -7.2e-05,
    xScalarToAdd: 0.454789,
    yScalarToAdd: 0.917752,
    callouts: [{
      regionName: '高地',
      superRegionName: 'A区',
      location: {
        x: 9260.3,
        y: 5045.5884,
      },
    }, {
      regionName: '下坡',
      superRegionName: 'A区',
      location: {
        x: 9516.38,
        y: 6092.8936,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'A区',
      location: {
        x: 7735.5396,
        y: 5557.309,
      },
    }, {
      regionName: '小屋',
      superRegionName: 'A区',
      location: {
        x: 7917.4614,
        y: 5557.309,
      },
    }, {
      regionName: '树',
      superRegionName: 'A区',
      location: {
        x: 6149.525,
        y: 5557.309,
      },
    }, {
      regionName: '通道门',
      superRegionName: 'A区',
      location: {
        x: 5608.7563,
        y: 5203.91,
      },
    }, {
      regionName: '大道',
      superRegionName: 'A区',
      location: {
        x: 5288.3022,
        y: 4159.762,
      },
    }, {
      regionName: '碎石',
      superRegionName: 'A区',
      location: {
        x: 4401.0713,
        y: 4918.189,
      },
    }, {
      regionName: '树根',
      superRegionName: 'A区',
      location: {
        x: 4401.0713,
        y: 3294.1523,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'A区',
      location: {
        x: 2685.951,
        y: 2927.1755,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'C区',
      location: {
        x: 1403.5685,
        y: -1576.5884,
      },
    }, {
      regionName: '柱子',
      superRegionName: 'B区',
      location: {
        x: 3565.3691,
        y: 668.18317,
      },
    }, {
      regionName: '大道',
      superRegionName: 'B区',
      location: {
        x: 4876.832,
        y: -47.87195,
      },
    }, {
      regionName: '通道门',
      superRegionName: 'C区',
      location: {
        x: 4818.6655,
        y: -1752.8021,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'B区',
      location: {
        x: 6368.0327,
        y: 668.18317,
      },
    }, {
      regionName: '小道',
      superRegionName: 'A区',
      location: {
        x: 6011.0664,
        y: 2087.6528,
      },
    }, {
      regionName: '上层',
      superRegionName: 'B区',
      location: {
        x: 7682.943,
        y: 1517.3606,
      },
    }, {
      regionName: '瀑布',
      superRegionName: 'C区',
      location: {
        x: 6719.804,
        y: -1994.2986,
      },
    }, {
      regionName: '小道',
      superRegionName: 'C区',
      location: {
        x: 7504.109,
        y: -1377.893,
      },
    }, {
      regionName: '台阶',
      superRegionName: 'A区',
      location: {
        x: 8257.875,
        y: 3860.9312,
      },
    }, {
      regionName: '土丘',
      superRegionName: 'C区',
      location: {
        x: 3863.7183,
        y: -1576.5884,
      },
    }, {
      regionName: '大道',
      superRegionName: 'C区',
      location: {
        x: 5311.2646,
        y: -3148.162,
      },
    }, {
      regionName: '弯道',
      superRegionName: 'C区',
      location: {
        x: 5657.522,
        y: -5281.4395,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'C区',
      location: {
        x: 6676.6636,
        y: -4265.876,
      },
    }, {
      regionName: '走廊',
      superRegionName: 'C区',
      location: {
        x: 7902.0615,
        y: -4265.876,
      },
    }, {
      regionName: '碎石路',
      superRegionName: 'C区',
      location: {
        x: 8936.881,
        y: -1752.2874,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 9686.767,
        y: 1697.8223,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: 1401.2915,
        y: 777.29834,
      },
    }],
  },
  {
    uuid: '92584fbe-486a-b1b2-9faa-39b0f486b498',
    displayName: '日落之城',
    narrativeDescription: 'A disaster at a local kingdom facility threatens to engulf the whole neighborhood. Stop at your favorite food truck then fight across the city in this traditional three lane map.',
    tacticalDescription: 'A/B Sites',
    coordinates: '34° 2′ C″ N, 118° 12′ YT″ W',
    displayIcon: 'https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Juliett/Juliett_PrimaryAsset',
    mapUrl: '/Game/Maps/Juliett/Juliett',
    xMultiplier: 7.8e-05,
    yMultiplier: -7.8e-05,
    xScalarToAdd: 0.5,
    yScalarToAdd: 0.515625,
    callouts: [{
      regionName: '奶茶店',
      superRegionName: 'B区',
      location: {
        x: 2200,
        y: -4800,
      },
    }, {
      regionName: '红砖路',
      superRegionName: '中区',
      location: {
        x: -1800,
        y: 400,
      },
    }, {
      regionName: '市场',
      superRegionName: 'B区',
      location: {
        x: -200,
        y: -3400,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'B区',
      location: {
        x: -600,
        y: -5850,
      },
    }, {
      regionName: '大道',
      superRegionName: 'B区',
      location: {
        x: -2000,
        y: -5650,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'B区',
      location: {
        x: -3400,
        y: -2600,
      },
    }, {
      regionName: '坡底',
      superRegionName: '中区',
      location: {
        x: -1800,
        y: -2025,
      },
    }, {
      regionName: '庭院',
      superRegionName: '中区',
      location: {
        x: -600,
        y: -1200,
      },
    }, {
      regionName: '大厅',
      superRegionName: 'A区',
      location: {
        x: -1800,
        y: 2000,
      },
    }, {
      regionName: '大道',
      superRegionName: 'A区',
      location: {
        x: -400,
        y: 2200,
      },
    }, {
      regionName: '小道',
      superRegionName: 'A区',
      location: {
        x: 2200,
        y: 3000,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'A区',
      location: {
        x: 1000,
        y: 3200,
      },
    }, {
      regionName: '拐角',
      superRegionName: 'A区',
      location: {
        x: 200,
        y: 4200,
      },
    }, {
      regionName: '巷道',
      superRegionName: 'A区',
      location: {
        x: 3400,
        y: 3600,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 3805.4785,
        y: -1989.0962,
      },
    }, {
      regionName: '坡顶',
      superRegionName: '中区',
      location: {
        x: 2000,
        y: -2000,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: -6025,
        y: -400,
      },
    }],
  },
  {
    uuid: 'fd267378-4d1d-484f-ff52-77821ed10dc2',
    displayName: '深海明珠',
    narrativeDescription: 'Attackers push down into the Defenders on this two-site map set in a vibrant, underwater city. Pearl is a geo-driven map with no mechanics. Take the fight through a compact mid or the longer range wings in our first map set in Omega Earth.',
    tacticalDescription: 'A/B Sites',
    coordinates: '38°42\'ED"N8 9°08\'XS"W8',
    displayIcon: 'https://media.valorant-api.com/maps/fd267378-4d1d-484f-ff52-77821ed10dc2/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/fd267378-4d1d-484f-ff52-77821ed10dc2/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/fd267378-4d1d-484f-ff52-77821ed10dc2/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Pitt/Pitt_PrimaryAsset',
    mapUrl: '/Game/Maps/Pitt/Pitt',
    xMultiplier: 7.8e-05,
    yMultiplier: -7.8e-05,
    xScalarToAdd: 0.480469,
    yScalarToAdd: 0.916016,
    callouts: [{
      regionName: '走廊',
      superRegionName: 'B区',
      location: {
        x: 7495.6177,
        y: -4954.14,
      },
    }, {
      regionName: '门',
      superRegionName: '中区',
      location: {
        x: 4701.24,
        y: 597.23285,
      },
    }, {
      regionName: '路口',
      superRegionName: '中区',
      location: {
        x: 6047.0464,
        y: 1800.0436,
      },
    }, {
      regionName: '排水沟',
      superRegionName: '守方',
      location: {
        x: 7808.019,
        y: 1800.0419,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: 11092.458,
        y: 378.79883,
      },
    }, {
      regionName: '花店',
      superRegionName: 'A区',
      location: {
        x: 9263.969,
        y: 2507.3403,
      },
    }, {
      regionName: '隐藏',
      superRegionName: 'A区',
      location: {
        x: 10458.144,
        y: 3831.5127,
      },
    }, {
      regionName: '低地',
      superRegionName: 'A区',
      location: {
        x: 7660.6597,
        y: 5854.0664,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'A区',
      location: {
        x: 6613.846,
        y: 5569.5254,
      },
    }, {
      regionName: '唱片店',
      superRegionName: '守方',
      location: {
        x: 8973.152,
        y: -1470.2677,
      },
    }, {
      regionName: '高地',
      superRegionName: '中区',
      location: {
        x: 2075,
        y: 725,
      },
    }, {
      regionName: '地道',
      superRegionName: 'B区',
      location: {
        x: 8973.152,
        y: -2155.1323,
      },
    }, {
      regionName: '塔楼',
      superRegionName: 'B区',
      location: {
        x: 8533.423,
        y: -2851.3516,
      },
    }, {
      regionName: '主门',
      superRegionName: 'A区',
      location: {
        x: 6368.5713,
        y: 3825,
      },
    }, {
      regionName: '餐厅',
      superRegionName: 'A区',
      location: {
        x: 4430.452,
        y: 2813.1267,
      },
    }, {
      regionName: '小道',
      superRegionName: 'B区',
      location: {
        x: 4503.3633,
        y: -591.64435,
      },
    }, {
      regionName: '画架',
      superRegionName: 'A区',
      location: {
        x: 4561.95,
        y: 3406.8806,
      },
    }, {
      regionName: '小道',
      superRegionName: 'A区',
      location: {
        x: 6055.2104,
        y: 3782.704,
      },
    }, {
      regionName: '广场',
      superRegionName: '中区',
      location: {
        x: 2750,
        y: -325,
      },
    }, {
      regionName: '商店',
      superRegionName: '中区',
      location: {
        x: 800,
        y: -1450,
      },
    }, {
      regionName: '夜店',
      superRegionName: 'B区',
      location: {
        x: 800,
        y: -1450,
      },
    }, {
      regionName: '坡道',
      superRegionName: 'B区',
      location: {
        x: 1750,
        y: -3800,
      },
    }, {
      regionName: '主门',
      superRegionName: 'B区',
      location: {
        x: 4050,
        y: -4375,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'B区',
      location: {
        x: 5800,
        y: -2850,
      },
    }, {
      regionName: '屏幕',
      superRegionName: 'B区',
      location: {
        x: 6260.4326,
        y: -5000.933,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: -550,
        y: -600,
      },
    }],
  },
  {
    uuid: 'e2ad5c54-4114-a870-9641-8ea21279579a',
    displayName: '森寒冬港',
    narrativeDescription: 'Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.',
    tacticalDescription: 'A/B Sites',
    coordinates: '76°44\' A"N 149°30\' Z"E',
    displayIcon: 'https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Port/Port_PrimaryAsset',
    mapUrl: '/Game/Maps/Port/Port',
    xMultiplier: 7.2e-05,
    yMultiplier: -7.2e-05,
    xScalarToAdd: 0.460214,
    yScalarToAdd: 0.304687,
    callouts: [{
      regionName: '车库',
      superRegionName: 'B区',
      location: {
        x: -1250,
        y: -1425,
      },
    }, {
      regionName: '带状区',
      superRegionName: 'A区',
      location: {
        x: -7200,
        y: -850,
      },
    }, {
      regionName: '巢穴',
      superRegionName: 'A区',
      location: {
        x: -6650,
        y: 900,
      },
    }, {
      regionName: '管道',
      superRegionName: 'A区',
      location: {
        x: -6150,
        y: 450,
      },
    }, {
      regionName: '高台',
      superRegionName: 'A区',
      location: {
        x: -6450,
        y: 4250,
      },
    }, {
      regionName: '屏幕',
      superRegionName: 'A区',
      location: {
        x: -5100,
        y: 3325,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'A区',
      location: {
        x: -6400,
        y: 3200,
      },
    }, {
      regionName: '重生点',
      superRegionName: '攻方',
      location: {
        x: -3925,
        y: -4450,
      },
    }, {
      regionName: '黄',
      superRegionName: 'B区',
      location: {
        x: 2050,
        y: -25,
      },
    }, {
      regionName: '后房',
      superRegionName: 'B区',
      location: {
        x: 251,
        y: 4269,
      },
    }, {
      regionName: '栅栏',
      superRegionName: 'B区',
      location: {
        x: 251.00003,
        y: 3236.0525,
      },
    }, {
      regionName: '小房间',
      superRegionName: 'B区',
      location: {
        x: 1050,
        y: -975,
      },
    }, {
      regionName: '绿',
      superRegionName: 'B区',
      location: {
        x: -450,
        y: -700,
      },
    }, {
      regionName: '大堂',
      superRegionName: 'B区',
      location: {
        x: 300,
        y: 3050,
      },
    }, {
      regionName: '小屋',
      superRegionName: 'B区',
      location: {
        x: -1425,
        y: 4400,
      },
    }, {
      regionName: '厨房',
      superRegionName: 'B区',
      location: {
        x: -2221.3618,
        y: 3403.649,
      },
    }, {
      regionName: '橙',
      superRegionName: 'B区',
      location: {
        x: -632,
        y: 1700,
      },
    }, {
      regionName: '部署区',
      superRegionName: 'B区',
      location: {
        x: 1725,
        y: 2575,
      },
    }, {
      regionName: '雪人',
      superRegionName: 'B区',
      location: {
        x: 2250,
        y: 3960.3218,
      },
    }, {
      regionName: '雪堆',
      superRegionName: 'B区',
      location: {
        x: -1775,
        y: 2500,
      },
    }, {
      regionName: '管子',
      superRegionName: 'B区',
      location: {
        x: -2300,
        y: 1275,
      },
    }, {
      regionName: '重生点',
      superRegionName: '守方',
      location: {
        x: -3750,
        y: 7075,
      },
    }, {
      regionName: '蓝',
      superRegionName: '中区',
      location: {
        x: -2825,
        y: 975,
      },
    }, {
      regionName: '锅炉',
      superRegionName: '中区',
      location: {
        x: -3375,
        y: 2925,
      },
    }, {
      regionName: '平台',
      superRegionName: '中区',
      location: {
        x: -4450,
        y: 1775,
      },
    }, {
      regionName: '栅栏',
      superRegionName: 'B区',
      location: {
        x: 363,
        y: 3595,
      },
    }],
  },
  {
    uuid: 'ee613ee9-28b7-4beb-9666-08db13bb2244',
    displayName: '靶场',
    narrativeDescription: null,
    tacticalDescription: null,
    coordinates: '45°26\'FF\'N,12°20\'Q\'E',
    displayIcon: null,
    listViewIcon: 'https://media.valorant-api.com/maps/ee613ee9-28b7-4beb-9666-08db13bb2244/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/ee613ee9-28b7-4beb-9666-08db13bb2244/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Poveglia/Poveglia_PrimaryAsset',
    mapUrl: '/Game/Maps/Poveglia/Range',
    xMultiplier: 0,
    yMultiplier: 0,
    xScalarToAdd: 0,
    yScalarToAdd: 0,
    callouts: null,
  },
  {
    uuid: '2bee0dc9-4ffe-519b-1cbd-7fbe763a6047',
    displayName: '隐世修所',
    narrativeDescription: 'Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.',
    tacticalDescription: 'A/B/C Sites',
    coordinates: '27°28\'A\'N,89°38\'WZ\'E',
    displayIcon: 'https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/displayicon.png',
    listViewIcon: 'https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/listviewicon.png',
    splash: 'https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/splash.png',
    assetPath: 'ShooterGame/Content/Maps/Triad/Triad_PrimaryAsset',
    mapUrl: '/Game/Maps/Triad/Triad',
    xMultiplier: 7.5e-05,
    yMultiplier: -7.5e-05,
    xScalarToAdd: 1.09345,
    yScalarToAdd: 0.642728,
    callouts: [
      {
        regionName: '花园',
        superRegionName: 'A区',
        location: {
          x: 3100.261,
          y: -4683.6016,
        },
      }, {
        regionName: '小道',
        superRegionName: 'A区',
        location: {
          x: 4244.4214,
          y: -10715.68,
        },
      }, {
        regionName: '大厅',
        superRegionName: 'A区',
        location: {
          x: 3438.537,
          y: -6260.409,
        },
      }, {
        regionName: '长道',
        superRegionName: 'A区',
        location: {
          x: 6209.695,
          y: -6901.142,
        },
      }, {
        regionName: '下水道',
        superRegionName: 'A区',
        location: {
          x: 3452.8735,
          y: -7915.7246,
        },
      }, {
        regionName: '部署区',
        superRegionName: 'A区',
        location: {
          x: 6309.3076,
          y: -9225.703,
        },
      }, {
        regionName: '重生点',
        superRegionName: '攻方',
        location: {
          x: 1741.7622,
          y: -2642.7925,
        },
      }, {
        regionName: '后房',
        superRegionName: 'B区',
        location: {
          x: 1966.1608,
          y: -10664.775,
        },
      }, {
        regionName: '部署区',
        superRegionName: 'B区',
        location: {
          x: 1884.706,
          y: -9231.335,
        },
      }, {
        regionName: '小道',
        superRegionName: 'C区',
        location: {
          x: -87.761444,
          y: -10004.415,
        },
      }, {
        regionName: '大厅',
        superRegionName: 'C区',
        location: {
          x: -1642.189,
          y: -5720.345,
        },
      }, {
        regionName: '长道',
        superRegionName: 'C区',
        location: {
          x: -3356.814,
          y: -5990.872,
        },
      }, {
        regionName: '车库',
        superRegionName: 'C区',
        location: {
          x: 180.07678,
          y: -7999.5845,
        },
      }, {
        regionName: '窗户',
        superRegionName: 'C区',
        location: {
          x: -10.126678,
          y: -8993.241,
        },
      }, {
        regionName: '部署区',
        superRegionName: 'C区',
        location: {
          x: -2378.1328,
          y: -9010.557,
        },
      }, {
        regionName: '小房间',
        superRegionName: 'C区',
        location: {
          x: -2119.7693,
          y: -6561.603,
        },
      }, {
        regionName: '重生点',
        superRegionName: '守方',
        location: {
          x: 2946.3042,
          y: -12714.707,
        },
      }, {
        regionName: '门',
        superRegionName: '中区',
        location: {
          x: 151.11594,
          y: -6262.9155,
        },
      }, {
        regionName: '院子',
        superRegionName: '中区',
        location: {
          x: 1822.1299,
          y: -6712.6875,
        },
      }, {
        regionName: '窗户',
        superRegionName: '中区',
        location: {
          x: 1950.2218,
          y: -5567.912,
        },
      }, {
        regionName: '塔楼',
        superRegionName: 'A区',
        location: {
          x: 6721.4043,
          y: -10472.5205,
        },
      }],
  }]

export const rankList = [{ uuid: '0cebb8be-46d7-c12a-d306-e9907bfc5a25', displayName: 'Deluxe Edition', devName: 'Deluxe', rank: 1, juiceValue: 20, juiceCost: 60, highlightColor: '00958733', displayIcon: 'https://media.valorant-api.com/contenttiers/0cebb8be-46d7-c12a-d306-e9907bfc5a25/displayicon.png', assetPath: 'ShooterGame/Content/ContentTiers/Deluxe_PrimaryAsset' }, { uuid: 'e046854e-406c-37f4-6607-19a9ba8426fc', displayName: 'Deluxe Edition', devName: 'Exclusive', rank: 3, juiceValue: 40, juiceCost: 140, highlightColor: 'f5955b33', displayIcon: 'https://media.valorant-api.com/contenttiers/e046854e-406c-37f4-6607-19a9ba8426fc/displayicon.png', assetPath: 'ShooterGame/Content/ContentTiers/Exclusive_PrimaryAsset' }, { uuid: '60bca009-4182-7998-dee7-b8a2558dc369', displayName: 'Premium Edition', devName: 'Premium', rank: 2, juiceValue: 30, juiceCost: 100, highlightColor: 'd1548d33', displayIcon: 'https://media.valorant-api.com/contenttiers/60bca009-4182-7998-dee7-b8a2558dc369/displayicon.png', assetPath: 'ShooterGame/Content/ContentTiers/Premium_PrimaryAsset' }, { uuid: '12683d76-48d7-84a3-4e09-6985794f0445', displayName: 'Select Edition', devName: 'Select', rank: 0, juiceValue: 10, juiceCost: 30, highlightColor: '5a9fe233', displayIcon: 'https://media.valorant-api.com/contenttiers/12683d76-48d7-84a3-4e09-6985794f0445/displayicon.png', assetPath: 'ShooterGame/Content/ContentTiers/Select_PrimaryAsset' }, { uuid: '411e4a55-4e59-7757-41f0-86a53f101bb5', displayName: 'Ultra Edition', devName: 'Ultra', rank: 4, juiceValue: 50, juiceCost: 160, highlightColor: 'fad66333', displayIcon: 'https://media.valorant-api.com/contenttiers/411e4a55-4e59-7757-41f0-86a53f101bb5/displayicon.png', assetPath: 'ShooterGame/Content/ContentTiers/Ultra_PrimaryAsset' }]
