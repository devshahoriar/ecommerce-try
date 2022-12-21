import { createSlice, current } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const x = state.findIndex(({ slug }) => slug === action.payload.slug)
      if (x >= 0) {
        state[x].qun = state[x].qun + 1
        localStorage.cart = JSON.stringify(state)
        return
      }
      state.push(action.payload)
      localStorage.cart = JSON.stringify(state)
    },
    remove: (state, action) => {
      state.splice(
        state.findIndex((_) => _.slug === action.payload),
        1
      )
      localStorage.setItem('cart', JSON.stringify(state))
    },
    addAll: (state, action) => {
      JSON.parse(action.payload)?.forEach((element) => {
        state.push(element)
      })
    },

    inc: (state, action) => {
      const x = state.findIndex(({ slug }) => slug === action.payload)
      state[x].qun++
      localStorage.cart = JSON.stringify(state)
    },
    dec: (state, action) => {
      const x = state.findIndex(({ slug }) => slug === action.payload)
      if (state[x].qun === 1) {
        state.splice(x, 1)
        localStorage.setItem('cart', JSON.stringify(state))
        return
      }
      state[x].qun--
      localStorage.cart = JSON.stringify(state)
    },
    remove_all: (state) => {
      state.length = 0
    },
  },
})

export const { add, addAll, remove, dec, inc, remove_all } = cartSlice.actions
export default cartSlice.reducer
