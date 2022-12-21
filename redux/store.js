import { configureStore } from '@reduxjs/toolkit'
import api from './api/api'
import cartSlice from './feters/cart'
import userSlice from './feters/user'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartSlice,
    user: userSlice,
  },
  middleware: (gdm) => gdm().concat(api.middleware),
})

export default store
