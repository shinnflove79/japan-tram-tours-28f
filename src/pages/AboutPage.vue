<template>
  <main class="bg-background px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">
      <header class="mb-10">
        <h1 class="mb-4 font-heading text-4xl font-bold text-primary">{{ content.title }}</h1>
        <p class="font-body text-lg text-gray-700">{{ content.subtitle }}</p>
      </header>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <section class="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.whoTitle }}</h2>
          <p class="font-body leading-7 text-gray-700">{{ content.whoBody }}</p>
        </section>

        <section class="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.whatTitle }}</h2>
          <ul class="list-disc space-y-2 pl-5 font-body text-gray-700">
            <li>{{ content.whatItem1 }}</li>
            <li>{{ content.whatItem2 }}</li>
            <li>{{ content.whatItem3 }}</li>
          </ul>
        </section>
      </div>

      <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.principlesTitle }}</h2>
        <ul class="list-disc space-y-2 pl-5 font-body text-gray-700">
          <li>{{ content.principle1 }}</li>
          <li>{{ content.principle2 }}</li>
          <li>{{ content.principle3 }}</li>
        </ul>
      </section>

      <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.nonOfficialTitle }}</h2>
        <p class="font-body leading-7 text-gray-700">{{ content.nonOfficialBody }}</p>
      </section>

      <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.updateTitle }}</h2>
        <p class="font-body leading-7 text-gray-700">{{ content.updateBody }}</p>
      </section>

      <section class="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.contactTitle }}</h2>
        <p class="font-body text-gray-700">
          {{ content.contactBody }}
          <a href="mailto:shinnflove79@gmail.com" class="text-primary underline">shinnflove79@gmail.com</a>
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface AboutContent {
  title: string
  subtitle: string
  whoTitle: string
  whoBody: string
  whatTitle: string
  whatItem1: string
  whatItem2: string
  whatItem3: string
  principlesTitle: string
  principle1: string
  principle2: string
  principle3: string
  nonOfficialTitle: string
  nonOfficialBody: string
  updateTitle: string
  updateBody: string
  contactTitle: string
  contactBody: string
}

const { locale } = useI18n()

const contentByLocale: Record<'en' | 'ja' | 'zh-TW', AboutContent> = {
  en: {
    title: 'About Japan Lux Train',
    subtitle:
      'Japan Lux Train is an independent travel information website focused on sightseeing train and tram experiences across Japan.',
    whoTitle: 'Who We Are',
    whoBody:
      'We are an independent information curator. Our goal is to help travelers quickly understand route features and plan better rail trips in Japan.',
    whatTitle: 'What We Provide',
    whatItem1: 'Route discovery by region',
    whatItem2: 'Key facts such as operator, route, and establishment year',
    whatItem3: 'External links to official operator and booking pages',
    principlesTitle: 'Content Principles',
    principle1: 'We prioritize publicly available factual information.',
    principle2: 'Operational details can change; official announcements always take priority.',
    principle3: 'We continuously review links and fix broken entries when found.',
    nonOfficialTitle: 'Non-Official Statement',
    nonOfficialBody:
      'This website is not officially affiliated with, endorsed by, or operated by any railway operator mentioned on the site. Names and trademarks belong to their respective owners.',
    updateTitle: 'Update Policy',
    updateBody:
      'We periodically review route pages, external links, and page quality. Broken links and outdated references are corrected as quickly as possible.',
    contactTitle: 'Contact',
    contactBody: 'For feedback, corrections, collaboration, or copyright inquiries, please contact: ',
  },
  ja: {
    title: 'Japan Lux Train について',
    subtitle: 'Japan Lux Train は、日本各地の観光列車・路面電車情報を整理する独立系の情報サイトです。',
    whoTitle: '私たちについて',
    whoBody: '私たちは独立した情報キュレーターとして、路線の特徴を分かりやすく整理し、旅行計画に役立つ情報提供を目指しています。',
    whatTitle: '提供内容',
    whatItem1: '地域別の路線整理',
    whatItem2: '運行会社・路線・開業年などの基本情報',
    whatItem3: '公式サイトおよび予約ページへの外部リンク',
    principlesTitle: 'コンテンツ方針',
    principle1: '公開されている事実情報を優先して掲載します。',
    principle2: '運行情報は変動するため、最終的には公式発表を優先してください。',
    principle3: '外部リンクは定期的に確認し、無効なものは随時修正します。',
    nonOfficialTitle: '非公式に関する声明',
    nonOfficialBody:
      '当サイトは、掲載されている鉄道事業者の公式サイトではなく、各社からの承認・運営を受けていません。名称・商標等の権利は各権利者に帰属します。',
    updateTitle: '更新ポリシー',
    updateBody: '路線ページ、外部リンク、表示内容を定期的に見直し、リンク切れや古い情報は可能な限り速やかに更新します。',
    contactTitle: 'お問い合わせ',
    contactBody: '誤記修正・ご意見・協業・権利関連のお問い合わせ: ',
  },
  'zh-TW': {
    title: '關於 Japan Lux Train',
    subtitle: 'Japan Lux Train 是一個獨立的日本觀光列車與路面電車資訊網站，提供旅行規劃參考。',
    whoTitle: '我們是誰',
    whoBody: '我們是獨立資訊整理者，目標是讓旅客更快速理解路線特色，並更有效率地規劃日本鐵道旅程。',
    whatTitle: '我們提供什麼',
    whatItem1: '依地區整理路線內容',
    whatItem2: '營運方、路線、設立年份等基礎資訊',
    whatItem3: '通往官方網站與訂票頁的外部連結',
    principlesTitle: '內容原則',
    principle1: '以公開可查之事實資訊為優先。',
    principle2: '營運資訊可能異動，最終請以官方公告為準。',
    principle3: '我們會定期檢查外部連結並修正失效項目。',
    nonOfficialTitle: '非官方聲明',
    nonOfficialBody: '本網站並非任何鐵道營運方之官方網站，亦未受其授權營運或背書。文中名稱與商標權利歸各自權利人所有。',
    updateTitle: '更新政策',
    updateBody: '我們會定期檢查路線頁、外部連結與內容品質，若發現失效連結或過期資訊將盡快修正。',
    contactTitle: '聯絡方式',
    contactBody: '若有勘誤、建議、合作或權利相關需求，請聯絡：',
  },
}

const content = computed(() => {
  if (locale.value === 'ja') return contentByLocale.ja
  if (locale.value === 'zh-TW') return contentByLocale['zh-TW']
  return contentByLocale.en
})
</script>
