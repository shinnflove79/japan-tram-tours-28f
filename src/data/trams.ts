import type { BookingType, TramCategory } from '@/types/tram'

export const tramIds = [
  'hakone-tozan',
  'arashiyama-tram',
  'nagasaki-streetcar',
  'hiroshima-electric',
  'matsumoto-tram',
  // JR East Joyful Trains
  'jr-east-view-train',
  'jr-east-holiday-express',
  'enoden',
  'eizan-rail',
  'izukyu-resort21',
  'kotoden',
  'toyama-chiho',
  'hakodate-tram',
  'sapporo-streetcar',
  'kagoshima-tram',
  'okayama-tram',
  'toden-arakawa',
  'kumamoto-tram',
  'toyohashi-tram',
  'izukyu-saphir-odoriko',
  'kurama-railway',
  'tateyama-kurobe',
  'aso-railway',
  'sakurajima-railway',
  'kochi-tram',
  'tokushima-tram',
  'jr-hitachi-tokiwa',
  'jr-azusa-kaiji-fuji',
  'jr-nikko-kinugawa',
  'jr-odoriko',
  'jr-sazanami-wakashio',
  'jr-kusatsu-shima',
  'jr-inaho-shirayuki',
  'sagano-romantic-train',
  'panda-kuroshio',
  'sl-yamaguchi',
  'detective-conan-train',
  'kitaro-train',
  'west-express-ginga',
  'twilight-express-mizukaze',
  'hello-kitty-haruka',
  'berumonta-train',
]

export interface TramBasic {
  id: string
  yearEstablished: number
  imageUrl: string
  region: string
  category?: TramCategory
  bookingType?: BookingType
  bookingUrl?: string
  company?: string
  sourceUrl?: string
}

const luxuryTrainIds = new Set([
  'izukyu-saphir-odoriko',
  'west-express-ginga',
  'twilight-express-mizukaze',
  'berumonta-train',
  'izukyu-resort21',
])

const themedTrainIds = new Set([
  'panda-kuroshio',
  'detective-conan-train',
  'kitaro-train',
  'hello-kitty-haruka',
  'sl-yamaguchi',
])

const streetcarIds = new Set([
  'nagasaki-streetcar',
  'hiroshima-electric',
  'matsumoto-tram',
  'enoden',
  'kotoden',
  'hakodate-tram',
  'sapporo-streetcar',
  'kagoshima-tram',
  'okayama-tram',
  'toden-arakawa',
  'kumamoto-tram',
  'toyohashi-tram',
  'kochi-tram',
  'tokushima-tram',
  'arashiyama-tram',
])

const limitedExpressIds = new Set([
  'jr-hitachi-tokiwa',
  'jr-azusa-kaiji-fuji',
  'jr-nikko-kinugawa',
  'jr-odoriko',
  'jr-sazanami-wakashio',
  'jr-kusatsu-shima',
  'jr-inaho-shirayuki',
])

const agencyBookingIds = new Set(['twilight-express-mizukaze', 'west-express-ginga'])

const localOperatorBookingIds = new Set([
  'hakone-tozan',
  'arashiyama-tram',
  'nagasaki-streetcar',
  'hiroshima-electric',
  'matsumoto-tram',
  'enoden',
  'eizan-rail',
  'izukyu-resort21',
  'kotoden',
  'toyama-chiho',
  'hakodate-tram',
  'sapporo-streetcar',
  'kagoshima-tram',
  'okayama-tram',
  'toden-arakawa',
  'kumamoto-tram',
  'toyohashi-tram',
  'izukyu-saphir-odoriko',
  'kurama-railway',
  'tateyama-kurobe',
  'aso-railway',
  'sakurajima-railway',
  'kochi-tram',
  'tokushima-tram',
  'sagano-romantic-train',
])

export const getTramCategory = (id: string): TramCategory => {
  if (luxuryTrainIds.has(id)) return 'luxury_train'
  if (themedTrainIds.has(id)) return 'themed_train'
  if (streetcarIds.has(id)) return 'streetcar'
  if (limitedExpressIds.has(id)) return 'limited_express'
  return 'sightseeing_train'
}

export const getTramBookingType = (id: string): BookingType => {
  if (limitedExpressIds.has(id)) return 'jr_site'
  if (agencyBookingIds.has(id)) return 'travel_agency'
  if (localOperatorBookingIds.has(id)) return 'local_operator'
  return 'official_site'
}

