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
      state.push({
        ...payload,
        count: 1
      })
    }
  }
})

export const { clear, addInBasket } = basketSlice.actions

export default basketSlice.reducer