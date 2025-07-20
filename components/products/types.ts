export type ImgData = {
  filename: string
  filepath: string
  description: string
  is_display_image: boolean
  is_landing_image: boolean
  is_video: boolean
}

export interface Product {
  product_id: number
  title: string
  category_id: number
  category_name: string
  subcategory_id: number
  subcategory_name: string
  description: string[]
  list_price: number
  net_price: number
  quantity_available: number
  created_at: string
  updated_at: string
  vendor_id: string
  average_rating: number | null
  review_count: number | null
  media: ImgData[]
}

export type ProductData = {
  products: Product[]
  total_products: string
}

export function isProductData(
  productData: unknown,
): productData is ProductData {
  return (
    isObj(productData, 'productData') &&
    !isNull(productData, 'productData') &&
    isObj((productData as ProductData).products, 'productData.products') &&
    !isNull((productData as ProductData).products, 'productData.products') &&
    isString(
      (productData as ProductData).total_products,
      'productData.total_products',
    )
  )
}

export function isProducts(products: unknown): products is Product[] {
  return (
    Array.isArray(products) && products.every((product) => isProduct(product))
  )
}

export function isProduct(product: unknown): product is Product {
  return (
    isObj(product, 'product') &&
    !isNull(product, 'product') &&
    isNumber((product as Product).product_id, 'product_id') &&
    isString((product as Product).title, 'title') &&
    !isNull((product as Product).description, 'description') &&
    isObj((product as Product).description, 'description') &&
    isNumber((product as Product).category_id, 'category_id') &&
    isString((product as Product).category_name, 'category_name') &&
    isNumber((product as Product).subcategory_id, 'subcategory_id') &&
    isString((product as Product).subcategory_name, 'subcategory_name') &&
    isString((product as Product).vendor_id, 'vendor_id') &&
    isNumber((product as Product).list_price, 'list_price') &&
    isNumber((product as Product).net_price, 'net_price') &&
    isString((product as Product).created_at, 'created_at') &&
    isString((product as Product).updated_at, 'updated_at') &&
    isNumber((product as Product).quantity_available, 'quantity_available') &&
    !isNull(
      (product as Product).media,
      'media',
      (product as Product).product_id,
    ) &&
    isObj((product as Product).media, 'media') &&
    (product as Product).media.every((media) =>
      isString(media.filename, 'media.filename'),
    )
  )
}

function isObj(obj: unknown, fieldName: string): obj is object {
  const condition = typeof obj === 'object'
  if (!condition) throw new Error(`${fieldName} must be of type object: ${obj}`)
  return condition
}

function isString(val: unknown, fieldName: string): val is string {
  const condition = typeof val === 'string'
  if (!condition) throw new Error(`${fieldName} must be of type string: ${val}`)
  return condition
}

function isNumber(val: unknown, fieldName: string): val is number {
  const condition = typeof val === 'number'
  if (!condition) throw new Error(`${fieldName} must be of type number: ${val}`)
  return condition
}

function isNull(
  val: unknown,
  fieldName: string,
  product_id?: string | number,
): val is null {
  const condition = val === null
  if (condition)
    throw new Error(
      `${fieldName} value is null: ${val}, product_id?: ${product_id ?? ''}`,
    )
  return condition
}
