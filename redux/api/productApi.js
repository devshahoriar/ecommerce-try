import { serverUrl } from '../../util/constant'
import api from './api'

const productApi = api.injectEndpoints({
  endpoints: (b) => ({
    getProduct: b.query({
      query: ({ maxPrice, minPrice, search, rating ,category}) => {
        let x = ''
        if (maxPrice>0) {
          x += '&filters[price][$lte]=' + maxPrice
        }
        if (minPrice>0) {
          x += '&filters[price][$gte]=' + minPrice
        }
        if (search.length>0) {
          x += '&filters[name][$containsi]=' + search
        }
        if (category.length>0) {
          x += '&filters[sub_cetegory][title][$eq]=' + category
        }
        x += '&filters[star][$lte]=' + rating

        return 'products?pagination[limit]=16&' + x + '&populate=*&randomSort=true'
      },
    }),
  }),
})

export const { useGetProductQuery } = productApi
