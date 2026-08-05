import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "../features/CountReducer"


export const store = configureStore({
  reducer: {
    counterhaiYe : CounterReducer
  },

})