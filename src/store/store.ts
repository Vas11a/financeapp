import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './slices/profileSlice'
import userPageSlice from './slices/userPageSlice'

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    userPage: userPageSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch