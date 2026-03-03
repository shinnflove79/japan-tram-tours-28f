import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import Footer from '@/components/Footer.vue'

const messages: Record<string, string> = {
  'footer.brand': 'Japan Trams',
  'footer.brandDesc': 'Brand description',
  'footer.quickLinks': 'Quick Links',
  'footer.followUs': 'Contact Us',
  'footer.contactEmail': 'shinnflove79@gmail.com',
  'footer.copyright': '© 2024 Japan Trams. All rights reserved.',
  'nav.home': 'Home',
  'nav.about': 'About',
}

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => messages[key] ?? key,
  }),
}))

describe('Footer', () => {
  it('renders the contact email as a mailto link', () => {
    const wrapper = mount(Footer, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :href="to"><slot /></a>',
          },
        },
      },
    })

    const emailLink = wrapper.find('a[href^="mailto:"]')
    expect(emailLink.exists()).toBe(true)
    expect(emailLink.attributes('href')).toBe('mailto:shinnflove79@gmail.com')
    expect(emailLink.text()).toBe('shinnflove79@gmail.com')
  })

  it('renders copyright with the current year', () => {
    const wrapper = mount(Footer, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :href="to"><slot /></a>',
          },
        },
      },
    })

    const currentYear = String(new Date().getFullYear())
    expect(wrapper.text()).toContain(currentYear)
    expect(wrapper.text()).not.toContain('2024')
  })

  it('renders quick links', () => {
    const wrapper = mount(Footer, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :href="to"><slot /></a>',
          },
        },
      },
    })

    expect(wrapper.find('a[href="/"]').text()).toBe('Home')
    expect(wrapper.find('a[href="/about"]').text()).toBe('About')
  })

  it('applies focus-visible classes to interactive links', () => {
    const wrapper = mount(Footer, {
      global: {
        stubs: {
          RouterLink: {
            props: ['to'],
            template: '<a :href="to" class="router-link-stub"><slot /></a>',
          },
        },
      },
    })

    const emailLink = wrapper.find('a[href^="mailto:"]')
    expect(emailLink.classes().join(' ')).toContain('focus-visible:ring-2')

    const homeLink = wrapper.find('a[href="/"]')
    expect(homeLink.classes().join(' ')).toContain('focus-visible:ring-2')
  })
})
