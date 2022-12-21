import api from './api'

const homeApi = api.injectEndpoints({
  endpoints: (b) => ({
    getCetegory: b.query({
      query: () => 'cetegories?populate=*',
    }),
    getSlide: b.query({
      query: () => 'slide?populate=deep',
    }),
    getProdutsWithOfferPrice: b.query({
      query: () => 'products?populate=*&filters[offerPrice][$null]',
    }),
    getRendomProduct: b.query({
      query: () => 'products?populate=*&randomSort=true&pagination[limit]=8',
    }),
  }),
})

export const {
  useGetCetegoryQuery,
  useGetSlideQuery,
  useGetProdutsWithOfferPriceQuery,
  useGetRendomProductQuery,
} = homeApi
