import { createSlice } from '@reduxjs/toolkit'

import { products } from '@/api/products'

const productSlice = createSlice({
	name: 'products',
	initialState: products,
	reducers: {},
})

export const {} = productSlice.actions

export default productSlice.reducer
