import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // Slices will be added here for dashboard/admin functionality
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
