import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface profileState {
  username: string
  email: string
  password: string
}

const initialState: profileState = {
  username: '',
  email: '',
  password: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<profileState>) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.password = action.payload.password
    },
  },
})


export const { setUserData } = profileSlice.actions

export default profileSlice.reducer