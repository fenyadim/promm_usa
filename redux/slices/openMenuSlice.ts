import { createSlice } from "@reduxjs/toolkit";

const openMenuSlice = createSlice({
  name: 'isOpenMenu',
  initialState: false,
  reducers: {
    toggleMenu: (state) => state = !state
  }
})

export const { toggleMenu } = openMenuSlice.actions

export default openMenuSlice.reducer