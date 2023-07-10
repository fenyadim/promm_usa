import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit'

import { products } from '@/api/products'

type SortType = {
  slug: string
  sortType: string
}

const productSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    fetchAll: (state) => state = products,
    filterByBrands: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        miners: products.miners.filter((items) => items.brand === payload),
      }
    },

    filterByPrice: (state, { payload }: PayloadAction<SortType>) => {
      const copyArr = [...state[payload.slug]]
      return {
        ...state,
        [payload.slug]: payload.sortType === 'Ascending' ? copyArr.sort((a, b) => a.price - b.price) : copyArr.sort((a, b) => b.price - a.price)
      };
    },

    filterByHash: (state, { payload }: PayloadAction<string>) => {
      if (payload === 'Ascending') {
        state.miners.sort((a, b) => (a.hashrate as number) - (b.hashrate as number));
      } else if (payload === 'Descending') {
        state.miners.sort((a, b) => (b.hashrate as number) - (a.hashrate as number));
      }
    }
  },
})

export const { filterByBrands, fetchAll, filterByPrice, filterByHash } = productSlice.actions

export default productSlice.reducer