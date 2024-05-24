import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  backgroundColor: 'red',
  width: 250,
  height: 250,
  borderRaduis: '0'
  
}

const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeHeight(state) {
      state.height = state.height + 5
    },
    changeWidth(state){
      state.width = state.width +5
    },
    
    
    changeshape(state){
      state.borderRaduis = "50%"
    }
    
  },
})

export const { changeHeight, changeshape } = boxSlice.actions
export default boxSlice.reducer