const bookingUrlById: Partial<Record<string, string>> = {
  'jr-hitachi-tokiwa': 'https://www.eki-net.com/',
  'jr-azusa-kaiji-fuji': 'https://www.eki-net.com/',
  'jr-nikko-kinugawa': 'https://www.eki-net.com/',
  'jr-odoriko': 'https://www.eki-net.com/',
  'jr-sazanami-wakashio': 'https://www.eki-net.com/',
  'jr-kusatsu-shima': 'https://www.eki-net.com/',
  'jr-inaho-shirayuki': 'https://www.eki-net.com/',
  'west-express-ginga': 'https://www.jr-odekake.net/',
  'twilight-express-mizukaze': 'https://www.twilightexpress-mizukaze.jp/en/reservation/',
}

export const getTramBookingUrl = (id: string, sourceUrl?: string): string | undefined => {
  return bookingUrlById[id] ?? sourceUrl
}

export const trams: TramBasic[] = [
  {
    id: 'hakone-tozan',
    yearEstablished: 1921,
    imageUrl: 'https://images.unsplash.com/photo-1552345386-bbeb15ef7d4b?w=800&h=600&fit=crop',
    region: 'Kanto',
    company: 'Hakone Tozan Railway',
    sourceUrl: 'https://www.hakone-tozan.co.jp/',
  },
  {
    id: 'arashiyama-tram',
    yearEstablished: 1910,
    imageUrl: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop',
    region: 'Kansai',
    company: 'Keifuku Electric Railroad',
    sourceUrl: 'https://randen.keifuku.co.jp/',
  },
  {
    id: 'nagasaki-streetcar',
    yearEstablished: 1912,
    imageUrl: 'https://images.unsplash.com/photo-1518172519437-3ebb8ea48d45?w=800&h=600&fit=crop',
    region: 'Kyushu',
    company: 'Nagasaki Electric Tramway',
    sourceUrl: 'https://nagasaki-dentetu.com/',
  },
  {
    id: 'hiroshima-electric',
    yearEstablished: 1912,
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
    region: 'Chugoku',
    company: 'Hiroshima Electric Railway',
    sourceUrl: 'https://www.hiroden.co.jp/',
  },
  {
    id: 'matsumoto-tram',
    yearEstablished: 1961,
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    region: 'Chubu',
    company: 'Matsumoto Electric Railway',
    sourceUrl: 'https://www.alpico.co.jp/traffic/rail/matsumoto_city/',
  },
  {
    id: 'jr-east-view-train',
    yearEstablished: 2002,
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/joyful/',
  },
  {
    id: 'jr-east-holiday-express',
    yearEstablished: 2015,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/joyful/',
  },
  {
    id: 'enoden',
    yearEstablished: 1902,
    imageUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop',
    region: 'Kanto',
    company: 'Enoshima Electric Railway',
    sourceUrl: 'https://www.enoden.co.jp/',
  },
  {
    id: 'eizan-rail',
    yearEstablished: 1925,
    imageUrl: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=800&h=600&fit=crop',
    region: 'Kansai',
    company: 'Eizan Electric Railway',
    sourceUrl: 'https://eizandensha.co.jp/',
  },
  {
    id: 'izukyu-resort21',
    yearEstablished: 1985,
    imageUrl: 'https://picsum.photos/800/600?random=9',
    region: 'Kanto',
    company: 'Izukyu Corporation',
    sourceUrl: 'https://www.izukyu.co.jp/',
  },
  {
    id: 'kotoden',
    yearEstablished: 1948,
    imageUrl: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
    region: 'Shikoku',
    company: 'Takamatsu-Kotohira Electric Railroad',
    sourceUrl: 'https://www.kotoden.co.jp/',
  },
  {
    id: 'toyama-chiho',
    yearEstablished: 1923,
    imageUrl: 'https://images.unsplash.com/photo-1527156388235-090b73579b29?w=800&h=600&fit=crop',
    region: 'Hokuriku',
    company: 'Toyama Chiho Railway',
    sourceUrl: 'https://www.chitetsu.co.jp/',
  },
  {
    id: 'hakodate-tram',
    yearEstablished: 1910,
    imageUrl: 'https://picsum.photos/800/600?random=5',
    region: 'Hokkaido',
    company: 'Hakodate City Transportation Bureau',
    sourceUrl: 'https://www.city.hakodate.hokkaido.jp/transportation/',
  },
  {
    id: 'sapporo-streetcar',
    yearEstablished: 1909,
    imageUrl: 'https://images.unsplash.com/photo-1486299713070-2ff3f4b901a7?w=800&h=600&fit=crop',
    region: 'Hokkaido',
    company: 'Sapporo City Transportation Bureau',
    sourceUrl: 'https://www.city.sapporo.jp/st/',
  },
  {
    id: 'kagoshima-tram',
    yearEstablished: 1912,
    imageUrl: 'https://images.unsplash.com/photo-1493857990943-2d71dc32c94f?w=800&h=600&fit=crop',
    region: 'Kyushu',
    company: 'Kagoshima City Transportation Bureau',
    sourceUrl: 'https://www.city.kagoshima.lg.jp/kakuka/shimin/shisaku/10494.html',
  },
  {
    id: 'okayama-tram',
    yearEstablished: 1928,
    imageUrl: 'https://images.unsplash.com/photo-1497633959500-2f3f1ecb3ffe?w=800&h=600&fit=crop',
    region: 'Chugoku',
    company: 'Okayama Electric Tramway',
    sourceUrl: 'https://www.okayama-kido.co.jp/',
  },
  {
    id: 'toden-arakawa',
    yearEstablished: 1913,
    imageUrl: 'https://images.unsplash.com/photo-1495631579057-5b6b3b3b5b7f?w=800&h=600&fit=crop',
    region: 'Kanto',
    company: 'Tokyo Metropolitan Bureau of Transportation',
    sourceUrl: 'https://www.kotsu.metro.tokyo.jp/eng/services/rail/arakawa.html',
  },
  {
    id: 'kumamoto-tram',
    yearEstablished: 1912,
    imageUrl: 'https://images.unsplash.com/photo-1494783367193-149034c05e41?w=800&h=600&fit=crop',
    region: 'Kyushu',
    company: 'Kumamoto City Transportation Bureau',
    sourceUrl: 'https://www.city.kumamoto.jp/common/UploadFileDsp.aspx?c_id=5&id=14495',
  },
  {
    id: 'toyohashi-tram',
    yearEstablished: 1925,
    imageUrl: 'https://images.unsplash.com/photo-1514955131778-430e63602c4b?w=800&h=600&fit=crop',
    region: 'Chubu',
    company: 'Toyohashi Railroad',
    sourceUrl: 'https://www.toyotetsu.com/railway/',
  },
  {
    id: 'izukyu-saphir-odoriko',
    yearEstablished: 2015,
    imageUrl: 'https://images.unsplash.com/photo-1511576661531-b34c7a5d248e?w=800&h=600&fit=crop',
    region: 'Kanto',
    company: 'Izukyu Corporation',
    sourceUrl: 'https://www.izukyu.co.jp/',
  },
  {
    id: 'kurama-railway',
    yearEstablished: 1927,
    imageUrl: 'https://images.unsplash.com/photo-1479839672679-a464822900b9?w=800&h=600&fit=crop',
    region: 'Kansai',
    company: 'Kurama Railway',
    sourceUrl: 'https://www.kurama-railway.co.jp/',
  },
  {
    id: 'tateyama-kurobe',
    yearEstablished: 1971,
    imageUrl: 'https://picsum.photos/800/600?random=7',
    region: 'Hokuriku',
    company: 'Tateyama Kurobe Alpine Route',
    sourceUrl: 'https://www.alpen-route.com/en/',
  },
  {
    id: 'aso-railway',
    yearEstablished: 1988,
    imageUrl: 'https://images.unsplash.com/photo-1500485046384-f59f8d4e6d84?w=800&h=600&fit=crop',
    region: 'Kyushu',
    company: 'Aso Railway',
    sourceUrl: 'https://www.aso123.co.jp/',
  },
  {
    id: 'sakurajima-railway',
    yearEstablished: 1974,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    region: 'Kyushu',
    company: 'Sakurajima Scenic Railway',
    sourceUrl: 'https://www.sakurajima-railway.co.jp/',
  },
  {
    id: 'kochi-tram',
    yearEstablished: 1904,
    imageUrl: 'https://picsum.photos/800/600?random=6',
    region: 'Shikoku',
    company: 'Tosaden (Kochi Transportation)',
    sourceUrl: 'https://www.tosaden.com/',
  },
  {
    id: 'tokushima-tram',
    yearEstablished: 1999,
    imageUrl: 'https://images.unsplash.com/photo-1497206365907-3916b6fdf72a?w=800&h=600&fit=crop',
    region: 'Shikoku',
    company: 'Tokushima City Transportation',
    sourceUrl: 'https://www.city.tokushima.lg.jp/',
  },
  {
    id: 'jr-hitachi-tokiwa',
    yearEstablished: 1986,
    imageUrl: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&h=600&fit=crop',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/hitachi/',
  },
  {
    id: 'jr-azusa-kaiji-fuji',
    yearEstablished: 1988,
    imageUrl: 'https://images.unsplash.com/photo-1517639697866-1f46a7e4dbb7?w=800&h=600&fit=crop',
    region: 'Chubu',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/azusa_kaiji/',
  },
  {
    id: 'jr-nikko-kinugawa',
    yearEstablished: 1992,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/nikko_kinugawa/',
  },
  {
    id: 'jr-odoriko',
    yearEstablished: 1995,
    imageUrl: 'https://images.unsplash.com/photo-1460603572013-d70a84a573da?w=800&h=600&fit=crop',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/odoriko/',
  },
  {
    id: 'jr-sazanami-wakashio',
    yearEstablished: 2001,
    imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/sazanami_wakashio/',
  },
  {
    id: 'jr-kusatsu-shima',
    yearEstablished: 1999,
    imageUrl: 'https://images.unsplash.com/photo-1579516025804-a15cd7ffa7da?w=800&h=600&fit=crop',
    region: 'Chubu',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/kusatsu_shima/',
  },
  {
    id: 'jr-inaho-shirayuki',
    yearEstablished: 1988,
    imageUrl: 'https://images.unsplash.com/photo-1504681869696-d977bccbaad5?w=800&h=600&fit=crop',
    region: 'Hokuriku',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/inaho/',
  },
  {
    id: 'sagano-romantic-train',
    yearEstablished: 2007,
    imageUrl: 'https://images.unsplash.com/photo-1522383507920-a63b84ace60?w=800&h=600&fit=crop',
    region: 'Kansai',
    company: 'Sagano Scenic Railway',
    sourceUrl: 'https://www.sagano-kanko.co.jp/en/',
  },
  {
    id: 'panda-kuroshio',
    yearEstablished: 2017,
    imageUrl: 'https://images.unsplash.com/photo-1459262838948-3e2de6c003bf?w=800&h=600&fit=crop',
    region: 'Kansai',
    company: 'JR West',
    sourceUrl: 'https://www.jr-odekake.net/railroad/kuroshio/pandakuroshio/',
  },
  {
    id: 'sl-yamaguchi',
    yearEstablished: 1974,
    imageUrl: 'https://images.unsplash.com/photo-1455849318169-411cb94a8eab?w=800&h=600&fit=crop',
    region: 'Chugoku',
    company: 'SL YAMAGUCHI',
    sourceUrl: 'https://www.c571.jp/render/index.html',
  },
  {
    id: 'detective-conan-train',
    yearEstablished: 2015,
    imageUrl: 'https://images.unsplash.com/photo-1544546095-97930e20c825?w=800&h=600&fit=crop',
    region: 'Chugoku',
    company: 'JR West',
    sourceUrl: 'https://www.jr-odekake.net/railroad/konanhakuto/',
  },
  {
    id: 'kitaro-train',
    yearEstablished: 2008,
    imageUrl: 'https://images.unsplash.com/photo-1528127269029-c163815266e1?w=800&h=600&fit=crop',
    region: 'Chugoku',
    company: 'JR West',
    sourceUrl: 'https://www.westjr.co.jp/travel-information/tc/train-usage-guide/trains/',
  },
  {
    id: 'west-express-ginga',
    yearEstablished: 2017,
    imageUrl: 'https://images.unsplash.com/photo-1516477228182-90e232b24ee5?w=800&h=600&fit=crop',
    region: 'Chugoku',
    company: 'JR West',
    sourceUrl: 'https://www.jr-odekake.net/railroad/westexginga/',
  },
  {
    id: 'twilight-express-mizukaze',
    yearEstablished: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1514306688772-cfb6c67f34e9?w=800&h=600&fit=crop',
    region: 'Chugoku',
    company: 'JR West',
    sourceUrl: 'https://www.twilightexpress-mizukaze.jp/en/',
  },
  {
    id: 'hello-kitty-haruka',
    yearEstablished: 2008,
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7898c3ad8ef6?w=800&h=600&fit=crop',
    region: 'Kansai',
    company: 'JR West',
    sourceUrl: 'https://www.jr-hellokittyharuka.jp/',
  },
  {
    id: 'berumonta-train',
    yearEstablished: 2015,
    imageUrl: 'https://picsum.photos/800/600?random=8',
    region: 'Hokuriku',
    company: 'JR West',
    sourceUrl: 'https://www.westjr.co.jp/global/tc/train/berumonta/',
  },
]

export const getTramById = (id: string): TramBasic | undefined => {
  return trams.find((tram) => tram.id === id)
}
