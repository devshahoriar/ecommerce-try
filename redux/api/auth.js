import { addUser } from '../feters/user'
import api from './api'

export const auth = api.injectEndpoints({
  endpoints: (b) => ({
    login: b.mutation({
      query: (data) => ({
        url: '/auth/local',
        method: 'POST',
        body: data,
      }),
    }),
    revalidate: b.query({
      query: (jwt) => ({
        url: '/users/me',
        headers: {
          Authorization: 'Bearer ' + jwt,
        },
      }),
      onQueryStarted: async (args, api) => {
        try {
          const c = await api.queryFulfilled
          api.dispatch(addUser({ jwt: args, user: c.data }))
        } catch (error) {
          console.log(error);
        }
       
      },
    }),
  }),
})

export const { useLoginMutation, useRevalidateQuery } = auth
