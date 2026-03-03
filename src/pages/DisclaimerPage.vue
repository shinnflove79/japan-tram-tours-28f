<template>
  <main class="bg-background px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <h1 class="mb-6 font-heading text-4xl font-bold text-primary">{{ content.title }}</h1>
      <p class="mb-10 font-body text-gray-700">
        {{ content.intro }}
      </p>

      <section class="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.section1Title }}</h2>
        <p class="font-body leading-7 text-gray-700">
          {{ content.section1Body }}
        </p>
      </section>

      <section class="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.section2Title }}</h2>
        <p class="mb-3 font-body leading-7 text-gray-700">
          {{ content.section2Body1 }}
        </p>
        <p class="font-body leading-7 text-gray-700">
          {{ content.section2Body2 }}
        </p>
      </section>

      <section class="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.section3Title }}</h2>
        <p class="font-body leading-7 text-gray-700">
          {{ content.section3Body }}
        </p>
      </section>

      <section class="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.section4Title }}</h2>
        <p class="font-body leading-7 text-gray-700">
          {{ content.section4Body }}
        </p>
      </section>

      <section class="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ content.section5Title }}</h2>
        <p class="font-body text-gray-700">
          {{ content.section5Label }}
          <a href="mailto:shinnflove79@gmail.com" class="text-primary underline">shinnflove79@gmail.com</a>
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface DisclaimerContent {
  title: string
  intro: string
  section1Title: string
  section1Body: string
  section2Title: string
  section2Body1: string
  section2Body2: string
  section3Title: string
  section3Body: string
  section4Title: string
  section4Body: string
  section5Title: string
  section5Label: string
}

const { locale } = useI18n()

const contentByLocale: Record<'en' | 'ja' | 'zh-TW', DisclaimerContent> = {
  en: {
    title: 'Copyright and Disclaimer',
    intro:
      'This page applies to japanluxtrain.com (the "Website"). By accessing or using this Website, you acknowledge and agree to the terms below.',
    section1Title: '1. Nature of Content',
    section1Body:
      'This Website provides curated travel information for reference only. It does not constitute official notices, legal advice, investment advice, or travel guarantees. Timetables, fares, service status, and maintenance schedules may change at any time. Please refer to official operator announcements.',
    section2Title: '2. Copyright and Trademarks',
    section2Body1:
      'Original text, page design, and source code on this Website belong to the Website owner. Company names, route names, train names, and related trademarks mentioned on this Website belong to their respective rights holders.',
    section2Body2:
      'If you believe any content on this Website infringes your rights (including image, text, trademark, or other rights), please contact us via the email below. We will review and handle it promptly.',
    section3Title: '3. Third-Party Links',
    section3Body:
      'This Website may include third-party links (such as operator websites or booking platforms) for convenience and reference. The content, availability, accuracy, and privacy practices of those third-party websites are their own responsibility.',
    section4Title: '4. Limitation of Liability',
    section4Body:
      'To the extent permitted by law, this Website is not liable for any direct or indirect loss arising from use of information on this Website. Users should independently verify travel-related information.',
    section5Title: '5. Contact',
    section5Label: 'For copyright, licensing, or infringement issues, contact: ',
  },
  ja: {
    title: '著作権および免責事項',
    intro:
      '本ページは japanluxtrain.com（以下「当サイト」）に適用されます。当サイトを利用することにより、以下の内容に同意したものとみなされます。',
    section1Title: '1. 掲載情報の性質',
    section1Body:
      '当サイトの情報は旅行に関する参考情報として提供されています。公式告知、法的助言、投資助言、または旅行の保証を構成するものではありません。時刻、運賃、運休、保守情報などは随時変更される可能性があるため、各事業者の公式発表をご確認ください。',
    section2Title: '2. 著作権・商標',
    section2Body1:
      '当サイト上の独自文章、ページデザイン、ソースコードの権利は当サイト運営者に帰属します。当サイトに記載される会社名、路線名、列車名、関連商標は、それぞれの権利者に帰属します。',
    section2Body2:
      '画像・文章・商標等を含め、権利侵害の疑いがある場合は、下記メールアドレスまでご連絡ください。内容確認のうえ、速やかに対応します。',
    section3Title: '3. 外部リンク',
    section3Body:
      '当サイトには、利便性のために第三者サイト（運営会社公式サイトや予約サイト等）へのリンクが含まれる場合があります。第三者サイトの内容、可用性、正確性、プライバシーポリシーについては各サイトの責任となります。',
    section4Title: '4. 免責',
    section4Body:
      '法令で認められる範囲において、当サイトは当サイト情報の利用により生じたいかなる直接的・間接的損害についても責任を負いません。利用者ご自身で最新情報をご確認ください。',
    section5Title: '5. お問い合わせ',
    section5Label: '著作権・利用許諾・権利侵害に関する連絡先: ',
  },
  'zh-TW': {
    title: '版權與免責聲明',
    intro: '本頁面適用於 japanluxtrain.com（以下簡稱「本網站」）。當您存取或使用本網站，即表示您已閱讀並同意以下條款。',
    section1Title: '1. 內容性質',
    section1Body:
      '本網站提供之內容屬旅遊資訊整理與參考資料，不構成官方公告、法律意見、投資建議或行程保證。時刻、票價、停駛、維修等資訊可能隨時變更，請以各營運方官方公告為準。',
    section2Title: '2. 著作權與商標',
    section2Body1:
      '本網站之原創文字、頁面設計與程式碼，其權利歸本網站所有。文中提及之公司名稱、路線名稱、列車名稱及相關商標，權利均歸各自權利人所有。',
    section2Body2:
      '若您認為本網站內容涉及侵權（包含圖片、文字、商標或其他權利），請透過下方電子郵件聯繫我們。我們將於查核後儘速處理。',
    section3Title: '3. 第三方連結',
    section3Body:
      '本網站可能包含第三方網站連結（如營運方官網或訂票平台），僅供資訊參考與便利使用。第三方網站之內容、可用性、正確性與隱私政策，均由其自行負責。',
    section4Title: '4. 責任限制',
    section4Body:
      '在法律允許範圍內，本網站不就因使用本網站資訊所生之任何直接或間接損失負責。使用者應自行判斷並核對出行相關資訊。',
    section5Title: '5. 聯絡方式',
    section5Label: '版權、授權或侵權處理聯絡信箱：',
  },
}

const content = computed(() => {
  const current = locale.value
  if (current === 'ja') return contentByLocale.ja
  if (current === 'zh-TW') return contentByLocale['zh-TW']
  return contentByLocale.en
})
</script>
