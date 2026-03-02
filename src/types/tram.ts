export type TramCategory =
  | 'luxury_train'
  | 'sightseeing_train'
  | 'streetcar'
  | 'themed_train'
  | 'limited_express'

export type BookingType = 'official_site' | 'jr_site' | 'travel_agency' | 'local_operator' | 'not_required'

export interface Tram {
  id: string
  name: string
  nameJa: string
  location: string
  description: string
  yearEstablished: number
  imageUrl: string
  route: string
  operatingHours: string
  highlights: string[]
  history: string
  region: string // region code for grouping (Kanto, Kansai, etc.)
  category: TramCategory
  bookingType: BookingType
  bookingUrl?: string
  company?: string // operator or company name
  sourceUrl?: string // optional attribution link
}
