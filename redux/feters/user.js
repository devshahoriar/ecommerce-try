import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jwt: '',
  user: {},
  isLoged: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.jwt = action.payload?.jwt
      state.user = action.payload?.user
      state.isLoged = true
    },
    logOut: (state) => {
      state.jwt = ''
      state.user = {}
      state.isLoged = false
    },
  },
})

export const { addUser, logOut } = userSlice.actions
export default userSlice.reducer
