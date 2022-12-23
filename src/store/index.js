import { configureStore } from '@reduxjs/toolkit'
import { persistedReducer } from "./reducer"

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defMiddleware) => defMiddleware({
    serializableCheck: false
  })
})
