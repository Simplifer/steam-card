<script setup lang="ts">
import { getValorantMatchs } from 'server/core/request/ValorantApi'
import type { Data, QueryParams } from 'types/valorantType'
const player = ref('')
onMounted(() => {
  const query = useRoute().query
  if (query?.name && query?.tag) {
    player.value = `${query.name}#${query?.tag}`
    query.name = encodeURIComponent((query.name || '').toString())
    getMMR(query as unknown as QueryParams)
  }
})
type MixData = Data & { win: boolean }
const matchList = ref<MixData[]>([])

function getMMR(params: QueryParams) {
  getValorantMatchs({
    size: 10,
    ...params,
    page: 1,
  }).then((res) => {
    if (res.status === 200) {
      matchList.value = res.data?.map((m) => {
        const isRedWin = (m.teams?.red || 0) > (m.teams?.blue || 0)
        const win = m.stats?.team === 'Red' ? isRedWin : !isRedWin
        return {
          ...m,
          win,
        }
      }) as MixData[]
    }
  })
}

function formatDistanceToNow(input: Date | string): string {
  let date: Date

  if (input instanceof Date)
    date = input
  else
    date = new Date(input)

  const now = new Date()
  const secondsAgo = Math.round((now.getTime() - date.getTime()) / 1000)

  let interval = Math.floor(secondsAgo / 31556926)

  if (interval >= 1)
    return `${interval}年前`

  interval = Math.floor(secondsAgo / 2592000)

  if (interval >= 1)
    return `${interval}月前`

  interval = Math.floor(secondsAgo / 86400)

  if (interval >= 1)
    return `${interval}天前`

  interval = Math.floor(secondsAgo / 3600)

  if (interval >= 1)
    return `${interval}小时前`

  interval = Math.floor(secondsAgo / 60)

  if (interval >= 1)
    return `${interval}分钟前`

  return '刚刚'
}
</script>

<template>
  <div id="matchList" class="content">
    <div class="player-name">
      {{ player }}
    </div>
    <div v-for="m in matchList" :key="m.meta?.id" class="match">
      <div class="m-title" :style="`--bc:${m.win ? '#22d3ee' : '#f87171'}` ">
        <div class="tag" :class="{ 'bg-#22d3ee': m.win, 'bg-#f87171': !m.win }">
          {{ m.win ? '胜利' : '失败' }}
        </div>
        <div class="time">
          {{ formatDistanceToNow(m.meta?.started_at) }}
        </div>
      </div>
      <img
        class="m-legend" :src="`https://media.valorant-api.com/agents/${m.stats?.character?.id}/displayicon.png`"
        alt="pic"
      >
      <div class="m-info">
        <div class="m-mode">
          {{ gamemodeList.find(it => it.name === m.meta?.mode)?.displayName || '--' }}
        </div>
        <div class="m-name">
          {{ mapList.find(it => it.uuid === m.meta?.map?.id)?.displayName || '--' }}
        </div>
      </div>
      <div class="m-result">
        <div class="point-box" :class="m.win ? 'text-cyan' : 'text-red'">
          {{ m.stats?.team === 'Red' ? m.teams?.red : m.teams?.blue }}
        </div>
        <span>:</span>
        <div class="point-box text-#9D8F8E">
          {{ m.stats?.team === 'Red' ? m.teams?.blue : m.teams?.red }}
        </div>
      </div>
      <div class="m-kda">
        <div class="kd">
          {{ Number((m.stats?.kills / m.stats?.deaths).toFixed(1)) }}
        </div>
        <div class="kda">
          {{ m.stats?.kills }}
          <span>/</span>
          {{ m.stats?.deaths }}
          <span>/</span>
          {{ m.stats?.assists }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  border-radius: 4px;
  min-width: 400px;
  background-image: linear-gradient(40deg, #3f1c20, #4d1f21);
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 4px;
  border: 2px solid #f87171;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%);
}

.player-name {
  display: inline-block;
  text-align: center;
  font-weight: bold;
  margin: 4px auto 10PX;
  letter-spacing: 1px;
  position: relative;
  font-size: 18px;

  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    width: 30%;
    left: 5px;
    height: 2px;
    border-radius: 2px;
    background: cyan;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 90%;
    left: 5%;
    height: 2px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.1);
  }
}

.m-kda {

  width: 50px;
  text-align: center;
}

.kd {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
}

.m-result {
  width: 90px;
}

.kda, .m-result {

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.kda span {
  font-size: 12px;
  opacity: 0.6;
}

.m-info {
  width: 70px;

  .m-mode {
    display: inline-block;
    background: rgba(255, 255, 255, 0.15);
    font-size: 14px;
    padding: 0 4px;
    border-radius: 4px;
    margin-bottom: 4px;
    color: rgba(255, 255, 255, 0.9);
  }

  .m-name {

    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
  }
}

.m-title {
  width: 60px;
  text-align: center;

  .time {
    font-size: 12px;
    white-space: nowrap;
  }

  .tag {
    display: inline-block;
    color: #01120e;
    border-radius: 4px;
    padding: 0 2px;

    font-weight: bold;
    font-size: 14px;
  }

  &:before {
    content: '';
    position: absolute;
    left: -4px;
    height: 100%;
    width: 4px;
    border-radius: 0 2px 2px 0;
    background: var(--bc);
    top: 50%;
    transform: translateY(-50%);
  }
}

.point-box {
  padding: 4px 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
}

.m-result span {
  margin: 0 6px;
}

.m-legend {
  width: 40px;
  height: 40px;
}

.match {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 6px;
  height: 60px;
}
</style>
