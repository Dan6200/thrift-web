interface PageStyling {
  layout_template?: 'default' | 'minimal' | 'grid'
  font_family?: string // e.g., 'Arial', 'Roboto', 'Open Sans'
  primary_color?: string // e.g., '#FF0000'
  secondary_color?: string // e.g., '#00FF00'
  background_color?: string
  foreground_color?: string
  muted_color?: string
  muted_foreground_color?: string
  popover_color?: string
  popover_foreground_color?: string
  card_color?: string
  card_foreground_color?: string
  border_color?: string
  input_color?: string
  primary_foreground_color?: string
  secondary_foreground_color?: string
  tertiary_color?: string
  tertiary_foreground_color?: string
  accent_color?: string
  accent_foreground_color?: string
  destructive_color?: string
  destructive_foreground_color?: string
  ring_color?: string
  radius_color?: string
  hero_primary_color?: string
  hero_primary_foreground_color?: string /* A very light foreground for dark mode */
  hero_secondary_color?: string
  hero_secondary_foreground_color?: string
  sidebar_background_color?: string
  sidebar_foreground_color?: string
  sidebar_primary_color?: string
  sidebar_primary_foreground_color?: string
  sidebar_accent_color?: string
  sidebar_accent_foreground_color?: string
  sidebar_border_color?: string
  sidebar_ring_color?: string
}

interface Page extends PageStyling {
  pageType: 'storePage'
  pageTitle: string
  metaDescription: string
  canonicalUrl: string
  breadcrumbs: Array<{
    name: string
    url: string
  }>
  heroSection?: {
    title: string
    subtitle: string
    imageUrl: string
    altText: string
    callToAction: {
      text: string
      url: string
    }
  }
  showCategories: boolean
  showFeaturedProducts: boolean
  showPromotions: boolean
  showCustomerTestimonials: boolean
  seoInfo: {
    keywords: string[]
    schemaMarkup: {
      ' @context': string
      ' @type': string
      name: string
      description: string
      url: string
    }
    // Open Graph for social media sharing
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    ogUrl?: string
    ogType?: string // e.g., 'website', 'article', 'product'
    // Twitter Cards for social media sharing
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
    twitterSite?: string
    twitterCreator?: string
    twitterTitle?: string
    twitterDescription?: string
    twitterImage?: string
  }
}

export default interface StoreData {
  store_name: string
  vendor_id?: string
  custom_domain: string | null
  store_address: {
    address_line_1: string
    address_line_2?: string
    city: string
    state: string
    zip_postal_code: string
    country: string
  }
  favicon: string
  default_page_styling?: PageStyling // Store-wide default styling for pages
  store_pages?: Page[]
  created_at?: Date
  updated_at?: Date
}

export type StoreFormType = StoreData
