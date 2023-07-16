import { ProductType } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductType[] = []

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    clear: (state) => state = [],
    addItem: (state, { payload }: PayloadAction<ProductType>) => {
      state.push(payload)
    },
    removeItem: (state, { payload }: PayloadAction<ProductType>) =>
      state = state.filter((item) => item.slug !== payload.slug)
  }
})

export const { clear, addItem, removeItem } = favoritesSlice.actions

export default favoritesSlice.reducer