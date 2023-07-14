import { configureStore } from '@reduxjs/toolkit'

import productReducer from './slices/productSlice'
import openMenuReducer from './slices/openMenuSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    isOpenMenu: openMenuReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
