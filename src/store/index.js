import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import { persistedReducer } from "./reducer"

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defMiddleware) => defMiddleware({
    serializableCheck: false
  })
})

export const persistedStore = persistStore(store)
