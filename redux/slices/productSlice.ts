import { createSlice } from '@reduxjs/toolkit'

import { products } from '@/api/products'

const productSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    fetchAll: (state) => state = products,
    filterByBrands: (state, { payload }) =>
      state = products.filter((items) => items.brand === payload),
    filterByPrice: (state, { payload }) => {
      if (payload === 'Ascending') {
        state.sort((a, b) => a.price - b.price);
      } else if (payload === 'Descending') {
        state.sort((a, b) => b.price - a.price);
      }
    },
    filterByHash: (state, { payload }) => {
      if (payload === 'Ascending') {
        state.sort((a, b) => a.hashrate - b.hashrate);
      } else if (payload === 'Descending') {
        state.sort((a, b) => b.hashrate - a.hashrate);
      }
    }
  },
})

export const { filterByBrands, fetchAll, filterByPrice, filterByHash } = productSlice.actions

export default productSlice.reducer
