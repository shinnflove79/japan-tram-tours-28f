import type { Tram } from '@/types/tram'
import {
  trams as tramsList,
  getTramById as getBasicTramById,
  getTramCategory,
  getTramBookingType,
  getTramBookingUrl,
} from '@/data/trams'
import enMessages from '@/locales/en.json'
import zhTWMessages from '@/locales/zh-TW.json'
import jaMessages from '@/locales/ja.json'

type MessageType = typeof enMessages

const tramMessages: Record<string, MessageType> = {
  en: enMessages,
  'zh-TW': zhTWMessages,
  ja: jaMessages,
}

// Map tram IDs to their message keys
const tramKeyMap: Record<string, keyof typeof enMessages['trams']> = {
  'hakone-tozan': 'hakoneTozanRailway',
  'arashiyama-tram': 'arashiyamaTram',
  'nagasaki-streetcar': 'nagasakiStreetcar',
  'hiroshima-electric': 'hiroshimaElectric',
  'matsumoto-tram': 'matsumotoTram',
  'jr-east-view-train': 'jrEastViewTrain',
  'jr-east-holiday-express': 'jrEastHolidayExpress',
  'enoden': 'enoden',
  'eizan-rail': 'eizanRail',
  'izukyu-resort21': 'izukyuResort21',
  'kotoden': 'kotoden',
  'toyama-chiho': 'toyamaChiho',
  'hakodate-tram': 'hakodateTram',
  'sapporo-streetcar': 'sapporoStreetcar',
  'kagoshima-tram': 'kagoshimaTram',
  'okayama-tram': 'okayamaTram',
  'toden-arakawa': 'todenArakawa',
  'kumamoto-tram': 'kumamotoTram',
  'toyohashi-tram': 'toyohashiTram',
  'izukyu-saphir-odoriko': 'izukyuSaphirOdoriko',
  'kurama-railway': 'kuramaRailway',
  'tateyama-kurobe': 'tateyamaKurobe',
  'aso-railway': 'asoRailway',
  'sakurajima-railway': 'sakurajimaRailway',
  'kochi-tram': 'kochiTram',
  'tokushima-tram': 'tokushimaTram',
  'jr-hitachi-tokiwa': 'jrHitachiTokiwa',
  'jr-azusa-kaiji-fuji': 'jrAzusaKaijiFuji',
  'jr-nikko-kinugawa': 'jrNikkoKinugawa',
  'jr-odoriko': 'jrOdoriko',
  'jr-sazanami-wakashio': 'jrSazanamiWakashio',
  'jr-kusatsu-shima': 'jrKusatsuShima',
  'jr-inaho-shirayuki': 'jrInahoShirayuki',
  'sagano-romantic-train': 'saganoRomanticTrain',
  'panda-kuroshio': 'pandaKuroshio',
  'sl-yamaguchi': 'slYamaguchi',
  'detective-conan-train': 'detectiveConanTrain',
  'kitaro-train': 'kitaroTrain',
  'west-express-ginga': 'westExpressGinga',
  'twilight-express-mizukaze': 'twilightExpressMizukaze',
  'hello-kitty-haruka': 'helloKittyHaruka',
  'berumonta-train': 'berumontaTrain',
}

export function getTramWithTranslations(id: string, locale: string): Tram | undefined {
  const basicTram = getBasicTramById(id)
  if (!basicTram) return undefined

  const messages = tramMessages[locale] || tramMessages['en']
  const tramKey = tramKeyMap[id]
  if (!tramKey) return undefined

  const tramData = messages.trams[tramKey]
  const jaTramData = jaMessages.trams[tramKey]
  if (!tramData) return undefined

  return {
    id: basicTram.id,
    name: tramData.name,
    nameJa: jaTramData?.name ?? tramData.name,
    location: tramData.location,
    description: tramData.description,
    yearEstablished: basicTram.yearEstablished,
    imageUrl: basicTram.imageUrl,
    route: tramData.route,
    operatingHours: tramData.operatingHours,
    highlights: tramData.highlights,
    history: tramData.history,
    region: basicTram.region,
    category: basicTram.category ?? getTramCategory(basicTram.id),
    bookingType: basicTram.bookingType ?? getTramBookingType(basicTram.id),
    bookingUrl: basicTram.bookingUrl ?? getTramBookingUrl(basicTram.id, basicTram.sourceUrl),
    company: basicTram.company,
    sourceUrl: basicTram.sourceUrl,
  }
}

export function getAllTramsWithTranslations(locale: string): Tram[] {
  return tramsList
    .map((tram) => getTramWithTranslations(tram.id, locale))
    .filter((tram): tram is Tram => tram !== undefined)
}

export function getTramId(index: number): string | undefined {
  return tramsList[index]?.id
}
