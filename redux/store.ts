import { configureStore } from '@reduxjs/toolkit'

import productReducer from './slices/productSlice'
import favoritesReducer from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    favorites: favoritesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
