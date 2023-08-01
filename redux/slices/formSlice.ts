import { IFormValues } from '@/types/form.type';
import { createSlice } from "@reduxjs/toolkit";

const initialState: IFormValues | {} = {}

const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    clear: (state) => state = [],
    addFormData: (state, { payload }) => state = payload
  }
})

export const { clear, addFormData } = formSlice.actions

export default formSlice.reducer