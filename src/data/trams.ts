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
  'twilight-express-mizukaze': 'https://www.twilightexpress-mizukaze.jp/en/',
}

export const getTramBookingUrl = (id: string, sourceUrl?: string): string | undefined => {
  return bookingUrlById[id] ?? sourceUrl
}

export const trams: TramBasic[] = [
  {
    id: 'hakone-tozan',
    yearEstablished: 1921,
    imageUrl: '/images/trams/hakone-tozan.jpg',
    region: 'Kanto',
    company: 'Hakone Tozan Railway',
    sourceUrl: 'https://www.hakone-tozan.co.jp/',
  },
  {
    id: 'arashiyama-tram',
    yearEstablished: 1910,
    imageUrl: '/images/trams/arashiyama-tram.jpg',
    region: 'Kansai',
    company: 'Keifuku Electric Railroad',
    sourceUrl: 'https://www.keifuku.co.jp/',
  },
  {
    id: 'nagasaki-streetcar',
    yearEstablished: 1912,
    imageUrl: '/images/trams/nagasaki-streetcar.jpg',
    region: 'Kyushu',
    company: 'Nagasaki Electric Tramway',
    sourceUrl: 'https://www.naga-den.com/',
  },
  {
    id: 'hiroshima-electric',
    yearEstablished: 1912,
    imageUrl: '/images/trams/hiroshima-electric.jpg',
    region: 'Chugoku',
    company: 'Hiroshima Electric Railway',
    sourceUrl: 'https://www.hiroden.co.jp/',
  },
  {
    id: 'matsumoto-tram',
    yearEstablished: 1961,
    imageUrl: '/images/trams/matsumoto-tram.jpg',
    region: 'Chubu',
    company: 'Matsumoto Electric Railway',
    sourceUrl: 'https://www.alpico.co.jp/',
  },
  {
    id: 'jr-east-view-train',
    yearEstablished: 2002,
    imageUrl: '/images/trams/jr-east-view-train.jpg',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/joyful/',
  },
  {
    id: 'jr-east-holiday-express',
    yearEstablished: 2015,
    imageUrl: '/images/trams/jr-east-holiday-express.jpg',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/joyful/',
  },
  {
    id: 'enoden',
    yearEstablished: 1902,
    imageUrl: '/images/trams/enoden.jpg',
    region: 'Kanto',
    company: 'Enoshima Electric Railway',
    sourceUrl: 'https://www.enoden.co.jp/',
  },
  {
    id: 'eizan-rail',
    yearEstablished: 1925,
    imageUrl: '/images/trams/eizan-rail.jpg',
    region: 'Kansai',
    company: 'Eizan Electric Railway',
    sourceUrl: 'https://eizandensha.co.jp/',
  },
  {
    id: 'izukyu-resort21',
    yearEstablished: 1985,
    imageUrl: '/images/trams/izukyu-resort21.jpg',
    region: 'Kanto',
    company: 'Izukyu Corporation',
    sourceUrl: 'https://www.izukyu.co.jp/',
  },
  {
    id: 'kotoden',
    yearEstablished: 1948,
    imageUrl: '/images/trams/kotoden.jpg',
    region: 'Shikoku',
    company: 'Takamatsu-Kotohira Electric Railroad',
    sourceUrl: 'https://www.kotoden.co.jp/',
  },
  {
    id: 'toyama-chiho',
    yearEstablished: 1923,
    imageUrl: '/images/trams/toyama-chiho.jpg',
    region: 'Hokuriku',
    company: 'Toyama Chiho Railway',
    sourceUrl: 'https://www.chitetsu.co.jp/',
  },
  {
    id: 'hakodate-tram',
    yearEstablished: 1910,
    imageUrl: '/images/trams/hakodate-tram.jpg',
    region: 'Hokkaido',
    company: 'Hakodate City Transportation Bureau',
    sourceUrl: 'https://www.city.hakodate.hokkaido.jp/',
  },
  {
    id: 'sapporo-streetcar',
    yearEstablished: 1909,
    imageUrl: '/images/trams/sapporo-streetcar.jpg',
    region: 'Hokkaido',
    company: 'Sapporo City Transportation Bureau',
    sourceUrl: 'https://www.city.sapporo.jp/st/',
  },
  {
    id: 'kagoshima-tram',
    yearEstablished: 1912,
    imageUrl: '/images/trams/kagoshima-tram.jpg',
    region: 'Kyushu',
    company: 'Kagoshima City Transportation Bureau',
    sourceUrl: 'https://www.city.kagoshima.lg.jp/',
  },
  {
    id: 'okayama-tram',
    yearEstablished: 1928,
    imageUrl: '/images/trams/okayama-tram.jpg',
    region: 'Chugoku',
    company: 'Okayama Electric Tramway',
    sourceUrl: 'https://www.okayama-kido.co.jp/',
  },
  {
    id: 'toden-arakawa',
    yearEstablished: 1913,
    imageUrl: '/images/trams/toden-arakawa.jpg',
    region: 'Kanto',
    company: 'Tokyo Metropolitan Bureau of Transportation',
    sourceUrl: 'https://www.kotsu.metro.tokyo.jp/eng/services/rail/arakawa.html',
  },
  {
    id: 'kumamoto-tram',
    yearEstablished: 1912,
    imageUrl: '/images/trams/kumamoto-tram.jpg',
    region: 'Kyushu',
    company: 'Kumamoto City Transportation Bureau',
    sourceUrl: 'https://www.city.kumamoto.jp/common/UploadFileDsp.aspx?c_id=5&id=14495',
  },
  {
    id: 'toyohashi-tram',
    yearEstablished: 1925,
    imageUrl: '/images/trams/toyohashi-tram.jpg',
    region: 'Chubu',
    company: 'Toyohashi Railroad',
    sourceUrl: 'https://www.toyotetsu.com/',
  },
  {
    id: 'izukyu-saphir-odoriko',
    yearEstablished: 2015,
    imageUrl: '/images/trams/izukyu-saphir-odoriko.jpg',
    region: 'Kanto',
    company: 'Izukyu Corporation',
    sourceUrl: 'https://www.izukyu.co.jp/',
  },
  {
    id: 'kurama-railway',
    yearEstablished: 1927,
    imageUrl: '/images/trams/kurama-railway.jpg',
    region: 'Kansai',
    company: 'Kurama Railway',
    sourceUrl: 'https://eizandensha.co.jp/',
  },
  {
    id: 'tateyama-kurobe',
    yearEstablished: 1971,
    imageUrl: '/images/trams/tateyama-kurobe.jpg',
    region: 'Hokuriku',
    company: 'Tateyama Kurobe Alpine Route',
    sourceUrl: 'https://www.alpen-route.com/en/',
  },
  {
    id: 'aso-railway',
    yearEstablished: 1988,
    imageUrl: '/images/trams/aso-railway.jpg',
    region: 'Kyushu',
    company: 'Aso Railway',
    sourceUrl: 'https://www.mt-torokko.com/',
  },
  {
    id: 'sakurajima-railway',
    yearEstablished: 1974,
    imageUrl: '/images/trams/sakurajima-railway.jpg',
    region: 'Kyushu',
    company: 'Sakurajima Scenic Railway',
    sourceUrl: 'https://www.city.kagoshima.lg.jp/',
  },
  {
    id: 'kochi-tram',
    yearEstablished: 1904,
    imageUrl: '/images/trams/kochi-tram.jpg',
    region: 'Shikoku',
    company: 'Tosaden (Kochi Transportation)',
    sourceUrl: 'https://www.tosaden.com/',
  },
  {
    id: 'tokushima-tram',
    yearEstablished: 1999,
    imageUrl: '/images/trams/tokushima-tram.jpg',
    region: 'Shikoku',
    company: 'Tokushima City Transportation',
    sourceUrl: 'https://www.city.tokushima.tokushima.jp/',
  },
  {
    id: 'jr-hitachi-tokiwa',
    yearEstablished: 1986,
    imageUrl: '/images/trams/jr-hitachi-tokiwa.jpg',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/hitachi/',
  },
  {
    id: 'jr-azusa-kaiji-fuji',
    yearEstablished: 1988,
    imageUrl: '/images/trams/jr-azusa-kaiji-fuji.jpg',
    region: 'Chubu',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/azusa_kaiji/',
  },
  {
    id: 'jr-nikko-kinugawa',
    yearEstablished: 1992,
    imageUrl: '/images/trams/jr-nikko-kinugawa.jpg',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/nikko_kinugawa/',
  },
  {
    id: 'jr-odoriko',
    yearEstablished: 1995,
    imageUrl: '/images/trams/jr-odoriko.jpg',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/odoriko/',
  },
  {
    id: 'jr-sazanami-wakashio',
    yearEstablished: 2001,
    imageUrl: '/images/trams/jr-sazanami-wakashio.jpg',
    region: 'Kanto',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/sazanami_wakashio/',
  },
  {
    id: 'jr-kusatsu-shima',
    yearEstablished: 1999,
    imageUrl: '/images/trams/jr-kusatsu-shima.jpg',
    region: 'Chubu',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/kusatsu_shima/',
  },
  {
    id: 'jr-inaho-shirayuki',
    yearEstablished: 1988,
    imageUrl: '/images/trams/jr-inaho-shirayuki.jpg',
    region: 'Hokuriku',
    company: 'JR East',
    sourceUrl: 'https://www.jreast.co.jp/en/multi/traininformation/inaho/',
  },
  {
    id: 'sagano-romantic-train',
    yearEstablished: 2007,
    imageUrl: '/images/trams/sagano-romantic-train.jpg',
    region: 'Kansai',
    company: 'Sagano Scenic Railway',
    sourceUrl: 'https://www.sagano-kanko.co.jp/en/',
  },
  {
    id: 'panda-kuroshio',
    yearEstablished: 2017,
    imageUrl: '/images/trams/panda-kuroshio.jpg',
    region: 'Kansai',
    company: 'JR West',
    sourceUrl: 'https://www.jr-odekake.net/railroad/kuroshio/pandakuroshio/',
  },
  {
    id: 'sl-yamaguchi',
    yearEstablished: 1974,
    imageUrl: '/images/trams/sl-yamaguchi.jpg',
    region: 'Chugoku',
    company: 'SL YAMAGUCHI',
    sourceUrl: 'https://www.c571.jp/render/index.html',
  },
  {
    id: 'detective-conan-train',
    yearEstablished: 2015,
    imageUrl: '/images/trams/detective-conan-train.jpg',
    region: 'Chugoku',
    company: 'JR West',
    sourceUrl: 'https://www.jr-odekake.net/railroad/konanhakuto/',
  },
  {
    id: 'kitaro-train',
    yearEstablished: 2008,
    imageUrl: '/images/trams/kitaro-train.jpg',
    region: 'Chugoku',
    company: 'JR West',
    sourceUrl: 'https://www.westjr.co.jp/travel-information/tc/train-usage-guide/trains/',
  },
  {
    id: 'west-express-ginga',
    yearEstablished: 2017,
    imageUrl: '/images/trams/west-express-ginga.jpg',
    region: 'Chugoku',
    company: 'JR West',
    sourceUrl: 'https://www.jr-odekake.net/railroad/westexginga/',
  },
  {
    id: 'twilight-express-mizukaze',
    yearEstablished: 2021,
    imageUrl: '/images/trams/twilight-express-mizukaze.jpg',
    region: 'Chugoku',
    company: 'JR West',
    sourceUrl: 'https://www.twilightexpress-mizukaze.jp/en/',
  },
  {
    id: 'hello-kitty-haruka',
    yearEstablished: 2008,
    imageUrl: '/images/trams/hello-kitty-haruka.jpg',
    region: 'Kansai',
    company: 'JR West',
    sourceUrl: 'https://www.jr-hellokittyharuka.jp/',
  },
  {
    id: 'berumonta-train',
    yearEstablished: 2015,
    imageUrl: '/images/trams/berumonta-train.jpg',
    region: 'Hokuriku',
    company: 'JR West',
    sourceUrl: 'https://www.westjr.co.jp/global/tc/train/berumonta/',
  },
]

export const getTramById = (id: string): TramBasic | undefined => {
  return trams.find((tram) => tram.id === id)
}

