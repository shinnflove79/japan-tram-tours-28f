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
          '上質な観光列車から寝台体験まで、日本で比較したい豪華列車を実用目線で整理します。',
        intro:
          '日本の豪華列車は、車内の上質さだけでなく、景色、食事、接客、旅の演出まで含めて魅力が決まります。日帰り向きと宿泊向きでは選び方も変わります。',
        sec1Title: '豪華列車らしさを決める要素',
        sec1Body:
          '快適な座席や個室、丁寧なサービス、沿線風景、そして移動そのものを特別な体験に変える設計が重要です。単に価格が高いだけでなく、旅の印象に残るかどうかで差が出ます。',
        sec2Title: 'まず比較したい代表列車',
        sec2Items: [
          'トワイライトエクスプレス瑞風は、夜行の上質体験を重視したい人向け。',
          'WEST EXPRESS GINGA は、長距離移動と独自の世界観を両立したい人向け。',
          '伊豆急リゾート21 や SAPHIR 踊り子は、景観重視の上質な日帰り旅と相性が良い。',
        ],
        sec3Title: '選び方のコツ',
        sec3Body:
          'まず宿泊型か日帰り型かを決め、そのうえで運行時期、予約難度、公式販売経路を確認すると選びやすくなります。',
      },
      'zh-TW': {
        title: '日本最值得優先比較的豪華列車',
        excerpt:
          '從高級觀光列車到過夜型鐵道體驗，整理日本最值得先比較的豪華列車選項。',
        intro:
          '日本的豪華列車不只是座位更舒適，真正的差異還包括服務、餐飲、景觀與整體旅程氛圍。日間體驗和夜行體驗的選擇標準也不同。',
        sec1Title: '什麼會讓列車更有豪華感',
        sec1Body:
          '豪華感通常來自空間、服務、路線設計與旅程節奏。真正值得優先看的列車，會把高品質座席、風景與旅途儀式感結合在一起。',
        sec2Title: '最值得先比較的列車',
        sec2Items: [
          'Twilight Express MIZUKAZE 適合想體驗高端夜行列車的人。',
          'WEST EXPRESS GINGA 適合重視長距離舒適度與整體旅行氛圍的人。',
          'Izukyu Resort 21 與 SAPHIR Odoriko 更適合景觀導向的高品質日間旅行。',
        ],
        sec3Title: '如何選到適合自己的列車',
        sec3Body:
          '先決定你要的是過夜型、日歸型，還是偏景觀休閒的高級列車，再確認運行季節、預約規則與官方購票管道。',
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
          '日本の観光列車は、豪華さだけでなく、景色、沿線文化、車両演出、ローカルらしさで魅力が決まります。速さより体験を重視する人に向いています。',
        sec1Title: '通常列車との違い',
        sec1Body:
          '観光列車は移動効率よりも体験価値を重視します。景色の良い区間、特徴的な座席配置、テーマ装飾、地域の物語性などが強く打ち出されるのが特徴です。',
        sec2Title: 'まず見ておきたい代表例',
        sec2Items: [
          '嵯峨野ロマンチック列車は、京都らしい景観と観光列車らしさが分かりやすい。',
          '江ノ電や叡山電鉄は、大規模ではないが路線の個性が強い。',
          'パンダくろしおや Hello Kitty HARUKA は、テーマ性の強い体験を探す人に向いている。',
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
          '日本的觀光列車不一定都走豪華路線。很多列車的魅力來自竹林、海景、山谷、地方文化與車廂本身的旅行氛圍。',
        sec1Title: '觀光列車和一般列車的差別',
        sec1Body:
          '觀光列車重視體驗，而不是單純把人快速送到目的地。它們通常更強調沿線風景、車內配置、主題設計與地方故事。',
        sec2Title: '值得先比較的代表路線',
        sec2Items: [
          'Sagano Romantic Train 很適合想體驗京都景觀列車氛圍的人。',
          'Enoden 與 Eizan 規模不大，但路線個性非常鮮明。',
          'Panda Kuroshio 與 Hello Kitty HARUKA 適合想找主題感更強列車的人。',
        ],
        sec3Title: '規劃建議',
        sec3Body:
          '先用地區與季節縮小範圍最有效。櫻花、新綠、紅葉與冬季光線會大幅改變同一路線的觀感。',
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
          '歴史ある市電から景観の良いローカル路線まで、日本で優先して見たい路面電車を路線目線で整理します。',
        intro:
          '路面電車は観光列車ほど派手ではありませんが、街の空気や暮らしに近い場所を走るため、地域らしさを強く感じやすい移動手段です。',
        sec1Title: '路面電車を優先する価値',
        sec1Body:
          '商店街、寺社、海辺、住宅地などに近く、歩き旅と組み合わせやすいのが強みです。長距離列車よりも、短時間で地域の雰囲気を掴みやすい傾向があります。',
        sec2Title: 'まず見たい代表路線',
        sec2Items: [
          '江ノ電は、海沿いの景色と寺社アクセスを両立した定番路線。',
          '嵐電は、京都らしい街並みと観光の歩きやすさが魅力。',
          '広島、長崎、都電荒川線は、歴史ある都市型路面電車文化を感じやすい。',
        ],
        sec3Title: 'どんな旅行者に向いているか',
        sec3Body:
          '柔軟に途中下車したい人、半日観光を組みたい人、街歩きとセットで楽しみたい人には路面電車が特に向いています。',
      },
      'zh-TW': {
        title: '日本最值得優先體驗的路面電車',
        excerpt:
          '從歷史悠久的市電到景觀與在地感兼具的地方路線，整理日本最值得先看的路面電車體驗。',
        intro:
          '路面電車不像觀光列車那麼高調，但因為更貼近街區、商店街與日常生活，往往更能讓人感受到地方氣氛。',
        sec1Title: '為什麼路面電車值得優先安排',
        sec1Body:
          '它們通常更靠近生活區、寺社、海邊與老街，也更適合搭配步行探索。比起長距離鐵道，路面電車更容易在短時間內看懂一座城市。',
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
      ja: {
        title: '日本の路面電車と観光列車の短い歴史',
        excerpt:
          '日常交通として始まった路面電車が、地域文化と観光体験の一部へと変化してきた流れを手短に整理します。',
        intro:
          '日本の鉄道文化には、実用的な都市型路面電車と、体験重視の観光列車の両方が含まれています。',
        sec1Title: '日常の交通から地域文化へ',
        sec1Body:
          '多くの路面電車は都市交通として始まりましたが、時代の変化を経て、現在では地域の象徴や観光資源としての価値も高まっています。',
        sec2Title: '今も重要である理由',
        sec2Items: [
          '歴史ある車両や駅周辺の景観を残していること。',
          '高速移動では見えにくい地域の日常に触れられること。',
          '季節の風景と結びついた地域観光を支えていること。',
        ],
        sec3Title: '訪問前の確認',
        sec3Body:
          '時刻、予約条件、運賃は変更されることがあるため、最終判断は各運行会社の公式案内で確認してください。',
      },
      'zh-TW': {
        title: '日本路面電車與觀光列車的簡短歷史',
        excerpt:
          '快速了解日本的路面電車如何從日常交通，逐漸成為地方文化與觀光體驗的重要元素。',
        intro:
          '日本的鐵道文化同時包含實用導向的城市路面電車，以及重視旅遊體驗的觀光列車。',
        sec1Title: '從日常交通到地方文化',
        sec1Body:
          '許多路面電車最初是城市基礎交通，隨著城市發展與路線更替，留下來的系統逐漸成為地方文化與觀光象徵。',
        sec2Title: '為什麼現在仍然重要',
        sec2Items: [
          '保留歷史車輛、車站與街景脈絡。',
          '補上高速交通難以覆蓋的在地生活視角。',
          '支撐地方觀光，尤其是季節型景觀旅行。',
        ],
        sec3Title: '出發前提醒',
        sec3Body:
          '時刻、票價與預約規則可能調整，出發前請以各營運公司的官方公告為準。',
      },
    },
  },
  {
    slug: 'plan-a-scenic-tram-day',
    publishedAt: '2026-03-03',
    content: {
      en: {
        title: 'How to Plan a Scenic Tram Day in Japan',
        excerpt:
          'A practical one-day planning method for scenic tram travel, transfers, and walking-friendly stops.',
        intro:
          'A good tram trip balances route character, transfer convenience, and nearby walking spots.',
        sec1Title: 'Pick One Route Theme',
        sec1Body:
          'Choose one clear direction for the day: coastal views, historical districts, mountain scenery, or city retro streets.',
        sec2Title: 'Simple Planning Checklist',
        sec2Items: [
          'Confirm operating hours and first or last departure times.',
          'Save major transfer stations and emergency alternatives.',
          'Check weather and daylight hours for photo-friendly timing.',
        ],
        sec3Title: 'Best Practice',
        sec3Body:
          'Use this site for overview, then finalize with official operator notices to avoid outdated schedule or booking information.',
      },
      ja: {
        title: '日本で景観路面電車の一日旅を計画する方法',
        excerpt:
          'ルート選びから乗り換え確認、徒歩で立ち寄れる周辺スポットまで、一日旅の基本的な組み立て方をまとめます。',
        intro:
          '満足度の高い路面電車旅は、路線の個性、乗り換えやすさ、周辺散策のしやすさのバランスで決まります。',
        sec1Title: 'テーマを一つ決める',
        sec1Body:
          '海沿い、歴史地区、山の景色、レトロな街並みなど、その日の軸を先に決めると行程が整理しやすくなります。',
        sec2Title: '基本のチェックリスト',
        sec2Items: [
          '始発と終電、運行間隔を確認する。',
          '主要な乗換駅と代替ルートを控えておく。',
          '天気と日没時刻を見て、撮影しやすい時間帯を決める。',
        ],
        sec3Title: '実践のコツ',
        sec3Body:
          'このサイトで全体像を掴み、最終的な時刻や予約情報は公式サイトで確定するのが安全です。',
      },
      'zh-TW': {
        title: '如何規劃日本路面電車景觀一日行程',
        excerpt:
          '從選路線、安排轉乘到安排行走與拍照節奏，一次整理適合新手的一日規劃方式。',
        intro:
          '要讓一整天的電車旅程更順，關鍵在於主題明確、轉乘清楚、沿線步行探索方便。',
        sec1Title: '先決定一個主題',
        sec1Body:
          '可以從海景、歷史街區、山線景觀或復古城市街道中擇一，先定主題會讓整體安排更聚焦。',
        sec2Title: '實用檢查清單',
        sec2Items: [
          '確認營運時段與首末班資訊。',
          '記下主要轉乘站與備用替代路線。',
          '依天氣與日照安排拍照時間。',
        ],
        sec3Title: '建議做法',
        sec3Body:
          '先用本站做初步比較，最後仍請回到官方網站確認最新時刻、票價與預約條件。',
      },
    },
  },
  {
    slug: 'tram-etiquette-in-japan',
    publishedAt: '2026-03-03',
    content: {
      en: {
        title: 'Tram Etiquette in Japan: Practical Rules for Visitors',
        excerpt:
          'A clear etiquette guide for riding trams in Japan smoothly and respectfully, especially during busy hours.',
        intro:
          'Most tram systems in Japan are calm and efficient. Following a few local etiquette rules makes your trip easier and more comfortable for everyone.',
        sec1Title: 'Before Boarding',
        sec1Body:
          'Line up in the marked waiting area, let passengers get off first, and prepare your IC card or fare in advance to avoid blocking the entrance.',
        sec2Title: 'Onboard Manners',
        sec2Items: [
          'Keep phone calls to a minimum and use silent mode whenever possible.',
          'Backpacks should be carried low or held in front during crowded periods.',
          'Offer priority seats to elderly passengers, people with disabilities, and parents with small children.',
        ],
        sec3Title: 'Getting Off and Paying',
        sec3Body:
          'Check the payment method (front exit or rear exit differs by operator), move toward the door before your stop, and avoid rushing at the last second.',
      },
      ja: {
        title: '日本の路面電車マナー: 旅行者向け実用ガイド',
        excerpt:
          '混雑時でも安心して乗れるように、日本の路面電車で意識したい基本マナーをまとめます。',
        intro:
          '日本の路面電車は静かで効率的に運行されています。基本的なマナーを守るだけで、自分も周囲も快適に移動できます。',
        sec1Title: '乗車前のポイント',
        sec1Body:
          '待機位置の表示に沿って並び、降車客を先に通し、ICカードや運賃は事前に準備しておくとスムーズです。',
        sec2Title: '車内での配慮',
        sec2Items: [
          '通話は控え、可能な限りサイレントモードを使う。',
          '混雑時はリュックを前に抱えるか低い位置で持つ。',
          '優先席付近では高齢者、障害のある方、小さな子ども連れに配慮する。',
        ],
        sec3Title: '降車と支払い',
        sec3Body:
          '支払い位置や降車ドアは事業者ごとに異なるため、案内表示を確認してください。降りる少し前から出口付近へ移動すると安全です。',
      },
      'zh-TW': {
        title: '日本搭乘電車禮儀: 旅客實用指南',
        excerpt:
          '整理日本搭乘路面電車時最常見的基本禮儀，讓你在尖峰時段也能更從容搭乘。',
        intro:
          '日本的路面電車多半安靜且有效率。只要掌握幾個基本禮儀，就能讓自己和其他乘客都更舒適。',
        sec1Title: '上車前要點',
        sec1Body:
          '依地面標示排隊，先讓下車乘客通過，並提前準備好 IC 卡或車資，避免堵住車門。',
        sec2Title: '車內禮儀',
        sec2Items: [
          '盡量避免通話，並將手機設為靜音模式。',
          '尖峰時段背包改背前方或手提，減少佔用空間。',
          '在博愛座附近留意高齡者、行動不便者與帶小孩的乘客需求。',
        ],
        sec3Title: '下車與付款',
        sec3Body:
          '不同路線的上下車門與付款方式可能不同，請依車內指示操作。接近目的站時提前移動到出口，可避免臨停急走。',
      },
    },
  },
]

const localeFallbackOrder: InsightsLocale[] = ['zh-TW', 'ja', 'en']

const normalizeLocale = (value: string): InsightsLocale => {
  if (value === 'ja') return 'ja'
  if (value === 'zh-TW') return 'zh-TW'
  return 'en'
}

export const getInsightsForLocale = (locale: string) => {
  const normalized = normalizeLocale(locale)
  return insights.map((article) => ({
    slug: article.slug,
    publishedAt: article.publishedAt,
    content: article.content[normalized],
  }))
}

export const getInsightBySlug = (slug: string, locale: string) => {
  const article = insights.find((item) => item.slug === slug)
  if (!article) return undefined

  const normalized = normalizeLocale(locale)
  const localized =
    article.content[normalized] ||
    localeFallbackOrder.map((key) => article.content[key]).find(Boolean)

  if (!localized) return undefined

  return {
    slug: article.slug,
    publishedAt: article.publishedAt,
    content: localized,
  }
}

export const insightSlugs = insights.map((item) => item.slug)
