import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backgroundColor: 'red',
  width: 50,
  height: 50,
}

const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeHeight(state) {
      state.heightlue = state.height + 1
    },
    decrement(state) {
      state.value = state.value - 1
    },
    reset(state) {
      state.value = 0
    }
  },
})

export const { changeHeight, decrement, reset } = boxSlice.actions
export default boxSlice.reducer