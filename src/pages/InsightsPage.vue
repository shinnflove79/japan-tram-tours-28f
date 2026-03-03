<template>
  <main class="bg-background px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">
      <header class="mb-10">
        <h1 class="mb-4 font-heading text-4xl font-bold text-primary">{{ content.title }}</h1>
        <p class="font-body text-lg text-gray-700">{{ content.subtitle }}</p>
      </header>

      <article class="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
        <h2 class="mb-3 font-heading text-3xl font-bold text-primary">{{ content.articleTitle }}</h2>
        <p class="mb-6 font-body leading-8 text-gray-700">{{ content.articleIntro }}</p>

        <section class="mb-8">
          <h3 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.sec1Title }}</h3>
          <p class="font-body leading-8 text-gray-700">{{ content.sec1Body }}</p>
        </section>

        <section class="mb-8">
          <h3 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.sec2Title }}</h3>
          <ul class="list-disc space-y-2 pl-5 font-body text-gray-700">
            <li>{{ content.sec2Item1 }}</li>
            <li>{{ content.sec2Item2 }}</li>
            <li>{{ content.sec2Item3 }}</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.sec3Title }}</h3>
          <ul class="list-disc space-y-2 pl-5 font-body text-gray-700">
            <li>{{ content.sec3Item1 }}</li>
            <li>{{ content.sec3Item2 }}</li>
            <li>{{ content.sec3Item3 }}</li>
            <li>{{ content.sec3Item4 }}</li>
          </ul>
        </section>

        <section>
          <h3 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.sec4Title }}</h3>
          <p class="font-body leading-8 text-gray-700">{{ content.sec4Body }}</p>
        </section>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface InsightsContent {
  title: string
  subtitle: string
  articleTitle: string
  articleIntro: string
  sec1Title: string
  sec1Body: string
  sec2Title: string
  sec2Item1: string
  sec2Item2: string
  sec2Item3: string
  sec3Title: string
  sec3Item1: string
  sec3Item2: string
  sec3Item3: string
  sec3Item4: string
  sec4Title: string
  sec4Body: string
}

const { locale } = useI18n()

const contentByLocale: Record<'en' | 'ja' | 'zh-TW', InsightsContent> = {
  en: {
    title: 'Rail Insights',
    subtitle: 'Knowledge articles about Japan trams, rail culture, and route history.',
    articleTitle: 'A Short History of Japan Streetcars and Sightseeing Trains',
    articleIntro:
      "Japan's rail culture includes both practical city streetcars and experience-focused sightseeing trains. While modern high-speed rail is globally known, tram and regional train history remains a key part of local travel culture.",
    sec1Title: 'From Daily Transport to Cultural Landscape',
    sec1Body:
      'Many urban tram systems started as essential city transport in the early modern era. As urban structure changed, some lines were reduced, while others survived and became symbols of local identity and tourism.',
    sec2Title: 'Why These Lines Still Matter Today',
    sec2Item1: 'They preserve historical rolling stock and station environments.',
    sec2Item2: 'They connect neighborhoods that are often missed by fast intercity travel.',
    sec2Item3: 'They support regional tourism, especially for scenic and seasonal travel.',
    sec3Title: 'How to Read a Route Before You Visit',
    sec3Item1: 'Check operator notices for seasonal or temporary schedule changes.',
    sec3Item2: 'Confirm reservation requirements for limited or themed trains.',
    sec3Item3: 'Review transfer points and final train times for evening return.',
    sec3Item4: 'Use official links for the latest fares, timetable updates, and booking rules.',
    sec4Title: 'What This Site Aims to Do',
    sec4Body:
      'This site organizes route information in a traveler-friendly way and links to official sources. For final decisions, official operator announcements should always take priority.',
  },
  ja: {
    title: '鉄道インサイト',
    subtitle: '日本の路面電車・観光列車・鉄道文化に関するナレッジ記事。',
    articleTitle: '日本の路面電車と観光列車の簡単な歴史',
    articleIntro:
      '日本の鉄道文化は、日常交通としての路面電車と、体験価値を重視した観光列車の両方で成り立っています。高速鉄道が注目される一方、地域の電車史は今も旅の魅力の中心です。',
    sec1Title: '生活交通から地域文化へ',
    sec1Body:
      '多くの路面電車は近代期に都市交通として始まりました。都市構造の変化で廃止された路線もありますが、残った路線は地域の象徴として観光価値を高めています。',
    sec2Title: '今でも重要な理由',
    sec2Item1: '歴史ある車両・駅舎・街並みを保存しているため。',
    sec2Item2: '高速移動では見落としがちな地域の生活圏を結ぶため。',
    sec2Item3: '四季の景観旅行を含む地域観光を支えるため。',
    sec3Title: '訪問前に確認すべきポイント',
    sec3Item1: '季節運行・臨時変更の有無を公式告知で確認する。',
    sec3Item2: '観光列車やテーマ列車の予約条件を事前に確認する。',
    sec3Item3: '乗換駅と最終列車時刻を確認し、帰路を確保する。',
    sec3Item4: '運賃・時刻・予約規則は必ず公式情報を参照する。',
    sec4Title: 'このサイトの役割',
    sec4Body: '当サイトは路線情報を分かりやすく整理し、公式情報への導線を提供します。最終判断は各運行会社の公式発表をご確認ください。',
  },
  'zh-TW': {
    title: '鐵道知識',
    subtitle: '關於日本路面電車、觀光列車與鐵道文化的知識文章。',
    articleTitle: '日本路面電車與觀光列車的簡史',
    articleIntro:
      '日本鐵道文化同時包含日常通勤用途的路面電車，以及重視旅遊體驗的觀光列車。除了高速鐵道外，地方電車與區域鐵道的歷史，也是日本旅行的重要魅力。',
    sec1Title: '從生活交通到地方文化',
    sec1Body:
      '許多路面電車最早是城市基礎交通。隨著都市發展，有些路線消失，有些則保留下來，逐步成為地方文化與觀光識別的重要元素。',
    sec2Title: '為什麼現在仍重要',
    sec2Item1: '保留了歷史車輛、車站與街景脈絡。',
    sec2Item2: '連結高速移動難以覆蓋的在地生活區。',
    sec2Item3: '支撐地方觀光，特別是季節型景觀旅行。',
    sec3Title: '出發前建議先確認',
    sec3Item1: '先看官方公告，確認季節班次與臨時異動。',
    sec3Item2: '確認觀光列車或主題列車是否需要預約。',
    sec3Item3: '確認轉乘節點與末班車時間，避免回程風險。',
    sec3Item4: '票價、時刻與訂位規則請以官方資訊為準。',
    sec4Title: '本網站的定位',
    sec4Body: '我們的目標是以易讀方式整理路線資訊，並提供官方連結。最終出行決策請以各營運方官方公告為準。',
  },
}

const content = computed(() => {
  if (locale.value === 'ja') return contentByLocale.ja
  if (locale.value === 'zh-TW') return contentByLocale['zh-TW']
  return contentByLocale.en
})
</script>
