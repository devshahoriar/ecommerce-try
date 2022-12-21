import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { serverUrl } from '../../util/constant'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverUrl}/api/`,
  }),
  endpoints: (builder) => ({}),
})

export default api
