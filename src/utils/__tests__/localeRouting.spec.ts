import { describe, expect, it } from 'vitest'

import {
  buildCanonicalPath,
  buildLocalizedPath,
  stripLocalePrefix,
} from '@/utils/localeRouting'

describe('localeRouting', () => {
  it('strips locale prefixes and trailing slashes', () => {
    expect(stripLocalePrefix('/ja/about/')).toEqual({
      locale: 'ja',
      basePath: '/about',
      hasLocalePrefix: true,
    })

    expect(stripLocalePrefix('/zh-tw/insights/article-slug/')).toEqual({
      locale: 'zh-TW',
      basePath: '/insights/article-slug',
      hasLocalePrefix: true,
    })
  })

  it('builds localized paths without trailing slashes', () => {
    expect(buildLocalizedPath('/about/', 'en')).toBe('/about')
    expect(buildLocalizedPath('/about/', 'ja')).toBe('/ja/about')
    expect(buildLocalizedPath('/insights/article-slug/', 'zh-TW')).toBe('/zh-tw/insights/article-slug')
    expect(buildLocalizedPath('/', 'ja')).toBe('/ja')
  })

  it('builds canonical localized paths from legacy variants', () => {
    expect(buildCanonicalPath('/about/', 'en')).toBe('/about')
    expect(buildCanonicalPath('/ja/about/', 'ja')).toBe('/ja/about')
    expect(buildCanonicalPath('/zh-tw/', 'zh-TW')).toBe('/zh-tw')
  })
})
