import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { I_PageState, T_Page } from '../interfaces'



const initialState: I_PageState = {
  currentPage: "INTRO"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    navigate: (state, action: PayloadAction<T_Page>) => {
      state.currentPage  = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { navigate } = counterSlice.actions

export default counterSlice.reducer