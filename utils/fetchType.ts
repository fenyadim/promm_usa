import { CatalogType, ProductType } from "@/types/product.type"

export const fetchType = (item: ProductType): CatalogType => {
  if (item.power) {
    return 'containers'
  } else if (item.income) {
    return 'business'
  } else {
    return 'miners'
  }
}