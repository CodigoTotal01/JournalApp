//Como quireo que se muestre mi fuente unica de informacion

//El state debe dcolocarce en lo mas alto de la aplicacion

import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'

export const store = configureStore({
  //se registraran los reducer del state de auth 
  reducer: {
      auth: authSlice.reducer,
  },
})