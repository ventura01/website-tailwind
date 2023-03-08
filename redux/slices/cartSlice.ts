import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CartAddState {
  id: number;
  name: string;
  price: number;
  descPrice: number;
  shortDesc: string;
  longDesc: string;
  url: string;
  cat: string;
}

interface CartRemoveState {
  id: number | string

}

// Define the initial state using that type
const initialState: CartAddState[]=[]

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state,action:PayloadAction<CartAddState>)=>{
      const {id} = action.payload;
      if(state.length === 0 || state.filter((item) => item.id === id).length === 0){
        state.push(action.payload);

      }
    },
    removeFromCart:(state,action:PayloadAction<CartRemoveState>)=>{}
  },
})

export const {addTocart, removeFromCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer