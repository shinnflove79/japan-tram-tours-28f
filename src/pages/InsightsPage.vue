<template>
  <main class="bg-background px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">
      <header class="mb-10">
        <h1 class="mb-4 font-heading text-4xl font-bold text-primary">{{ content.title }}</h1>
        <p class="font-body text-lg text-gray-700">{{ content.subtitle }}</p>
      </header>

      <div class="space-y-8">
        <article
          v-for="article in content.articles"
          :key="article.title"
          class="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
        >
          <h2 class="mb-3 font-heading text-3xl font-bold text-primary">{{ article.title }}</h2>
          <p class="mb-6 font-body leading-8 text-gray-700">{{ article.intro }}</p>

          <section class="mb-8">
            <h3 class="mb-3 font-heading text-2xl font-bold text-primary">{{ article.sec1Title }}</h3>
            <p class="font-body leading-8 text-gray-700">{{ article.sec1Body }}</p>
          </section>

          <section class="mb-8">
            <h3 class="mb-3 font-heading text-2xl font-bold text-primary">{{ article.sec2Title }}</h3>
            <ul class="list-disc space-y-2 pl-5 font-body text-gray-700">
              <li v-for="item in article.sec2Items" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section>
            <h3 class="mb-3 font-heading text-2xl font-bold text-primary">{{ article.sec3Title }}</h3>
            <p class="font-body leading-8 text-gray-700">{{ article.sec3Body }}</p>
          </section>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface InsightArticle {
  title: string
  intro: string
  sec1Title: string
  sec1Body: string
  sec2Title: string
  sec2Items: string[]
  sec3Title: string
  sec3Body: string
}

interface InsightsContent {
  title: string
  subtitle: string
  articles: InsightArticle[]
}

const { locale } = useI18n()

const contentByLocale: Record<'en' | 'ja' | 'zh-TW', InsightsContent> = {
  en: {
    title: 'Rail Insights',
    subtitle: 'Knowledge articles about Japan trams, rail culture, and route history.',
    articles: [
      {
        title: 'A Short History of Japan Streetcars and Sightseeing Trains',
        intro:
          "Japan's rail culture includes both practical city streetcars and experience-focused sightseeing trains.",
        sec1Title: 'From Daily Transport to Cultural Landscape',
        sec1Body:
          'Many tram systems started as essential urban transport. Over time, surviving routes became symbols of local identity and tourism.',
        sec2Title: 'Why These Lines Still Matter',
        sec2Items: [
          'They preserve historical vehicles and station environments.',
          'They connect local neighborhoods often missed by fast intercity travel.',
          'They support regional tourism through scenic and seasonal rides.',
        ],
        sec3Title: 'Before You Visit',
        sec3Body:
          'Check official operator pages for timetable changes, reservation rules, and fare updates before your trip.',
      },
      {
        title: 'How to Plan a Scenic Tram Day in Japan',
        intro:
          'A good tram trip balances route character, transfer convenience, and nearby walking spots.',
        sec1Title: 'Pick One Route Theme',
        sec1Body:
          'Choose one clear direction for the day: coastal views, historical districts, mountain scenery, or city retro streets.',
        sec2Title: 'Simple Planning Checklist',
        sec2Items: [
          'Confirm operating hours and first/last departure times.',
          'Save major transfer stations and emergency alternatives.',
          'Check weather and daylight hours for photo-friendly timing.',
        ],
        sec3Title: 'Best Practice',
        sec3Body:
          'Use this site for overview, then finalize with official operator notices to avoid outdated schedule or booking information.',
      },
    ],
  },
  ja: {
    title: 'Rail Insights',
    subtitle: '日本の路面電車・観光電車・鉄道文化に関する読み物。',
    articles: [
      {
        title: '日本の路面電車と観光列車の短い歴史',
        intro:
          '日本の鉄道文化は、日常交通としての路面電車と、体験価値を重視した観光列車の両方で成り立っています。',
        sec1Title: '生活交通から地域文化へ',
        sec1Body:
          '多くの路面電車は都市交通として始まり、時代の変化を経て、現在は地域の象徴として観光価値も高めています。',
        sec2Title: '今も重要な理由',
        sec2Items: [
          '歴史ある車両や駅周辺の景観を残している。',
          '高速移動では見えにくい地域の日常をつないでいる。',
          '季節の旅や地域観光を支える基盤になっている。',
        ],
        sec3Title: '訪問前の確認',
        sec3Body:
          '運賃・時刻・予約条件は変わるため、最終判断は必ず運行会社の公式案内で確認してください。',
      },
      {
        title: '日本で景観を楽しむ路面電車の1日計画',
        intro:
          '満足度の高い路面電車旅は、路線の個性・乗換のしやすさ・沿線散策の組み合わせで決まります。',
        sec1Title: 'テーマを一つ決める',
        sec1Body:
          '海沿い、歴史街区、山あい、レトロ市街地など、その日のテーマを先に決めると動線が組みやすくなります。',
        sec2Title: '実用チェックリスト',
        sec2Items: [
          '始発・終電と区間運休情報を確認する。',
          '主要乗換駅と代替ルートを保存しておく。',
          '天気と日没時刻を見て撮影時間を調整する。',
        ],
        sec3Title: '運用ルール',
        sec3Body:
          '当サイトで候補を絞り、予約・運休・料金の最終確認は各社公式サイトで行うのが安全です。',
      },
    ],
  },
  'zh-TW': {
    title: 'Rail Insights',
    subtitle: '關於日本路面電車、觀光列車與鐵道文化的知識文章。',
    articles: [
      {
        title: '日本路面電車與觀光列車的簡史',
        intro:
          '日本鐵道文化同時包含日常通勤導向的路面電車，以及重視旅遊體驗的觀光列車。',
        sec1Title: '從生活交通到地方文化',
        sec1Body:
          '許多路面電車最初是城市基礎交通，隨著城市發展，有些路線退場，留下來的路線逐漸成為地方文化象徵。',
        sec2Title: '為什麼現在仍然重要',
        sec2Items: [
          '保留歷史車輛、車站與街景脈絡。',
          '連結高速移動難以覆蓋的在地生活區。',
          '支撐地方觀光，尤其是季節型景觀旅行。',
        ],
        sec3Title: '出發前建議',
        sec3Body:
          '時刻、票價與預約規則可能調整，出發前請以各營運公司官方公告為準。',
      },
      {
        title: '如何規劃日本路面電車景觀一日行程',
        intro:
          '要讓一天的電車旅行更順，關鍵在於主題明確、轉乘清楚、沿線可步行探索。',
        sec1Title: '先決定一個主題',
        sec1Body:
          '可以從海景、歷史街區、山線景觀或復古市街擇一，先定主題會讓整體路線更聚焦。',
        sec2Title: '實用檢查清單',
        sec2Items: [
          '確認營運時段與首末班資訊。',
          '記下主要轉乘站與備用替代路線。',
          '依天氣與日照安排拍攝時段。',
        ],
        sec3Title: '建議做法',
        sec3Body:
          '先用本站做初步比較，最終仍請回到官方網站確認最新時刻、票價與預約條件。',
      },
    ],
  },
}

const content = computed(() => {
  if (locale.value === 'ja') return contentByLocale.ja
  if (locale.value === 'zh-TW') return contentByLocale['zh-TW']
  return contentByLocale.en
})
</script>
