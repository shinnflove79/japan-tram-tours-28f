export type InsightsLocale = 'en' | 'ja' | 'zh-TW'

export interface InsightArticleContent {
  title: string
  excerpt: string
  intro: string
  sec1Title: string
  sec1Body: string
  sec2Title: string
  sec2Items: string[]
  sec3Title: string
  sec3Body: string
}

export interface InsightArticle {
  slug: string
  publishedAt: string
  content: Record<InsightsLocale, InsightArticleContent>
}

export const insights: InsightArticle[] = [
  {
    slug: 'best-luxury-trains-in-japan',
    publishedAt: '2026-03-19',
    content: {
      en: {
        title: 'Best Luxury Trains in Japan',
        excerpt:
          'A practical shortlist of Japan luxury trains, from premium sightseeing services to overnight rail experiences.',
        intro:
          'Japan luxury trains vary widely in style. Some focus on scenic windows and refined interiors, while others deliver multi-day hospitality with dining, suites, and curated regional experiences.',
        sec1Title: 'What Makes a Train Feel Luxurious',
        sec1Body:
          'Luxury on Japanese railways usually comes from space, service, route design, and atmosphere. The strongest candidates combine premium seating, memorable scenery, and a clear sense of destination or occasion.',
        sec2Title: 'Top Luxury Trains to Compare First',
        sec2Items: [
          'Twilight Express MIZUKAZE for premium overnight travel and signature hospitality.',
          'WEST EXPRESS GINGA for long-distance comfort with a distinctive rail-travel identity.',
          'Izukyu Resort 21 and SAPHIR Odoriko for scenic leisure travel with stronger sightseeing appeal.',
        ],
        sec3Title: 'How to Choose the Right One',
        sec3Body:
          'Start by deciding whether you want an overnight experience, a high-end day trip, or a scenic limited run. Then confirm route seasonality, booking rules, and official sales channels before making plans.',
      },
      ja: {
        title: '日本でおすすめの豪華列車',
        excerpt:
          '上質な観光列車から宿泊型の体験まで、日本でまず比較したい豪華列車を実用目線で整理します。',
        intro:
          '日本の豪華列車は、座席の上質さだけでなく、景色、食事、接客、旅全体の演出まで含めて魅力が決まります。日帰り向けと宿泊向けでは選び方も変わります。',
        sec1Title: '豪華列車らしさを決める要素',
        sec1Body:
          '快適な座席や個室、丁寧なサービス、沿線風景、そして移動そのものを特別な体験に変える設計が重要です。単に価格が高いだけでなく、旅の印象に残るかどうかで差が出ます。',
        sec2Title: 'まず比較したい代表列車',
        sec2Items: [
          'TWILIGHT EXPRESS 瑞風は、夜行の上質な体験を重視したい人に向いています。',
          'WEST EXPRESS GINGA は、長距離移動と独自の旅情を両立したい人向けです。',
          '伊豆急リゾート21 やサフィール踊り子は、景色重視の上質な日帰り旅行と相性が良いです。',
        ],
        sec3Title: '選び方のコツ',
        sec3Body:
          'まず宿泊型か日帰り型かを決め、そのうえで運行時期、予約難易度、公式販売経路を確認すると選びやすくなります。',
      },
      'zh-TW': {
        title: '日本最值得先比較的豪華列車',
        excerpt:
          '從高質感觀光列車到過夜型鐵道體驗，整理日本最值得優先比較的豪華列車選項。',
        intro:
          '日本的豪華列車不只是座位更舒適，真正的差異還包括服務、餐食、景觀與整段旅程的氛圍。日間體驗和夜行體驗的選擇標準也不相同。',
        sec1Title: '什麼讓列車更有豪華感',
        sec1Body:
          '豪華感通常來自空間、服務、路線設計與旅程節奏。真正值得優先看的列車，會把高品質座席、風景與旅行儀式感結合在一起。',
        sec2Title: '最值得先比較的列車',
        sec2Items: [
          'Twilight Express MIZUKAZE 適合想體驗高端夜行列車的人。',
          'WEST EXPRESS GINGA 適合重視長距離舒適度與整體旅行氛圍的人。',
          'Izukyu Resort 21 與 SAPHIR Odoriko 更適合景觀導向的高品質日間旅行。',
        ],
        sec3Title: '如何選到適合自己的列車',
        sec3Body:
          '先決定你要的是過夜型、日間型，還是偏景觀休閒的高質感列車，再確認運行季節、預約規則與官方購票管道。',
      },
    },
  },
  {
    slug: 'best-sightseeing-trains-in-japan',
    publishedAt: '2026-03-19',
    content: {
      en: {
        title: 'Best Sightseeing Trains in Japan',
        excerpt:
          'A simple guide to Japan sightseeing trains, including scenic day routes, themed services, and heritage-style rail experiences.',
        intro:
          'The best sightseeing trains in Japan are not all luxurious. Some stand out for open windows, mountain valleys, bamboo forests, coastal views, or character-filled local identity.',
        sec1Title: 'How Sightseeing Trains Differ from Regular Trains',
        sec1Body:
          'Sightseeing trains are designed around experience rather than speed. They often highlight scenic sections, unusual seating layouts, themed cars, or stronger local storytelling than ordinary transport services.',
        sec2Title: 'Strong Sightseeing Picks Across Japan',
        sec2Items: [
          'Sagano Romantic Train for Kyoto scenery and a classic sightseeing atmosphere.',
          'Enoden and Eizan for smaller-scale but memorable route character near major tourism areas.',
          'Panda Kuroshio and Hello Kitty HARUKA for themed travel with strong visual identity.',
        ],
        sec3Title: 'Planning Advice',
        sec3Body:
          'Use region and season as your main filters. Scenic value changes a lot between sakura, summer green, autumn foliage, and winter light, so route timing matters as much as the train itself.',
      },
      ja: {
        title: '日本でおすすめの観光列車',
        excerpt:
          '絶景ルート、テーマ列車、ローカル色の強い路線まで、日本で比較したい観光列車をまとめます。',
        intro:
          '日本の観光列車は、豪華さだけではなく、景色、沿線文化、車内演出、ローカルらしさで魅力が決まります。速さより体験を重視する人に向いています。',
        sec1Title: '通常列車との違い',
        sec1Body:
          '観光列車は移動効率よりも体験価値を重視します。景色の良い区間、特徴的な座席配置、テーマ装飾、地域の物語性などが強く打ち出されるのが特徴です。',
        sec2Title: 'まず見ておきたい代表例',
        sec2Items: [
          '嵯峨野トロッコ列車は、京都らしい景観と観光列車らしい雰囲気が分かりやすいです。',
          '江ノ電や叡山電車は、大規模ではなくても路線の個性が強いです。',
          'パンダくろしおや Hello Kitty HARUKA は、テーマ性の強い体験を探す人に向いています。',
        ],
        sec3Title: '計画するときの考え方',
        sec3Body:
          '地域と季節を先に決めると選びやすくなります。桜、新緑、紅葉、冬景色で同じ路線でも印象が大きく変わります。',
      },
      'zh-TW': {
        title: '日本最值得優先看的觀光列車',
        excerpt:
          '從絕景路線、主題列車到地方特色強烈的鐵道，整理日本最值得先比較的觀光列車。',
        intro:
          '日本的觀光列車不一定都走豪華路線。很多列車的魅力來自竹林、海景、山谷、地方文化與列車本身的旅行氛圍。',
        sec1Title: '觀光列車和一般列車的差別',
        sec1Body:
          '觀光列車重視體驗，而不是單純把人快速送到目的地。它通常更強調沿線風景、車內配置、主題設計與地方故事。',
        sec2Title: '值得先比較的代表路線',
        sec2Items: [
          'Sagano Romantic Train 很適合想體驗京都景觀列車氣氛的人。',
          'Enoden 與 Eizan 規模不大，但路線個性非常鮮明。',
          'Panda Kuroshio 與 Hello Kitty HARUKA 適合想找主題感更強列車的人。',
        ],
        sec3Title: '規劃建議',
        sec3Body:
          '先用地區與季節縮小範圍最有效。櫻花、新綠、紅葉與冬季光線都會大幅改變同一路線的觀感。',
      },
    },
  },
  {
    slug: 'best-tram-rides-in-japan',
    publishedAt: '2026-03-19',
    content: {
      en: {
        title: 'Best Tram Rides in Japan',
        excerpt:
          'A route-first guide to Japan tram rides, from historic streetcars to local lines with strong scenery and neighborhood character.',
        intro:
          'Japan tram rides are often smaller in scale than famous sightseeing trains, but they can offer a stronger sense of place. Many of the best lines combine daily local use with memorable scenery and history.',
        sec1Title: 'Why Tram Routes Are Worth Prioritizing',
        sec1Body:
          'Streetcars put you closer to neighborhoods, shopping streets, shrines, coastlines, and everyday life. They are often easier to combine with walking than long-distance rail experiences.',
        sec2Title: 'Best Tram Routes to Start With',
        sec2Items: [
          'Enoden for coastal views and temple access between Enoshima and Kamakura.',
          'Arashiyama Tram for Kyoto atmosphere, bamboo-adjacent scenery, and easy sightseeing rhythm.',
          'Hiroshima, Nagasaki, and Toden Arakawa for historic urban tram culture with strong local identity.',
        ],
        sec3Title: 'Best Use Cases for Visitors',
        sec3Body:
          'Choose tram routes when you want flexible sightseeing, easier short stops, and a more local pace. They work especially well for half-day plans and first-time city exploration.',
      },
      ja: {
        title: '日本でおすすめの路面電車体験',
        excerpt:
          '歴史ある市電から景色の良いローカル路線まで、日本で優先して見たい路面電車をルート目線で整理します。',
        intro:
          '路面電車は観光列車ほど派手ではありませんが、街の空気や暮らしに近い場所を走るため、地域らしさを強く感じやすい移動手段です。',
        sec1Title: '路面電車を優先する価値',
        sec1Body:
          '商店街、寺社、海辺、住宅地などに近く、歩き旅と組み合わせやすいのが魅力です。長距離列車よりも、短時間で街の雰囲気をつかみやすい傾向があります。',
        sec2Title: 'まず見たい代表ルート',
        sec2Items: [
          '江ノ電は、海沿いの景色と寺社アクセスを両立した定番ルートです。',
          '嵐電は、京都らしい街並みと観光の歩きやすさが魅力です。',
          '広島、長崎、都電荒川線では、歴史ある都市型路面電車文化を感じやすいです。',
        ],
        sec3Title: 'どんな旅行者に向いているか',
        sec3Body:
          '柔軟に途中下車したい人、半日観光を組みたい人、街歩きとセットで楽しみたい人には路面電車が特に向いています。',
      },
      'zh-TW': {
        title: '日本最值得優先體驗的路面電車',
        excerpt:
          '從歷史悠久的市電到兼具景觀與在地感的地方路線，整理日本最值得先看的路面電車體驗。',
        intro:
          '路面電車不像觀光列車那麼高調，但因為更靠近街區、商店街與日常生活，往往更能讓人感受到地方氛圍。',
        sec1Title: '為什麼路面電車值得優先安排',
        sec1Body:
          '它通常更接近日常生活圈、寺社、海邊與老街，也更適合搭配步行探索。比起長距離鐵道，路面電車更容易在短時間內看懂一座城市。',
        sec2Title: '最值得先看的代表路線',
        sec2Items: [
          'Enoden 同時具備海景與寺廟散策動線，是最經典的入門選擇之一。',
          'Arashiyama Tram 適合想用更輕鬆節奏體驗京都氛圍的人。',
          '廣島、長崎與都電荒川線能更直接看見日本城市型路面電車文化。',
        ],
        sec3Title: '最適合哪些旅遊情境',
        sec3Body:
          '如果你想靈活上下車、安排半日散策，或把城市步行與鐵道體驗結合，路面電車通常比長距離列車更適合。',
      },
    },
  },
  {
    slug: 'history-of-japan-streetcars',
    publishedAt: '2026-03-03',
    content: {
      en: {
        title: 'A Short History of Japan Streetcars and Sightseeing Trains',
        excerpt:
          "How local tram systems evolved from daily transport into cultural symbols and travel highlights.",
        intro:
          "Japan's rail culture includes both practical city streetcars and experience-focused sightseeing trains.",
        sec1Title: 'From Utility to Identity',
        sec1Body:
          'Many streetcar lines began as essential urban infrastructure. Over time, some became deeply tied to local identity as stations, neighborhoods, and tourism patterns evolved around them.',
        sec2Title: 'What Changed Over Time',
        sec2Items: [
          'Streetcars once handled everyday city movement before cars and metros reduced their share.',
          'Tourism later gave selected lines a second life as heritage and scenery-rich experiences.',
          'Operators began emphasizing history, rolling stock design, and regional storytelling.',
        ],
        sec3Title: 'Why This Matters for Travelers',
        sec3Body:
          'Understanding the history behind these routes makes modern rides more meaningful. Many lines still reflect the pace, geography, and culture that shaped the cities around them.',
      },
      ja: {
        title: '日本の路面電車と観光列車の簡単な歴史',
        excerpt:
          '日常の交通手段だった路面電車が、どのように地域文化や観光資源として再評価されたのかを短く整理します。',
        intro:
          '日本の鉄道文化には、実用的な市電と、体験を重視した観光列車の両方があります。',
        sec1Title: '実用から地域の象徴へ',
        sec1Body:
          '多くの路面電車は都市交通の主役として始まりましたが、時代とともに街並みや観光動線の一部として地域の個性を担う存在になりました。',
        sec2Title: '時代とともに変わった点',
        sec2Items: [
          'かつては日常移動の中心でしたが、自動車や地下鉄の普及で役割が変化しました。',
          'その後、一部の路線は歴史性や景観価値によって観光資源として再評価されました。',
          '車両デザインや沿線の物語を前面に出す運営も増えました。',
        ],
        sec3Title: '旅行者にとっての意味',
        sec3Body:
          '歴史を知ってから乗ると、現代の路線でも街の成り立ちや地域文化がより見えやすくなります。',
      },
      'zh-TW': {
        title: '日本路面電車與觀光列車的簡短歷史',
        excerpt:
          '整理原本作為日常交通工具的路面電車，如何逐漸成為地方文化象徵與觀光亮點。',
        intro:
          '日本的鐵道文化同時包含務實的市電系統，以及以體驗為核心的觀光列車。',
        sec1Title: '從實用交通到地方象徵',
        sec1Body:
          '許多路面電車最初是城市交通骨幹，後來隨著街區發展與旅遊動線改變，逐漸成為地方特色的一部分。',
        sec2Title: '一路演變的關鍵變化',
        sec2Items: [
          '早期的路面電車承擔大量日常移動功能。',
          '汽車與地鐵普及後，一部分路線的角色逐漸轉向文化保存與觀光體驗。',
          '營運方也開始強調車輛設計、歷史故事與沿線風景。',
        ],
        sec3Title: '這對旅客有什麼幫助',
        sec3Body:
          '先了解背景再搭乘，會更容易看見一條路線和城市發展、地方文化之間的關係。',
      },
    },
  },
  {
    slug: 'plan-a-scenic-tram-day',
    publishedAt: '2026-03-07',
    content: {
      en: {
        title: 'How to Plan a Scenic Tram Day in Japan',
        excerpt:
          'A practical framework for building a half-day or full-day itinerary around tram rides, neighborhoods, and views.',
        intro:
          'A scenic tram day works best when the tram is part of a wider walking route rather than the only attraction.',
        sec1Title: 'Start with Route Shape',
        sec1Body:
          'Choose a line that naturally links scenery, neighborhoods, and a few easy stops. Coastal routes, temple corridors, and older city districts often work especially well.',
        sec2Title: 'What to Include in the Day',
        sec2Items: [
          'One anchor ride with the strongest visual appeal.',
          'Two or three stops for walking, food, or local landmarks.',
          'Enough slack in the schedule to ride twice if the light or weather improves.',
        ],
        sec3Title: 'Simple Planning Tips',
        sec3Body:
          'Check tram frequency, payment method, and the best time of day for scenery. Morning and late afternoon usually produce the most pleasant light for slower neighborhood routes.',
      },
      ja: {
        title: '日本で景色を楽しむ路面電車の一日を計画する方法',
        excerpt:
          '半日から一日で組める、路面電車と街歩き、景色を組み合わせた実用的な旅程の考え方です。',
        intro:
          '景色を楽しむ路面電車の日程は、電車そのものだけでなく、歩く区間や立ち寄り先を含めて考えると満足度が上がります。',
        sec1Title: 'まずは路線の形を確認する',
        sec1Body:
          '景色、街並み、途中下車しやすい停留場が自然につながる路線を選ぶのが基本です。海沿い、寺社周辺、古い市街地を走る路線は特に組みやすいです。',
        sec2Title: '一日の中に入れたい要素',
        sec2Items: [
          '景観の良いメインの乗車区間を一つ決める。',
          '散策、食事、見学ができる途中下車ポイントを二、三か所入れる。',
          '天気や光の変化に合わせてもう一度乗れる余裕を残す。',
        ],
        sec3Title: '計画のコツ',
        sec3Body:
          '運行間隔、支払い方法、景色が最もきれいに見える時間帯を事前に確認しておくと動きやすくなります。',
      },
      'zh-TW': {
        title: '如何規劃日本的景觀路面電車一日行程',
        excerpt:
          '提供從半日到一日都適用的實用框架，把路面電車、散步與沿線風景整合成順暢行程。',
        intro:
          '好的一日電車行程，不是只把車程排滿，而是讓乘車、步行與停留節奏互相配合。',
        sec1Title: '先看路線形狀',
        sec1Body:
          '優先選擇能自然串連風景、街區與下車散策點的路線。海邊、寺社周邊與老城區通常最容易安排。',
        sec2Title: '一日行程該放進哪些元素',
        sec2Items: [
          '先決定一段最值得搭的主軸車程。',
          '安排兩到三個適合步行、吃飯或看景點的下車點。',
          '保留一點彈性，讓你能依光線或天氣調整搭乘時間。',
        ],
        sec3Title: '簡單規劃技巧',
        sec3Body:
          '先查班距、付款方式，以及哪個時段最適合看風景。對慢節奏的城市路線來說，早上和傍晚通常最舒服。',
      },
    },
  },
  {
    slug: 'tram-etiquette-in-japan',
    publishedAt: '2026-03-12',
    content: {
      en: {
        title: 'Tram Etiquette in Japan: A Practical Guide for Visitors',
        excerpt:
          'Simple etiquette tips that help travelers ride Japanese trams smoothly, respectfully, and with less confusion.',
        intro:
          'Japanese tram etiquette is usually straightforward, but small habits can make a noticeable difference for both locals and visitors.',
        sec1Title: 'The Basics That Matter Most',
        sec1Body:
          'Keep bags compact, avoid blocking doors, and pay attention to boarding rules because some lines separate entry and exit by door.',
        sec2Title: 'Situations to Watch For',
        sec2Items: [
          'Quietly queue at stops and let passengers exit first.',
          'Avoid loud phone calls and be mindful of crowded sections.',
          'Check whether you pay when boarding or when leaving, as systems vary by operator.',
        ],
        sec3Title: 'Why Etiquette Helps',
        sec3Body:
          'Good etiquette does more than avoid mistakes. It makes the ride smoother, lowers stress, and helps you notice how these routes fit into everyday local life.',
      },
      ja: {
        title: '日本の路面電車マナー: 旅行者向け実用ガイド',
        excerpt:
          '初めてでも迷いにくい、日本の路面電車で押さえておきたい基本マナーを簡潔にまとめます。',
        intro:
          '日本の路面電車で必要なマナーは難しくありませんが、小さな配慮が周囲の快適さを大きく左右します。',
        sec1Title: 'まず押さえたい基本',
        sec1Body:
          '荷物はコンパクトにまとめ、ドア付近をふさがず、乗車口と降車口の違いがある路線では案内表示をよく確認しましょう。',
        sec2Title: '特に気をつけたい場面',
        sec2Items: [
          '停留場では静かに並び、降りる人を先に通す。',
          '混雑時は大きな声での通話を避け、周囲に配慮する。',
          '運賃を乗車時に払うのか降車時に払うのか、事業者ごとの違いを確認する。',
        ],
        sec3Title: 'マナーを知るメリット',
        sec3Body:
          'マナーを知っていると失敗を減らせるだけでなく、移動がスムーズになり、街の暮らしの中で路面電車がどう使われているかも見えやすくなります。',
      },
      'zh-TW': {
        title: '日本搭乘電車禮儀: 旅客實用指南',
        excerpt:
          '用簡單明確的方式整理旅客在日本搭乘路面電車時最該注意的基本禮儀。',
        intro:
          '日本路面電車的乘車規矩其實不複雜，但一些小細節會直接影響自己與他人的搭乘體驗。',
        sec1Title: '最重要的基本原則',
        sec1Body:
          '把行李收好、不要堵住車門，並注意各路線的上下車規則，因為有些系統會區分乘車門與下車門。',
        sec2Title: '特別需要留意的情境',
        sec2Items: [
          '在站牌安靜排隊，先讓車上乘客下車。',
          '避免大聲講電話，尖峰時段尤其要留意周圍空間。',
          '先確認是上車付款還是下車付款，因為不同營運商可能不同。',
        ],
        sec3Title: '為什麼懂禮儀很重要',
        sec3Body:
          '懂禮儀不只是避免出錯，也能讓整段乘車更順、更輕鬆，並更容易感受到路面電車在當地日常生活中的位置。',
      },
    },
  },
]

export const getInsightsForLocale = (locale: InsightsLocale) =>
  insights.map((article) => ({
    ...article,
    content: article.content[locale] || article.content.en,
  }))

export const getInsightBySlug = (slug: string, locale: InsightsLocale) => {
  const article = insights.find((entry) => entry.slug === slug)
  if (!article) return undefined

  return {
    ...article,
    content: article.content[locale] || article.content.en,
  }
}
