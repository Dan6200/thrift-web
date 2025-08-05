import * as z from 'zod'
import { StoreFormType } from './types'

export const storeFormSchema: z.ZodType<StoreFormType> = z.object({
  store_name: z
    .string()
    .min(2, { message: 'Store name must be at least 2 characters.' }),
  vendor_id: z.string().optional(),
  custom_domain: z.string().nullable(),
  store_address: z.object({
    address_line_1: z
      .string()
      .min(1, { message: 'Address line 1 is required.' }),
    address_line_2: z.string().optional(),
    city: z.string().min(1, { message: 'City is required.' }),
    state: z.string().min(1, { message: 'State is required.' }),
    zip_postal_code: z
      .string()
      .min(1, { message: 'Zip/Postal code is required.' }),
    country: z.string().min(1, { message: 'Country is required.' }),
  }),
  favicon: z.string().url({ message: 'Favicon must be a valid URL.' }),
  default_page_styling: z
    .object({
      layout_template: z.enum(['default', 'minimal', 'grid']).optional(),
      font_family: z.string().optional(),
      primary_color: z.string().optional(),
      secondary_color: z.string().optional(),
      background_color: z.string().optional(),
      foreground_color: z.string().optional(),
      muted_color: z.string().optional(),
      muted_foreground_color: z.string().optional(),
      popover_color: z.string().optional(),
      popover_foreground_color: z.string().optional(),
      card_color: z.string().optional(),
      card_foreground_color: z.string().optional(),
      border_color: z.string().optional(),
      input_color: z.string().optional(),
      primary_foreground_color: z.string().optional(),
      secondary_foreground_color: z.string().optional(),
      tertiary_color: z.string().optional(),
      tertiary_foreground_color: z.string().optional(),
      accent_color: z.string().optional(),
      accent_foreground_color: z.string().optional(),
      destructive_color: z.string().optional(),
      destructive_foreground_color: z.string().optional(),
      ring_color: z.string().optional(),
      radius_color: z.string().optional(),
      hero_primary_color: z.string().optional(),
      hero_primary_foreground_color: z.string().optional(),
      hero_secondary_color: z.string().optional(),
      hero_secondary_foreground_color: z.string().optional(),
      sidebar_background_color: z.string().optional(),
      sidebar_foreground_color: z.string().optional(),
      sidebar_primary_color: z.string().optional(),
      sidebar_primary_foreground_color: z.string().optional(),
      sidebar_accent_color: z.string().optional(),
      sidebar_accent_foreground_color: z.string().optional(),
      sidebar_border_color: z.string().optional(),
      sidebar_ring_color: z.string().optional(),
    })
    .optional(),
  store_pages: z
    .array(
      z.object({
        pageType: z.literal('storePage'),
        pageTitle: z.string().min(1, { message: 'Page title is required.' }),
        metaDescription: z
          .string()
          .min(1, { message: 'Meta description is required.' }),
        canonicalUrl: z
          .string()
          .url({ message: 'Canonical URL must be a valid URL.' }),
        breadcrumbs: z.array(
          z.object({
            name: z
              .string()
              .min(1, { message: 'Breadcrumb name is required.' }),
            url: z
              .string()
              .url({ message: 'Breadcrumb URL must be a valid URL.' }),
          }),
        ),
        heroSection: z
          .object({
            title: z.string().min(1, { message: 'Hero title is required.' }),
            subtitle: z
              .string()
              .min(1, { message: 'Hero subtitle is required.' }),
            imageUrl: z
              .string()
              .url({ message: 'Hero image URL must be a valid URL.' }),
            altText: z
              .string()
              .min(1, { message: 'Hero image alt text is required.' }),
            callToAction: z.object({
              text: z
                .string()
                .min(1, { message: 'Call to action text is required.' }),
              url: z
                .string()
                .url({ message: 'Call to action URL must be a valid URL.' }),
            }),
          })
          .optional(),
        showCategories: z.boolean(),
        showFeaturedProducts: z.boolean(),
        showPromotions: z.boolean(),
        showCustomerTestimonials: z.boolean(),
        seoInfo: z.object({
          keywords: z.array(z.string()),
          schemaMarkup: z.object({
            ' @context': z.string(),
            ' @type': z.string(),
            name: z.string(),
            description: z.string(),
            url: z.string().url(),
          }),
          ogTitle: z.string().optional(),
          ogDescription: z.string().optional(),
          ogImage: z.string().url().optional(),
          ogUrl: z.string().url().optional(),
          ogType: z.string().optional(),
          twitterCard: z
            .enum(['summary', 'summary_large_image', 'app', 'player'])
            .optional(),
          twitterSite: z.string().optional(),
          twitterCreator: z.string().optional(),
          twitterTitle: z.string().optional(),
          twitterDescription: z.string().optional(),
          twitterImage: z.string().url().optional(),
        }),
      }),
    )
    .optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
})
