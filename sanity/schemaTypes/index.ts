import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {authorType} from './authorType'
import {addressType} from './addressType'
import {blogCategoryType} from './blogCategoryType'
import {blogType} from './blogType'
import { brandType } from './brandType'
import { orderType } from './orderType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, 
    categoryType, 
    productType,
    orderType,
    brandType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
    ],
}
