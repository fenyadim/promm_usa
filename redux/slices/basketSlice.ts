import { ProductType } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  count: number
} & ProductType

const initialState: InitialState[] = []

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    clear: (state) => state = [],
    addInBasket: (state, { payload }: PayloadAction<ProductType>) => {
      const findItem = state.find((item) => item.slug === payload.slug)
      if (!findItem) {
        state.push({
          ...payload,
          count: 1
        })
      } else {
        return state.map((item) => item.slug === payload.slug ? {
          ...item,
          count: item.count + 1
        } : { ...item })
      }
    },
    removeInBasket: (state, { payload }: PayloadAction<InitialState>) => {
      if (payload.count === 1) {
        return state.filter((item) => item.slug !== payload.slug)
      } else {
        return state.map((item) => item.slug === payload.slug ? {
          ...item,
          count: item.count - 1
        } : {
          ...item
        })
      }
    }
  }
})

export const { clear, addInBasket, removeInBasket } = basketSlice.actions

export default basketSlice.reducer